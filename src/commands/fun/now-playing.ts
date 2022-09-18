import { Command, CommandContext, Permission } from '../../interfaces/command';
import Music, { ConnectionStatus } from '../../modules/music/music';
import Deps from '../../utils/deps';
import { VoiceConnectionDisconnectedState } from '@discordjs/voice';
import { AutocompleteInteraction, CacheType, CommandInteraction, EmbedBuilder, Message, SlashCommandBuilder, messageLink } from 'discord.js';

export default class implements Command {
  aliases = ['np', 'now']
  name = 'now-playing';
  summary = 'Show the track that is currently playing.';
  usage = 'now-playing';
  precondition: Permission = '';
  cooldown = 3;
  module = 'Music';
  isSlashCommand = true;

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name.split('-')[0])
    .setDescription(this.summary)
    .addSubcommand(sub =>
        sub.setName('playing')
        .setDescription(this.summary)
    )

  constructor(private music = Deps.get<Music>(Music)) {}

  slashCommandExecute = async(interaction: CommandInteraction | AutocompleteInteraction) => {
    if(interaction.isAutocomplete()) return;

    if (this.music.getConnectionStatus(interaction.guild) == ConnectionStatus.Disconnected)
      throw new TypeError('/&*footer/ No songs currently playing');

    this.main(interaction)
  }
  
  async execute(message: CommandContext) { 
    if (!this.music.getConnectionStatus(message.guild))
      throw new TypeError('/&*footer/ No songs currently playing');

    this.main(message.message) 
  }

  private async main(interaction: CommandInteraction | Message) {
    const player = this.music.getQueue(interaction.guild);

    const track = player.songs[0]
    const embed = new EmbedBuilder()
    .setAuthor({ name: track.uploader.name, url: track.uploader.url })
    .setDescription(`**Now Playing** - [${track.name}](${track.url})`)
    .setThumbnail(track.thumbnail)
    .addFields([
        {
            name: 'Duration',
            value: `${player.formattedCurrentTime} / ${track.formattedDuration}`,
            inline: true
        },
        {
            name: 'Requested By',
            value: `<@${track.user.id}>`,
            inline: true
        }
    ])
    

    await interaction.reply({ 
        embeds: [ embed ],
        allowedMentions: { repliedUser: false }
    });
  }
}