import { ActivityType, Client, Events } from 'discord.js';
import Event from "../../interfaces/event";
import AutoMod from '../../modules/auto-mod/auto-mod';
import ReactionRoles from '../../modules/general/reaction-roles';
import Deps from '../../utils/Deps';
import Log from '../../utils/log';
import CommandService from '../commands/command.service';

export default class ReadyHandler implements Event {
    started = false;
    on = Events.ClientReady;

    constructor(
        private autoMod = Deps.get<AutoMod>(AutoMod),
        private commandService = Deps.get<CommandService>(CommandService),
        private reactionRoles = Deps.get<ReactionRoles>(ReactionRoles),
    ) {}

    async invoke(bot: Client) {
        Log.info(`Bot is live!`, 'events');

        if(this.started) return;
        this.started = true;

        bot.user.setActivity(`I'm gay!`, { type: ActivityType.Playing });
        bot.user.setStatus('idle');

        await this.autoMod.init();
        await this.commandService.init();
        await this.reactionRoles.init();
        
    };
};