import { ColorResolvable } from 'discord.js';
import { model, Schema, Document } from 'mongoose';
import { bot } from '../../bot';

export const defaultPrefix = '.'

export class Module {
  enabled = true;
}

export class LogsModule extends Module {
  events: LogEvent[] = [];
}

export enum EventType {
  Ban = 'BAN', 
  CommandExecuted = 'COMMAND_EXECUTED',
  ButtonInteraction = `BUTTON_INTERACTION`,
  interactionExecuted = `INTERACTION_EXECUTED`,
  ConfigUpdate = 'CONFIG_UPDATE',
  LevelUp = 'LEVEL_UP',
  MessageDeleted = 'MESSAGE_DELETED',
  MessageUpdated = 'MESSAGE_UPDATED',
  MemberJoin = 'MEMBER_JOIN',
  MemberLeave = 'MEMBER_LEAVE',
  Unban = 'UNBAN',
  Warn ='WARN'
}

export interface LogEvent {
  channel: string;
  enabled: boolean;
  event: EventType;
  message: string;
  embed: Embed;
}

export interface Embed {
  messageContent: string;
  title: string;
  image: string;
  description: string;
  /* url: string; Not needed as of right now */
  color: string;
  thumbnail: string;
  author: {
    image: string;
    text: string;
  }
  footer: {
    text: string;
    image: string;
    timestamp: boolean;
  }
}

export class AutoModModule extends Module {
  ignoredRoles: string[] = [];
  autoDeleteMessages = true;
  filters: MessageFilter[] = [];
  banWords: string[] = [];
  banLinks: string[] = [];
  ticketSystem: ticketSystem
  autoWarnUsers = true;
  filterThreshold = 5;
  MutedRole = undefined; 
}

export class ticketSystem extends Module {
  transcriptChannel: string;
  ticketChannels: string[] = [];
  ticketReaction: ticketReaction;
}

export class ticketReaction extends Module {
  channel = '';
}

export class CommandsModule extends Module {
  configs: CommandConfig[] = [];
  custom: CustomCommand[] = [];
}

export enum MessageFilter {
  Links = 'LINKS',
  MassCaps = 'MASS_CAPS',
  MassMention = 'MASS_MENTION',
  Words = 'WORDS',
  Toxicity = 'TOXICITY',
}

export class GeneralModule extends Module {
  prefix = defaultPrefix;
  ignoredChannels: string[] = [];
  autoRoles: string[] = [];
}

export class LevelingModule extends Module {
  levelRoles: LevelRole[] = [];
  ignoredRoles: string[] = [];
  xpPerMessage = 3;
  maxMessagesPerMinute = 3;
}

export interface LevelRole {
  level: number;
  role: string;
}

export class MusicModule extends Module {}

export interface CommandConfig {
  name: string;
  enabled: boolean;
}
export interface CustomCommand {
  alias: string;
  anywhere: boolean;
  command: string;
}

export class ReactionRolesModule extends Module {
  reactionRolesLength = 8;
  configs: ReactionRole[] = [];
}
export interface ReactionRole {
  channel: string,
  messageId: string,
  emote: string,
  role: string
}

export class ShopModule extends Module {
  currency: Currency;
  categories: ShopCategory[] = [];
};

export interface ShopCategory {
  name: string;
  description: string;
  color?: ColorResolvable;
  items?: ShopItem[];
};

export class Currency extends Module {
  name = "credits";
  icon = '🪙';
};


export interface ShopItem {
  name: string;
  id: string;
  description: string;
  price: number;
  role?: string;
};

export class DashboardSettings {
  privateLeaderboard = false;
  lockdown = false;
}

export class CaptchaSettings {
  captchaVerification = false;
  captchaChannel = undefined;
  unverifiedRole = undefined;
  verifiedRole = undefined;
}

const guildSchema = new Schema({
  _id: String,
  autoMod: { type: Object, default: new AutoModModule() }, 
  commands: { type: Object, default: new CommandsModule() },
  general: { type: Object, default: new GeneralModule() },
  captchaSettings: { type: Object, default: new CaptchaSettings() },
  leveling: { type: Object, default: new LevelingModule() },
  logs: { type: Object, default: new LogsModule() }, 
  music: { type: Object, default: new MusicModule },
  reactionRoles: { type: Object, default: new ReactionRolesModule() },
  shop: { type: Object, default: new ShopModule() },
  settings: { type: Object, default: new DashboardSettings() }
});

export interface GuildDocument extends Document {
  _id: string;
  autoMod: AutoModModule;
  commands: CommandsModule;
  general: GeneralModule;
  captchaSettings: CaptchaSettings,
  music: MusicModule;
  leveling: LevelingModule;
  logs: LogsModule;
  reactionRoles: ReactionRolesModule;
  shop: ShopModule,
  settings: DashboardSettings;
}

export const SavedGuild = model<GuildDocument>('guild', guildSchema);
