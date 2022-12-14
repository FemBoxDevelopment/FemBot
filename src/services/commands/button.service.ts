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

      this.emit.buttonInteraction(interaction);

      if(userId)
        this.validateInteraction(interaction, this.getUserfromUserId(interaction, userId));

      return await command.buttonExecute(interaction, buttonId);

    } catch (error) {}
  }

  private getUserfromUserId(interaction: ButtonInteraction, userId: string) {
    return interaction.guild.members.cache.get(userId);
  }

  private validateInteraction(interaction: ButtonInteraction, interactionCreator: GuildMember) {
    if(interaction.user.id != interactionCreator.id) 
      throw new TypeError(`You can't interact with this button.`)
  }
}