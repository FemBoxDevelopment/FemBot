import { config } from 'dotenv';
config({ path: '.env' });

import { Client, GatewayIntentBits, Partials } from 'discord.js';
import Mongo from './utils/mongoose';
import { EventEmitter } from 'events';
import Deps from './utils/Deps';
import EventsService from './services/events.service';
import API from './api/server';

export const bot = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Message,
        Partials.Channel, 
        Partials.Reaction,
        Partials.GuildMember
    ],
    allowedMentions: { repliedUser: true, parse: [ 'everyone', 'users', 'roles' ] },
});
export const emitter = new EventEmitter();

bot.login(process.env.BOT_TOKEN);

Deps.get<EventsService>(EventsService).init();
Deps.build(API);

Mongo.connect();


