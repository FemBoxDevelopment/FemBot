import { CacheType, CommandInteraction, GuildTextBasedChannel, SlashCommandBuilder, AutocompleteInteraction } from 'discord.js';
import { Command, CommandContext, Permission } from '../interfaces/command';
import Deps from '../utils/deps';
import Music from '../modules/music/music';
import { getMemberFromMention } from '../utils/command-utils';

export default class PlayCommand implements Command {
  module = 'Music';
  name = 'leave';
  precondition: Permission = 'Speak';
  summary = 'Leave a voice channel';
  usage = 'leave'
  isSlashCommand = true;

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.summary)

  constructor(
    private music = Deps.get<Music>(Music),
  ) {}

  slashCommandExecute = async(interaction: AutocompleteInteraction | CommandInteraction) => {
    if(interaction.isAutocomplete()) return;

    const member = getMemberFromMention(interaction.user.id, interaction.guild)
    if(!member.voice.channel)
        throw new TypeError('You must be in a `VoiceChannel` to play music. /&*footer/ not in VoiceChannel.')
    
    this.music.client.voices.leave(interaction.guild)

    interaction.reply('👌')
  };
  
  execute = async(message: CommandContext, ...args: string[]) => {
    if(!message.member.voice.channel)
        throw new TypeError('You must be in a `VoiceChannel` to play music. /&*footer/ not in VoiceChannel.')
    
    this.music.client.voices.leave(message.guild)
  }
}
