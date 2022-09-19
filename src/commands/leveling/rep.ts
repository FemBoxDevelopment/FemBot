import { Command, CommandContext, Permission } from "../../interfaces/command";
import ms from "ms";
import { getMemberFromMention } from "../../utils/command-utils";
import {
  EmbedBuilder,
  CommandInteraction,
  AutocompleteInteraction,
  User,
  Message,
  SlashCommandBuilder
} from "discord.js";
import neko from "nekos.life";
import UserData from "../../data/users";
import { UserDocument } from "../../data/models/user";
import Deps from "../../utils/Deps";

export default class RepCommand implements Command {
  name = "rep";
  summary =
    "Award someone a reputation point. Can only be used once every 24 hours.";
  precondition: Permission = "";
  usage = "rep [user]"
  module = "info";
  isSlashCommand = true;

  constructor(private user = Deps.get<UserData>(UserData)) {}

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.summary)
    .addUserOption((opt) =>
      opt
        .setName("user")
        .setRequired(true)
        .setDescription("The user to give a reputation point to.")
    );

  async slashCommandExecute(interaction: CommandInteraction | AutocompleteInteraction) {
    if (interaction.isAutocomplete()) return;
    const mention = interaction.options.getUser("user");
    const SavedUser = await this.user.get(
      getMemberFromMention(interaction.user.id, interaction.guild)
    );

    this.timeoutCheck(SavedUser);

    if (mention.bot || mention.id == interaction.user.id)
      throw new Error(
        `You cannot give a rep to this user /&*footer/ Invalid Mention.`
      );

    return interaction
      .reply({ embeds: [await this.mainEmbed(interaction.user, mention)] })
      .then(async () => {
        SavedUser.repTimeout = Date.now();
        await SavedUser.updateOne(SavedUser);
      });
  }

  async mainEmbed(sender: User, receiver: User) {
    const SavedMention = await this.user.get(receiver);
    const embed = new EmbedBuilder();
    const hug = await new neko().hug();

    const totalReps = SavedMention.xpCard.reps + 1;

    SavedMention.xpCard.reps = totalReps;
    await SavedMention.updateOne(SavedMention);

    return embed
      .setColor("#ec3e3f")
      .setColor("#ec3e3f")
      .setImage(hug.url)
      .setThumbnail(receiver.displayAvatarURL())
      .setAuthor({
        name: `${sender.tag} gave a reputation point to ${receiver.tag}`,
        iconURL: sender.displayAvatarURL(),
      })
      .setDescription(
        `**Current Reps** - \`${
          SavedMention.xpCard.reps - 1
        }\` \n**Total Rep** - \`${totalReps}\``
      )
      .setFooter({
        text: `You can gift another rep in 24 hours. | Powered by Nekos.life`,
      });
  }

  timeoutCheck(SavedUser: UserDocument) {
    const timeout = 1000 * 60 * 60 * 24;
    let repTimeout = SavedUser.repTimeout;

    if (repTimeout !== null && timeout - (Date.now() - repTimeout) > 0) {
      const time = ms(timeout - (Date.now() - repTimeout), { long: true });
      throw new TypeError(`Sorry You have to wait! Remaining Time: ${time} /&*footer/`)

    }
  }

  execute = async (message: CommandContext, targetMention: string) => {
    const SavedUser = await this.user.get(message.member);

    this.timeoutCheck(SavedUser);

    const mention = getMemberFromMention(targetMention, message.guild);

    if (!mention || mention.user.bot || mention.user.id == message.author.id)
      throw new Error(`You cannot give a rep to this user /&*footer/ Invalid Mention.`);

    return message.message
      .reply({ embeds: [await this.mainEmbed(message.author, mention.user)] })
      .then(() => {
        message.message.react("✅").then(async () => {
          SavedUser.repTimeout = Date.now();
          await SavedUser.updateOne(SavedUser);
        });
      });
  };
}
