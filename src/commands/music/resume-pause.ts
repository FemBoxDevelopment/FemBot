import {
  CacheType,
  CommandInteraction,
  GuildTextBasedChannel,
  SlashCommandBuilder,
  AutocompleteInteraction,
  EmbedBuilder,
} from "discord.js";
import { Command, CommandContext, Permission } from "../../interfaces/command";
import Deps from "../../utils/Deps";
import Music, { ConnectionStatus } from "../../modules/music/music";
import { getMemberFromMention } from "../../utils/command-utils";

export default class ResumePauseCommand implements Command {
  cooldown = 2;
  module = "Music";
  name = "resume-pause";
  precondition: Permission = "Speak";
  summary = "Plays or pauses the bot.";
  usage = "resume";
  isSlashCommand = true;

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.summary);

  constructor(private music = Deps.get<Music>(Music)) {}

  slashCommandExecute = async (
    interaction: AutocompleteInteraction | CommandInteraction
  ) => {
    if (interaction.isAutocomplete()) return;
    const member = getMemberFromMention(interaction.user.id, interaction.guild)
    const player = this.music.getQueue(interaction.guild);

    if (
      this.music.getConnectionStatus(interaction.guild) ==
      ConnectionStatus.Disconnected
    )
      throw new TypeError("/&*footer/ No songs currently playing");

    if (!member.voice.channel)
        throw new TypeError(
          "You must be in a `VoiceChannel` to pause or resume the bot. /&*footer/ not in VoiceChannel."
        );

    if (player.playing) {
      player.pause();
    } else if (player.paused) {
      player.resume();
    }

    const embed = new EmbedBuilder()
    .setAuthor({ name: player.paused ? 'Paused' : 'Resumed' })
    .setDescription(`✅ Music has been ${player.paused ? 'paused' : 'resumed'}.`)
    .setColor('Blue')

    interaction.reply({embeds: [embed]})
  };

  execute = async (message: CommandContext) => {
    const player = this.music.getQueue(message.guild);

    if (
      this.music.getConnectionStatus(message.guild) ==
      ConnectionStatus.Disconnected
    )
      throw new TypeError("/&*footer/ No songs currently playing");

    if (!message.member.voice.channel)
      throw new TypeError(
        "You must be in a `VoiceChannel` to pause or resume the bot. /&*footer/ not in VoiceChannel."
      );

    if (player.playing) {
      player.pause();
    } else if (player.paused) {
      player.resume();
    }

    const embed = new EmbedBuilder()
    .setAuthor({ name: player.paused ? 'Paused' : 'Resumed' })
    .setDescription(`✅ Music has been ${player.paused ? 'paused' : 'resumed'}.`)
    .setColor('Blue')

    message.message.reply({embeds: [embed]})
  };
}
