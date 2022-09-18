import Event from "../../interfaces/event";
import Deps from "../../utils/deps";
import CommandService from "../commands/command.service";
import Guilds from "../../data/guilds";
import {
  BaseInteraction, Events,
} from "discord.js";
import ButtonService from "../commands/button.service";

export default class InteractionCreateHandler implements Event {
  on = Events.InteractionCreate;

  constructor(
    private commands = Deps.get<CommandService>(CommandService),
    private guilds = Deps.get<Guilds>(Guilds),
    private button = Deps.get<ButtonService>(ButtonService)
  ) {}

  async invoke(interaction: BaseInteraction) {
    try {
      const savedGuild = await this.guilds.get(interaction.guildId);
      if (interaction.isButton()) 
        return this.button.handle(interaction);

      if (interaction.isCommand())
        await this.commands.handle(interaction, savedGuild);

      if(interaction.isAutocomplete())
        await this.commands.handle(interaction, savedGuild)
    } catch (e) {}
  }
}
