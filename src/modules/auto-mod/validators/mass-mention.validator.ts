import { GuildDocument, MessageFilter } from '../../../data/models/guild';
import { ContentValidator } from '../../../interfaces/content-validator';
import { ValidationError } from '../auto-mod';
import { Message } from 'discord.js';

export default class MassMentionValidator implements ContentValidator {
  filter = MessageFilter.MassMention;
  
  validate(_, msg: Message, guild: GuildDocument) {
    const pattern = /<@![0-9]{18}>/gm;
    const severity = guild.autoMod.filterThreshold;     

    const invalid = msg.content.match(pattern)?.length >= severity;
    if (invalid)
      throw new ValidationError('Message contains too many mentions.', this.filter);
  }
}