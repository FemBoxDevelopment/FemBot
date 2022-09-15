import { Guild, Interaction, Message, ApplicationCommand } from 'discord.js';
import DBWrapper from '../interfaces/db-wrapper';
import { LogDocument, SavedLog } from './models/log';
import { Command } from '../interfaces/command';

export default class Logs extends DBWrapper<Guild, LogDocument> {
    protected async getOrCreate(guild: Guild) {
        const savedLog = await SavedLog.findById((guild as any).id);
        return savedLog ?? this.create(guild);
    }

    protected async create(guild: Guild) {
        return new SavedLog({ _id: (guild as any).id }).save();
    }
    
    async logCommand(msg: Message, command: Command) {
        const log = await this.get(msg.guild);
        log.commands.push({
            name: command.name,
            by: msg.author.id,
            at: new Date()
        });
        await this.save(log);
    }

    async logInteraction(interaction: Interaction, command: Command) {
        const log = await this.get(interaction.guild);
        log.commands.push({
            name: command.name,
            by: interaction.user.id,
            at: new Date()
        });
        await this.save(log);
    }

    async getAll() {
        return await SavedLog.find();
    }
}
