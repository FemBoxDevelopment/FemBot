import { model, Schema, Document } from 'mongoose';

export class Module {
    enabled = true;
};

export class Daily extends Module {
    DailyTimeout: number;
    dailyStreak: number;
    dailyDate: string;
};

export class Economy extends Module {
    balance = 0;
    daily: Daily = {
        enabled: true,
        DailyTimeout: 0,
        dailyStreak: 0,
        dailyDate: new Date().toLocaleTimeString()
    };
}

export interface Warning {
    reason: string;
    instigatorId: string;
    at: Date;
};

const memberSchema = new Schema({
    userId: String,
    guildId: String,
    recentMessages: { type: Array, default: [] },
    warnings: { type: Array, default: [] },
    economy: { type: Object, default: new Economy() },
    xp: { type: Number, default: 0 },
});

export interface MemberDocument extends Document {
    userId: string;
    guildId: string;
    recentMessages: Date[];
    warnings: Warning[];
    economy: Economy;
    xp: number;
}


export const SavedMember = model<MemberDocument>('member', memberSchema);