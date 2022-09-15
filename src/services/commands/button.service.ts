import { ButtonInteraction, EmbedBuilder, GuildMember } from 'discord.js';
import Deps from '../../utils/deps';
import Emit from '../emit';
import CommandService from './command.service';


export default class ButtonService {

  constructor(
    private emit = Deps.get<Emit>(Emit),
    private command = Deps.get<CommandService>(CommandService), 
  ) {}
  

  public async handle(interaction: ButtonInteraction) {
    try {
      let userId: string;
      const [ commandName, buttonId ] = interaction.customId.split('-');

      if(interaction.customId.split('-').length > 2)
        userId = interaction.customId.split('-')[2];

      const command = this.command.commands.get(commandName);
      if(!command) throw new Error(`Command ${commandName} not found, buttonId: ${buttonId}`);

      const user = this.getUserfromUserId(interaction, interaction.user.id);
      this.emit.buttonInteraction(interaction);

      if(userId)
        this.validateInteraction(interaction, this.getUserfromUserId(interaction, userId));

      return await command.buttonExecute(interaction, buttonId);

    } catch (error) {
      const content = (error as Error)?.message ?? 'unknown error occurred.';
      const footer = content.split('/&*footer/')[1];
      const text = content.split('/&*footer/')[0].length > 5 ? content.split('/&*footer/')[0] : content.split('/&*footer/')[1]

      const embed = new EmbedBuilder()
      .setColor('Red')
      .setDescription(`> ⚠️ - ${text}`)
      .setAuthor({ name: 'An Error Occurred', iconURL: 'https://images-ext-2.discordapp.net/external/62J2SiHTggRlGa6fXltfhqS5Aa6Bpqhdn_QvvIVQsI4/%3Fv%3D1/https/cdn.discordapp.com/emojis/695631398718930997.png'})
      .setFooter({ text: footer })      
      await interaction.reply({ embeds: [embed] })
    }
  }

  private getUserfromUserId(interaction: ButtonInteraction, userId: string) {
    return interaction.guild.members.cache.get(userId);
  }

  private validateInteraction(interaction: ButtonInteraction, interactionCreator: GuildMember) {
    if(interaction.user.id != interactionCreator.id) 
      throw new TypeError(`You can't interact with this button.`)
  }
}