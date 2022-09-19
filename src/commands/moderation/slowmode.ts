import { Command, CommandContext, Permission } from '../../interfaces/command';
import { EmbedBuilder, SlashCommandBuilder, CommandInteraction, AutocompleteInteraction, Message } from 'discord.js'
import ms from 'ms';

export default class SlowModeCommand implements Command {
  aliases = ['timeout'];
  name = 'slowmode';
  usage = 'slowmode [time] [reason]'
  summary = 'Set a slowmode on a channel';
  precondition: Permission = 'ManageMessages';
  cooldown = 5;
  module = 'Auto-mod';
  isSlashCommand = true;

  slashCommandData = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.summary)
    .addStringOption((opt) => opt.setDescription('Time').setRequired(true).setName('time'))
    .addStringOption((opt) => opt.setDescription('Reason').setName('reason'))

  slashCommandExecute = async (interaction: CommandInteraction | AutocompleteInteraction) => {
    if (interaction.isAutocomplete()) return;

    const timeOption = interaction.options.get('time').value.toString();
    const reasonOption = interaction.options.get('reason')?.value.toString();

    const reason = reasonOption ?? 'No reason provided'
    const suffix = /[a-zA-z]/.test(timeOption);

    const time = ms(
      timeOption
    ) * (suffix ? 1 : 1000);
    
    this.main(interaction, time, reason)
  }
  
  execute = async(message: CommandContext, ...args: string[]) => {

    if(!args[0])
      return message.message.reply(`The current timeout is \`${ms((message.channel as any).rateLimitPerUser, { long: true })}\``)

    const argsTime = args.shift();
    const suffix = /[a-zA-z]/.test(argsTime)

    const time = ms(
      argsTime
    ) * (suffix ? 1 : 1000);

    const reason = args.join(" ").toString() || 'No reason provided'

    this.main(message.message, time, reason)
  }

  private main(interaction: CommandInteraction | Message, time: number, reason: string) {

    if (time > (21600 * 1000) || time < 0)
      throw new TypeError('Slowmode time is incorrect! /&*footer/ Invalid time provided.');
    
    const longTime = ms(time, { long: true });

    (interaction.channel as any).setRateLimitPerUser(time / 1000, reason)
    
    const embed = new EmbedBuilder()
    .setColor(time == 0 ? 'Green' : '#fcd442')
    .setDescription(`<@${(interaction as any).member.user.id}> has ${time == 0 ? 'removed the timeout' : 'set a timeout'} in <#${(interaction.channel as any).id}>`)
    .addFields([
        {
            name: 'Reason', 
            value: `\`${reason}\``,
            inline: true
        }
    ])
    time != 0 && embed.addFields([{ name: 'Time', value: `\`${longTime}\``, inline: true}])

    return interaction.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  }
}
