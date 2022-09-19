import { UserDocument } from './../data/models/user';
import { Command, CommandContext, Permission } from '../interfaces/command';
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
import Deps from '../utils/deps';
import Guilds from '../data/guilds';
import Users from '../data/users';

export default class HelpCommand implements Command {
  name = 'help';
  summary = 'Get a link to list all commands.';
  precondition: Permission = '';
  cooldown = 3;
  module = 'info';
  isSlashCommand = true;

  constructor(private guilds = Deps.get<Guilds>(Guilds), private users = Deps.get<Users>(Users)) {}

  arrow = '<a:aeth_pink_arrow:931319767602716672>';
  heart = '<a:aeth_pink_heart:931319823135297546>';
  currency = 'Strawberry Milk';
  emoji = '<a:milk:931318946576105562>';

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
    const user = message.bot.users.cache.get(process.env.OWNER_ID);

    message.message.react('✅');
    this.followingMessage(user, SavedUser, message.guild);
  };

  buttonExecute = async (interaction: ButtonInteraction, buttonId: string) => {};

  async followingMessage(user: User, SavedUser: UserDocument, guild: Guild) {
    const useful = new EmbedBuilder()
      .setColor('#ef4641')
      .setTitle('Useful Links')
      .setImage('https://i.imgur.com/46ke5Q3.jpg')
      .setDescription(
        `**Dashboard** - ${process.env.DASHBOARD_URL} \n**Commands** - ${process.env.DASHBOARD_URL}/commands \n\n${this.arrow} **Announcments** - <#930595146859425832> \n${this.arrow} **Rules** - <#930598645802348594> \n${this.arrow} **Trigger Words** - <#930601570545066024> \n${this.arrow} **Self Roles** - <#930595189523873872>`
      );
    let embed = new EmbedBuilder()
      .setColor('#ef4641')
      // .setThumbnail(user.displayAvatarURL())
      // .setTitle(`Made possible by ${this.heart} ${user.username}#${user.discriminator} ${this.heart}`)
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
    }); /*.then(async(msg) => {
        msg.react('🎉')

        let filter = (reaction: MessageReaction, user: User) => {
          return ['🎉'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        let collector = msg.createReactionCollector({ filter, max: 1 });

        collector.on('collect', async(reaction, user) => {

          if(!SavedUser.easterEggs.helpReaction) {

            SavedUser.easterEggs.helpReaction = true;
            SavedUser.updateOne(SavedUser).then(async() => {

              let reward = Math.floor(Math.random() * 512) + 126;
              await addBalance(guild.id, message.author.id, reward);

              let embed = new Discord.MessageEmbed()
              .setColor('#ef4641')
              .setAuthor(`${guild.name}`, guild.iconURL())
              .setDescription(`You've discovered an easter egg! Your reward is... || ${this.emoji} | ${reward} **${this.currency}** || !`)

              message.member.send({ embeds: [embed] })
            })
          }

        })
      })*/
  }
}
