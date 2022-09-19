import { Command, CommandContext, Permission } from '../../interfaces/command';
import AutoMod from '../../modules/auto-mod/auto-mod';
import Deps from '../../utils/Deps';
import { getMemberFromMention } from '../../utils/command-utils';
import { EmbedBuilder } from 'discord.js';

export default class WarnCommand implements Command {
  precondition: Permission = 'KickMembers';
  name = 'warn';
  usage = 'warn [user] [reason]';
  summary = 'Warn a user and add a warning to their account.';
  cooldown = 5;
  module = 'Auto-mod';

  constructor(private autoMod = Deps.get<AutoMod>(AutoMod)) {}

  execute = async (message: CommandContext, targetMention: string, ...args: string[]) => {
    
    const target = targetMention ? getMemberFromMention(targetMention, message.guild) : message.member;
    
    const reason = args?.join(' ');
    if (!reason) 
      throw new TypeError('You need to provide a valid reason for the warning./&*footer/ Invalid reason.');
    
    await this.autoMod.warn(target, { instigator: message.user, reason });
    
    const embed = new EmbedBuilder()
      .setColor('Red')
      .setDescription(`<@${message.member.id}> has warned <@${target.id}>`)
      .addFields([
        {
          name: 'Reason',
          value: reason,
        },
      ]);
    message.message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
  };
}
