import { SavedMember } from './../data/models/member';
import Leveling from '../modules/xp/leveling';
import { Command, CommandContext, Permission } from '../interfaces/command';
import { getMemberFromMention } from '../utils/command-utils';
import Discord, { EmbedBuilder, GuildMember, User } from 'discord.js';

export default class LeaderboardCommand implements Command {
  name = 'leaderboard';
  summary = "View the top ten users in the guild. maybe you'll see yourself up there!";
  precondition: Permission = '';
  aliases = ['top', 'lb'];
  module = 'leveling';

  constructor() {}

  execute = async (message: CommandContext, ...args: string[]) => {
    const embed = new EmbedBuilder();

    const savedMembers = await SavedMember.find({ guildId: (message.guild as any).id }).lean();
    let rankedMembers: rankedMember[] = [];
    for (const member of savedMembers) {
      const user = message.bot.users.cache.get(member.userId);
      if (!user) continue;

      const xpInfo = Leveling.xpInfo(member.xp);
      rankedMembers.push({
        user: user,
        ...xpInfo,
      });
    }
    let data = rankedMembers.sort((a, b) => b.xp - a.xp).splice(0, 9);

    // send data to embed in descending order
    for (let i = 0; i < data.length; i++) {
      const user = data[i].user;
      if (!user) continue;
      embed.addFields([
        {
          name: `#${i + 1} | ${user.tag}`,
          value: `**XP:** \`${data[i].xp}\` \u200B **Level:** \`${data[i].level}\``,
          inline: true,
        },
      ]);
    }
    embed
      .setAuthor({ name: 'Top 10 Members', iconURL: message.bot.user.displayAvatarURL() })
      .setDescription(`To view full leaderboard, go to [here](${process.env.DASHBOARD_URL}) and login to the dashboard.`)
      .setColor('#eed0e2');
    message.message.reply({ embeds: [embed] });
  };
}

interface rankedMember {
  user: User;
  level: number;
  xp: number;
  xpForNextLevel: number;
  levelCompletion: number;
  nextLevelXP: number;
}
