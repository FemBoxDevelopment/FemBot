import { Guild, GuildMember, User } from 'discord.js';
import { MemberDocument, SavedMember } from './models/member';
import DBWrapper from '../interfaces/db-wrapper';

export default class Members extends DBWrapper<GuildMember, MemberDocument> {
    protected async getOrCreate(member: GuildMember) {
        if (member.user.bot)
            throw new TypeError(`Bots don't have accounts`);

        const user = await SavedMember.findOne({
            userId: member.id,
            guildId: (member.guild as any).id
        });
        return user ?? this.create(member);
    }

    protected create(member: GuildMember) {
        return new SavedMember({
            userId: member.id,
            guildId: (member.guild as any).id
        }).save();
    }

    public async getBalance(member: GuildMember) {
        return (await this.getOrCreate(member)).economy.balance;
    };

    public async addBalance(member: GuildMember, credits: number) {
        const user = await this.getOrCreate(member);
        user.economy.balance += credits;
        return await user.updateOne(user);
    }
}