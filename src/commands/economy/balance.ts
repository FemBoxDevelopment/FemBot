import { Command, CommandContext, Permission } from "../../interfaces/command";
import Discord, {
  SlashCommandBuilder,
  AutocompleteInteraction,
  CommandInteraction,
  EmbedBuilder,
  GuildMember,
  Message,
  User,
} from "discord.js";
import Members from "../../data/members";
import Deps from "../../utils/Deps";
import Guilds from "../../data/guilds";
import { getMemberFromMention } from "../../utils/command-utils";

export default class BalanceCommand implements Command {
  name = "balance";
  summary = "View your balance!";
  usage = 'balance [user]'
  precondition: Permission = "";
  aliases = ["bal"];
  module = "economy";
  isSlashCommand = true;

  constructor(
    private members = Deps.get<Members>(Members),
    private guilds = Deps.get<Guilds>(Guilds)
  ) {}

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.summary)
    .addUserOption((opt) =>
      opt
        .setName("user")
        .setRequired(false)
        .setDescription("The user to check the balance of")
    );

  slashCommandExecute = async (interaction: AutocompleteInteraction | CommandInteraction) => {
    if(interaction.isAutocomplete()) return; 
    let user = interaction.options.getUser("user");

    if (!user || user.bot) user = interaction.user;

    const member = 
      getMemberFromMention(user.id, interaction.guild);

    this.sendEmbed(interaction, member);
  };

  execute = async (message: CommandContext, ...args: string[]) => {
    let user = message.member;

    if (message.message.mentions.users.first())
      user = getMemberFromMention(message.mentions.users.first().id, message.guild)

    if (user.user.bot) user = message.member;

    this.sendEmbed(message.message, user);
  };

  /**
   * sends balance embed as a reply to the user interaction
   *
   * @param interaction Message or CommandInteraction to reply to user message
   * @param user GuildMember to check balance
   * @returns replies to the user interaction
   */
  private async sendEmbed(
    interaction: Message | CommandInteraction,
    user: GuildMember
  ) {
    const guild = await this.guilds.get(interaction.guildId);
    const currencyName =
      guild.shop.currency.name.charAt(0).toUpperCase() +
      guild.shop.currency.name.slice(1);

    const balance = await this.members.getBalance(user);

    const embed = new EmbedBuilder()
      .setColor("#dd2e45")
      .setAuthor({
        name: `${user.user.tag}`,
        iconURL: user.user.displayAvatarURL(),
      })
      .setDescription(
        `\`${balance}\` ${guild.shop.currency.icon} | **${currencyName}**`
      );

    interaction.reply({
      embeds: [embed],
      allowedMentions: { repliedUser: false },
    });
  }
}
