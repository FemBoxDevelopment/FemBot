import { GuildDocument, SavedGuild } from './models/guild';
import DBWrapper from '../interfaces/db-wrapper';
import SnowflakeEntity from '../interfaces/snowflake-entity';

export default class Guilds extends DBWrapper<string, GuildDocument> {
    protected async getOrCreate(id: string) {
        const savedGuild = await SavedGuild.findById(id);
        return savedGuild ?? this.create(id);
    }

    protected create(id: string) {
        return new SavedGuild({ _id: id }).save();
    }
}