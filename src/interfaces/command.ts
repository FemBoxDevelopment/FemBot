import Discord, { Message, GuildMember, Guild, User, Client, PermissionsString, MessageMentions, CommandInteraction, ButtonInteraction, SlashCommandBuilder, TextBasedChannel, AutocompleteInteraction, SlashCommandSubcommandBuilder, SlashCommandSubcommandsOnlyBuilder } from 'discord.js';
import { GuildDocument } from '../data/models/guild';

export type Permission = '' | PermissionsString;

export interface Command {
  aliases?: string[];
  cooldown?: number;
  module: string;
  name: string;
  precondition?: Permission;
  summary: string;
  usage?: string;
  isSlashCommand?: boolean;

  slashCommandData?: SlashCommandBuilder | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup"> | SlashCommandSubcommandBuilder | SlashCommandSubcommandsOnlyBuilder;
  
  slashCommandExecute?: (interaction: CommandInteraction | AutocompleteInteraction) => Promise<void>;
  buttonExecute?: (interaction: ButtonInteraction, buttonId: string) => Promise<void>;

  execute: (ctx: CommandContext, ...args: any) => Promise<any> | void;
}

export class CommandContext {
  member: GuildMember;
  channel: TextBasedChannel;
  guild: Guild;
  guildId: string;
  user: User;
  bot: Client;
  author: Discord.User;
  message: Discord.Message;
  mentions: MessageMentions;
  react: Discord.MessageReaction;
  
  constructor(
    public msg: Message,
    public savedGuild: GuildDocument,
    public command: Command) {
    this.member = msg.member;
    this.channel = msg.channel;
    this.guild = msg.guild;
    this.guildId = msg.guildId;
    this.user = msg.member.user;
    this.bot = msg.client;
    this.author = msg.author;
    this.message = msg;
    this.mentions = msg.mentions;
  }
}
