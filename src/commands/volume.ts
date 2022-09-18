import { Command, CommandContext, Permission } from "../interfaces/command";
import Deps from "../utils/deps";
import Music, { ConnectionStatus } from "../modules/music/music";
import {
  AutocompleteInteraction,
  CommandInteraction,
  EmbedBuilder,
  Message,
  SlashCommandBuilder,
} from "discord.js";
import { getMemberFromMention } from "../utils/command-utils";

export default class VolumeCommand implements Command {
  aliases = ["vol"];
  name = "volume";
  summary = "Changes the volume of the bot.";
  precondition: Permission = "Speak";
  cooldown = 3;
  module = "Music";
  isSlashCommand = true;

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.summary)
    .addIntegerOption((opt) =>
      opt.setDescription("Volume").setRequired(true).setName("volume")
    );

  constructor(private music = Deps.get<Music>(Music)) {}

  slashCommandExecute = async (interaction: CommandInteraction | AutocompleteInteraction) => {
    if (interaction.isAutocomplete()) return;
    const volumeOption = interaction.options.get("volume").value as number;

    this.main(interaction, volumeOption);
  };

  execute = async (message: CommandContext, ...args: string[]) => {
    const player = this.music.getQueue(message.guild);

    if (!args[0] || isNaN(+args[0])) {
      const volume = player.volume;
      return message.message.reply({ embeds: [
        new EmbedBuilder().setColor('Blue').setDescription(`Current volume is ${volume}`).setAuthor({ name: 'Volume', iconURL: message.guild.members.me.avatarURL() })
      ] });
    }

    this.main(message.message, +args[0]);
  };


  private main(interaction: CommandInteraction | Message, volume: number) {
    const player = this.music.getQueue(interaction.guild);
    const member = getMemberFromMention(interaction.member.user.id, interaction.guild)

    if(!member.voice.channel)
        throw new TypeError('You must be in a `VoiceChannel` to play music. /&*footer/ not in VoiceChannel.')

    if (
        this.music.getConnectionStatus(interaction.guild) ==
        ConnectionStatus.Disconnected
      )
        throw new TypeError("/&*footer/ No songs currently playing");

    if (volume < 0 || volume > 100) {
      throw new TypeError(
        "Please provide a valid volume between 0 and 100%. /&*footer/ Invalid Volume."
      );
    }

    player.setVolume(volume);

    const embed = new EmbedBuilder()
      .setAuthor({ name: 'Volume', iconURL: interaction.guild.members.me.avatarURL() })
      .setDescription(`✅ Successfully set volume to \`${volume}%\`.`)
      .setColor("Blue");

    interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false } });
  }
}
