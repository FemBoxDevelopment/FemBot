import { CacheType, CommandInteraction, GuildTextBasedChannel, SlashCommandBuilder, AutocompleteInteraction } from 'discord.js';
import { Command, CommandContext, Permission } from '../../interfaces/command';
import Deps from '../../utils/Deps';
import Music from '../../modules/music/music';
import { getMemberFromMention } from '../../utils/command-utils';

export default class PlayCommand implements Command {
  aliases = ['p'];
  cooldown = 2;
  module = 'Music';
  name = 'play';
  precondition: Permission = 'Speak';
  summary = 'play music from a supported URL or search a query on YouTube';
  usage = 'play query'
  isSlashCommand = true;

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.summary)
    .addStringOption(opt => opt.setName('input').setDescription('A supported URL or a search query').setAutocomplete(true).setRequired(true))

  constructor(
    private music = Deps.get<Music>(Music),
  ) {}

  slashCommandExecute = async(interaction: AutocompleteInteraction | CommandInteraction) => {
    if(interaction.isAutocomplete()) {
      const focusedValue = interaction.options.getFocused();

      let choices = await this.music.autoCompleteSongs(focusedValue)
      if(focusedValue.length == 0)
        choices = null;

      await interaction.respond(
        choices.map(choice => ({ name: choice.name, value: choice.url }))
      )
    }

    if(interaction.isCommand()) {
      const option = interaction.options.get('input', true);
      const member = getMemberFromMention(interaction.user.id, interaction.guild)

      await interaction.deferReply({ ephemeral: true });

      if(!member.voice.channel)
        throw new TypeError('You must be in a `VoiceChannel` to play music. /&*footer/ not in VoiceChannel.')

      await this.music.client.play(member.voice.channel, option.value.toString(), {
        textChannel: interaction.channel as GuildTextBasedChannel,
        member
      });

      interaction.editReply({ content: '👌' })
    }

  };
  
  execute = async(message: CommandContext, ...args: string[]) => {
    if(!message.member.voice.channel)
        throw new TypeError('You must be in a `VoiceChannel` to play music. /&*footer/ not in VoiceChannel.')

    const query = args?.join(' ');
    if(!query)
        throw new TypeError('Please provide a query. /&*footer/ missing song query')
    
    await this.music.client.play(message.member.voice.channel, query, {
        message: message.message,
        textChannel: message.channel as GuildTextBasedChannel,
        member: message.member
    })
  }
}
