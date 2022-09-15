import { GuildDocument, MessageFilter } from '../../../data/models/guild';
import { ContentValidator } from './content-validator';
import { ValidationError } from '../auto-mod';
import { Message } from 'discord.js';

export default class MassCapsValidator implements ContentValidator {
    filter = MessageFilter.MassCaps;

    validate(_, msg: Message, guild: GuildDocument) {
        const pattern = /[A-Z]/g;
        const severity = guild.autoMod.filterThreshold;
        
        const invalid = msg.content.length > 5 
            && (msg.content.match(pattern)?.length / msg.content.length) >= (severity / 10);
        if (invalid)
            throw new ValidationError('Message contains too many capital letters.', this.filter);
    }
}