import { GuildDocument, MessageFilter } from '../../../data/models/guild';
import { ContentValidator } from '../../../interfaces/content-validator';
import AutoMod, { ValidationError } from '../auto-mod';
import { Message } from 'discord.js';

export default class BadWordValidator implements ContentValidator {
  filter = MessageFilter.Words;

  validate(autoMod: AutoMod, msg: Message, guild: GuildDocument) {
    const msgWords = msg.content.split(' ');
    for (const word of msgWords) {
      const isExplicit = guild.autoMod.banWords
        .some(w => w.toLowerCase() === word.toLowerCase());
      if (isExplicit) {
        throw new ValidationError('Message contains banned words.', this.filter);
      }
    }
  }
}