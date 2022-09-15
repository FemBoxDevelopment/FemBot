import { model, Schema, Document } from 'mongoose';


export class Module {
    enabled = true;
}

export class EasterEggs extends Module {
    helpReaction = false;
}

export class XPCard {
    backgroundURL = '';
    primary = '';
    secondary = '';
    tertiary = '';
    title = "";
    reps = 0;
}

export class MarrageModule extends Module {
    isMarried: boolean;
    partner: string;
};

export interface Reminder {
    id: string;
    content: string;
    expires: Date;
    expiresMilliseconds: number;  
}

export interface UserDocument extends Document {
    _id: string;
    premium: boolean;
    premiumExpiration: Date;
    votes: number;
    repTimeout: number;
    xpCard: XPCard;
    easterEggs: EasterEggs;
    reminders: Reminder[];
    marrage: MarrageModule;
}

export const SavedUser = model<UserDocument>('user', new Schema({
    _id: String,
    //premium: { type: Boolean, default: false },
    //premiumExpiration: { type: Date, default: new Date() },
    votes: Number,
    repTimeout: Number,
    xpCard: { type: Object, default: new XPCard() },
    easterEggs: { type: Object, default: new EasterEggs() },
    reminders: { type: Array, default: [] },
    marrage: { type: Object, default: new MarrageModule() },
}));
