import { createCanvas } from 'canvas';
import fs from 'fs';
import { promisify } from 'util';
import { Guild, GuildTextBasedChannel, VoiceBasedChannel } from "discord.js";
import { DisTube, SearchResultType, Queue, GuildIdResolvable } from "distube";
import { bot } from "../../bot";
import MusicEvent from "../../interfaces/music-event";

const readdir = promisify(fs.readdir);
export default class Music {
    private readonly musicEvents: MusicEvent[] = [];
    private _client = {} as DisTube;
    get client() { return this._client };

    constructor() {
        this._client = new DisTube(bot, {
            leaveOnEmpty: true,
            leaveOnFinish: true,
            leaveOnStop: false,

            ytdlOptions: {
                quality: 'highestaudio'
            }
        });

        this.hookEvents();
    }

    private async hookEvents() {
        const files = await readdir(`${__dirname}/events`);

        for(const file of files) {
            const { default: musicEvent } = await import(`./events/${file}`);
            if(!musicEvent)
                continue;

            this.musicEvents.push(new musicEvent());
        }

        for(const musicEvent of this.musicEvents)
            this.client.on(musicEvent.on, (...args) => musicEvent.invoke(...args))
    };

    async joinAndGetPlayer(voiceChannel?: VoiceBasedChannel) {
        if(!voiceChannel)
            throw new TypeError('You must be in a `VoiceChannel` to play music. /&*footer/ not in VoiceChannel.')
        
        return await this.client.voices.get(voiceChannel.guildId).join(voiceChannel)
    }

    getQueue(guild?: GuildIdResolvable) {        
        return this.client.getQueue(guild);
    }

    getDuration(player: Queue, i?: number) {
        return `${player.formattedCurrentTime} / ${player.songs[i ?? 0].formattedDuration}`;
    };

    getConnectionStatus(guild: GuildIdResolvable) {
        return !(this.client.voices.get(guild)?.isDisconnected ?? true) ? ConnectionStatus.Connected : ConnectionStatus.Disconnected;
    }

    async autoCompleteSongs(query: string) {
        const videos = await this.client.search(query, { limit: 10, type: SearchResultType.VIDEO })
        return videos
    }
}

export enum ConnectionStatus {
    Connected = "CONNECTED",
    Disconnected = "DISCONNECTED"
}