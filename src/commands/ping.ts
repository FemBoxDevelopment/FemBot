import { Command, CommandContext, Permission } from "../interfaces/command";
import {
  AutocompleteInteraction,
  Client,
  CommandInteraction,
  EmbedBuilder,
  Message,
  SlashCommandBuilder,
} from "discord.js";

export default class PingCommand implements Command {
  name = "ping";
  summary = "Probably the best command ever created.";
  precondition: Permission = "";
  cooldown = 3;
  module = "info";
  isSlashCommand = true;

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.summary);

  slashCommandExecute = async (interaction: AutocompleteInteraction | CommandInteraction) => {
      if(interaction.isAutocomplete()) return; 
      this.pingEmbed(interaction, interaction.client.ws.ping, interaction.client);
  }

  private pingEmbed = (
    interaction: CommandInteraction | Message,
    ping: number,
    bot: Client
  ) => {
    const p =
      ping < 100 ? " <:ping1:1019341949293035540> - Good " + ping
        : ping > 200
        ? "<:ping3:1019342047087431752> - Bad " + ping
        : ping > 100
        ? " <:ping2:1019342429301768295> - Normal " + ping
        : ping;
    const color =
      ping < 100
        ? "#3BA55C"
        : ping > 200
        ? "#ED4245"
        : ping > 100
        ? "#FAA61A"
        : ping;
    const embed = new EmbedBuilder()
      .setAuthor({ name: bot.user.tag, iconURL: bot.user.avatarURL() })
      .setDescription(`**Ping is :\n${p} ms**`)
      .setColor(color);

    interaction.reply({
      embeds: [embed],
      allowedMentions: {
        repliedUser: false,
      },
    });
  };

  execute = (message: CommandContext) =>
    this.pingEmbed(message.message, message.bot.ws.ping, message.bot);
}
