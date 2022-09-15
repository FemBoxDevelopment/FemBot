import { bot } from './../../bot';
import { CommandContext } from './../../interfaces/command';
import { Message, GuildMember, User, ButtonInteraction, EmbedBuilder, Guild, CommandInteraction, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { GuildDocument, MessageFilter } from '../../data/models/guild';
import Deps from '../../utils/deps';
import Members from '../../data/members';
import Log from '../../utils/log';
import { ContentValidator } from './validators/content-validator';
import { promisify } from 'util';
import fs from 'fs';
import { MemberDocument } from '../../data/models/member';
// import Emit from '../../services/emit';

const readdir = promisify(fs.readdir);

export default class AutoMod {
  private validators = new Map<MessageFilter, ContentValidator>();

  constructor(
    // private emit = Deps.get<Emit>(Emit),
    private members = Deps.get<Members>(Members)) {}

  public async init() { 
    const files = await readdir(`${__dirname}/validators`);

    for (const file of files) {
      const { default: Validator } = await import(`./validators/${file}`);
      if (!Validator) continue;

      const validator = new Validator();
      this.validators.set(validator.filter, validator);
    }
    Log.info(`Loaded: ${this.validators.size} validators`, `automod`);
  }
  
  public async validate(msg: Message, guild: GuildDocument) {
    const activeFilters = guild.autoMod.filters;
    for (const filter of activeFilters)
      try {        
        await this.validators
          .get(filter)
          ?.validate(this, msg, guild);
      } catch (validation) {
        if (guild.autoMod.autoDeleteMessages)
          await msg.delete();

        if (guild.autoMod.autoWarnUsers && msg.member)
          await this.warn(msg.member, {
            instigator: msg.client.user,
            reason: validation.toString()
          });
        throw validation;
      }
  }

  /**
   * 
   * @param { GuildMember } target the target user
   * @param { User } instigator the insigator
   * @returns { void }
   */

  public validateAction(target: GuildMember, instigator: User): void {
    if(!instigator)
      throw new Error('/&*footer/ No user provided');

    if (target.id === instigator.id)
      throw new TypeError('You cannot punish yourself.');

    const instigatorMember = target.guild.members.cache
      .get(instigator.id);    
    if (instigatorMember.roles.highest.position <= target.roles.highest.position)
      throw new TypeError('User has the same or higher role.');
  }

  public getMember(target: GuildMember | User | string, guild: Guild): GuildMember {
    if (target instanceof GuildMember)
      return target;
    
    if (typeof target === 'string')
      return guild.members.cache.get(target);

    return guild.members.cache.get(target.id);
  } 

  public async warn(target: GuildMember, args: PunishmentArgs) {
    this.validateAction(target, args.instigator);

    const savedMember = await this.members.get(target);
    
    // this.emit.warning(args, target, savedMember);
    await this.saveWarning(args, savedMember);
  }
  private async saveWarning(args: PunishmentArgs, savedMember: MemberDocument) {
    savedMember.warnings.push({
      at: new Date(),
      instigatorId: args.instigator.id,
      reason: args.reason
    });
    return this.members.save(savedMember);    
  }

  public async troubleshooter(interaction: ButtonInteraction, name: string, buttonId?: string) {
    const embed = new EmbedBuilder()

    const button = buttonId ? buttonId.split('!')[1] : '';
    if(button == '1') {
      embed.setColor('#5764F1')
      .setAuthor({ name: 'Support with Discord', iconURL: 'https://images-ext-2.discordapp.net/external/UIyyEBpgtFd0uEHRCsp7LxqjbjhYT8OlHSBjrUMMNdE/https/static.wikia.nocookie.net/40b1a6b4-887a-4b88-931c-4c8f0c404145' })
      .setTitle('Reporting Harassment')
      .setDescription(`If you were to encounter any sort of harassment in Direct Messages or anywhere for that matter, contact either one of our staff members or use discord's [support forms](https://dis.gd/request) to report a user. Behaviour such as harassment will not be tolerated and will result in a permanent ban as well as it will be reported to Discord.`)
      
      return interaction.reply({ embeds: [embed], content: 'Did this help? if not please give the user as a reply in this channel ( eg: BadUser#3134 or <@userId> ) and a staff member will be with you shortly' })
    }

    embed.setColor('#3BA55D')
    .setAuthor({ name: 'Ticket System Troubleshooter', iconURL: bot.user.avatarURL()})
    .setDescription('This is the troubleshooter for the \`Ticket System\`.')
    .addFields([
        { 
            name: 'List of available Troubleshooters', value: `1️⃣ | \`Report Harrasment\``
        }
    ])
    .setFooter({ text: 'If your problem is not listed, please wait for a staff member to respond.' })

    const ticketEmbedButtons = new ActionRowBuilder<ButtonBuilder>()
    .addComponents(
        new ButtonBuilder()
        .setCustomId(`${name}-troubleshooter.options.1!1`)
        .setEmoji('1️⃣')
        .setStyle(ButtonStyle.Success),
    )

    interaction.reply({ embeds: [embed], components: [ticketEmbedButtons] })
  }

  public ban(interaction: CommandInteraction | CommandContext, target: GuildMember, reason: string) {
    this.validateAction(target, interaction.user);

    if(!reason) 
      throw new Error('/&*footer/ No reason provided!');

    try{
      target.ban({ reason });
    } catch (e) {
      if(interaction instanceof CommandInteraction)
        interaction.reply({ content: `Unable to ban user: \`${(e as Error).message}\``, ephemeral: true });
      else 
        interaction.message.reply({ content: `Unable to ban user: \`${(e as Error).message}\`` });
    }

    const embed = new EmbedBuilder()
    .setColor('Red')
    .setDescription(`<@${interaction.user.id}> has banned <@${target.id}>!`)
    .addFields([
        { name: 'Reason', value: reason }
    ])
    .setTimestamp()

    if(interaction instanceof CommandInteraction) 
      interaction.reply({ embeds: [embed] })
    else 
      interaction.message.reply({ embeds: [embed] })

    embed.setDescription(`You have been banned in ${(interaction.guild as any).name}!`)
  }
}

export interface PunishmentArgs {
  instigator: User;
  reason: string;
}
export class ValidationError extends Error {
  constructor(message: string, public filter: MessageFilter) {
    super(message);
  }
}