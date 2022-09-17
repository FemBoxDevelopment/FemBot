import { GuildDocument, MessageFilter } from '../../../data/models/guild';
import { ContentValidator } from '../../../interfaces/content-validator';
import AutoMod, { ValidationError } from '../auto-mod';
import { Message } from 'discord.js';

export default class BadLinkValidator implements ContentValidator {
  filter = MessageFilter.Links;

  validate(_, msg: Message, guild: GuildDocument) {
    const isExplicit = guild.autoMod.banLinks
      .some(l => msg.content.includes(l));

    if (isExplicit) {
      throw new ValidationError('Message contains banned links.', this.filter);
    }
  }
}