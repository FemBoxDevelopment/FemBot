import { Message } from 'discord.js';
import { GuildDocument, MessageFilter } from '../data/models/guild';
import AutoMod from '../modules/auto-mod/auto-mod';

export interface ContentValidator {
  filter: MessageFilter;
  
  validate(autoMod: AutoMod, msg: Message, guild: GuildDocument): void | Promise<void>;
}