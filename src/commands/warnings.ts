import { GuildDocument } from './../data/models/guild';
import { Command, CommandContext, Permission } from '../interfaces/command';
import Members from '../data/members';
import Discord, { BaseGuildTextChannel, EmbedBuilder, GuildMember, TextChannel } from 'discord.js';
import { MemberDocument } from '../data/models/member';
import Deps from '../utils/deps';
import { getMemberFromMention } from '../utils/command-utils';
import Guilds from '../data/guilds';
import { SavedGuild } from '../data/models/guild';

export default class WarningsCommand implements Command {
  precondition: Permission = 'ViewAuditLog';
  name = 'warnings';
  aliases = ['history'];
  usage = 'warnings [user]';
  summary = 'Display your warnings, or the warnings of a member.';
  cooldown = 3;
  module = 'Auto-mod';

  constructor(private members = Deps.get<Members>(Members)) {}

  execute = async (message: CommandContext, userMention?: string, position?: string) => {
    let embed = new EmbedBuilder();
    const target = userMention ? getMemberFromMention(userMention, message.guild) : message.member;
    const savedMember = await this.members.get(target);

    let guilds = Deps.get<Guilds>(Guilds);
    const SavedGuild = await guilds.get((message.guild as any).id);

    if (position) {
      if (position.toLowerCase() == 'all') return this.displayAllWarnings(savedMember, message.channel as any, target, SavedGuild);
      return this.displayWarning(+position, savedMember, message.channel as any, SavedGuild);
    }

    if (target.id == message.member.id) {
      embed
        .setColor('Red')
        .setDescription(
          `You have \`${savedMember.warnings.length}\` warnings. \n\nIf you'd like to see more information about a warning run: \n \`${SavedGuild.general.prefix}warnings [user] [warning number] \``
        );
      return message.message.reply({ embeds: [embed] });
    }
    return this.displayAllWarnings(savedMember, message.channel as any, target, SavedGuild);
  };

  private async displayWarning(position: number, savedMember: MemberDocument, channel: TextChannel, SavedGuild: GuildDocument) {
    if (position <= 0 || position > savedMember.warnings.length) throw new TypeError('Warning at position not found on user.');

    const warning = savedMember.warnings[position - 1];
    const instigator = (channel as any).client.users.cache.get(warning.instigatorId);
    let embed = new EmbedBuilder()
      .setColor('Red')
      .setDescription(`**<@${savedMember.userId}>'s Warning #${position}**`)
      .addFields([
        {
          name: 'Warned By:',
          value: `${instigator ?? 'N/A'}`,
          inline: true,
        },
        {
          name: 'Reason',
          value: warning.reason,
          inline: true,
        },
        {
          name: 'Date',
          value: `\`${warning.at.getDate()}/${warning.at.getMonth()}/${warning.at.getFullYear()}\``,
          inline: true,
        },
      ])
      .setFooter({ text: `Run ${SavedGuild.general.prefix}warnings [user] all to view all warnings.` });
    (channel as any).send({ embeds: [embed] });
  }

  private async displayAllWarnings(savedMember: MemberDocument, channel: TextChannel, member: GuildMember, SavedGuild: GuildDocument) {
    //get all warnings
    const warnings = savedMember.warnings;
    if (warnings.length == 0) throw new TypeError('User has no warnings.');

    //create embed
    let embed = new EmbedBuilder()
      .setColor('Red')
      .setAuthor({ name: `${member.user.username}#${member.user.discriminator}'s History`, iconURL: member.user.displayAvatarURL() })
      .setFooter({ text: `Run ${SavedGuild.general.prefix}warnings [user] [warning number] to view a specific warning.` });

    let warningsList = [];

    //add warnings
    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i];
      const instigator = (channel as any).client.users.cache.get(warning.instigatorId);
      warningsList.push(`\`${i + 1}.\` | By: ${instigator ?? 'N/A'} | Reason: \`${warning.reason}\``);
      //embed.addField(`Warning #${i + 1}`, `**By**: <@!${instigator ?? 'N/A'}>\n**For**: \`${warning.reason}\``);
    }
    embed.setDescription(warningsList.join('\n'));
    (channel as any).send({ embeds: [embed] });
  }
}
