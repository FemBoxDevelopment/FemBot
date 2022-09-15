import { ActivityType, Client, Events } from 'discord.js';
import Event from "../../interfaces/event";
import Deps from '../../utils/Deps';
import Log from '../../utils/log';
import CommandService from '../commands/command.service';

export default class ReadyHandler implements Event {
    started = false;
    on = Events.ClientReady;

    constructor(
        private commandService = Deps.get<CommandService>(CommandService),
    ) {}

    async invoke(bot: Client) {
        Log.info(`Bot is live!`, 'events');

        if(this.started) return;
        this.started = true;

        bot.user.setActivity(`I'm gay!`, { type: ActivityType.Playing });
        bot.user.setStatus('idle');

        this.commandService.init();
        
    };
};