import { UserDocument } from '../../data/models/user';
import { Command, CommandContext, Permission } from '../../interfaces/command';
import Discord, {
  MessageReaction,
  User,
  CommandInteraction,
  Message,
  Guild,
  ButtonInteraction,
  ActionRowBuilder,
  ButtonBuilder,
  SlashCommandBuilder,
  AutocompleteInteraction,
  EmbedBuilder,
  ButtonStyle,
  messageLink,
} from 'discord.js';
import Deps from '../../utils/Deps';
import Guilds from '../../data/guilds';
import Users from '../../data/users';
import Members from '../../data/members';
import { getMemberFromMention } from '../../utils/command-utils';

export default class HelpCommand implements Command {
  name = 'help';
  summary = 'Get a link to list all commands.';
  precondition: Permission = '';
  cooldown = 3;
  module = 'info';
  isSlashCommand = true;

  constructor(private guilds = Deps.get<Guilds>(Guilds), private users = Deps.get<Users>(Users), private member = Deps.get<Members>(Members),) {}

  slashCommandData = new SlashCommandBuilder().setName(this.name).setDescription(this.summary);

  slashCommandExecute = async (interaction: CommandInteraction | AutocompleteInteraction) => {
    if (interaction.isAutocomplete()) return;
    await interaction.reply({ content: '✅', ephemeral: true }).then(async () => {
      const SavedUser = await this.users.get(interaction.user);

      try {
        await this.followingMessage(interaction.user, SavedUser, interaction.guild);
      } catch (e) {
        return await interaction.editReply('Unable to send Direct Message! ❌');
      }
    });
  };

  execute = async (message: CommandContext) => {
    const SavedUser = await this.users.get(message.author);

    message.message.react('✅');
    this.followingMessage(message.user, SavedUser, message.guild);
  };

  buttonExecute = async (interaction: ButtonInteraction, buttonId: string) => {};

  async followingMessage(user: User, SavedUser: UserDocument, guild: Guild) {
    const useful = new EmbedBuilder()
      .setColor('#ef4641')
      .setTitle('Useful Links')
      .setImage('https://i.imgur.com/46ke5Q3.jpg')
      .setDescription(
        `**Dashboard** - ${process.env.DASHBOARD_URL} \n**Commands** - ${process.env.DASHBOARD_URL}/commands`
      );
    let embed = new EmbedBuilder()
      .setColor('#ef4641')
      .setDescription(`The Prefix for \`${(guild as any).name}\` is \`${(await this.guilds.get((guild as any).id)).general.prefix}\``)
      .setFooter({
        text: `Click the reaction for a prize, can only be done once :3`,
      });


    const ButtonComponent = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder().setEmoji(`🎉`).setCustomId(`${this.name}-easterEgg`).setStyle(ButtonStyle.Danger)
    );

    (user as any).send({
      embeds: [useful, embed],
      components: [ButtonComponent],
    }).then(async(msg) => {})
      //   msg.react('🎉')

      //   let filter = (reaction: MessageReaction, user: User) => {
      //     return ['🎉'].includes(reaction.emoji.name) && user.id === msg.author.id;
      //   };

      //   let collector = msg.createReactionCollector({ filter, max: 1 });

      //   collector.on('collect', async(reaction, user) => {

      //     if(!SavedUser.easterEggs.helpReaction) {

      //       SavedUser.easterEggs.helpReaction = true;
      //       SavedUser.updateOne(SavedUser).then(async() => {

      //         let reward = Math.floor(Math.random() * 512) + 126;
      //         await this.member.addBalance(getMemberFromMention(user.id, guild), reward);

      //         let embed = new EmbedBuilder()
      //         .setColor('#ef4641')
      //         .setAuthor({name: `${guild.name}`, iconURL: guild.iconURL()})
      //         .setDescription(`You've discovered an easter egg! Your reward is... || ${this.emoji} | ${reward} **${this.currency}** || !`);

      //         (user as any).send({ embeds: [embed] })
      //       })
      //     }

      //   })
      // })
  }
}
