import fs from 'fs';
import { promisify } from 'util';
import { Guild, GuildTextBasedChannel, VoiceBasedChannel } from "discord.js";
import { DisTube, Song, DisTubeVoice, SearchResultType, SearchResult } from "distube";
import { bot } from "../../bot";
import MusicEvent from "../../interfaces/music-event";
import Log from "../../utils/log";

const readdir = promisify(fs.readdir);
export default class Music {
    private readonly musicEvents: MusicEvent[] = [];
    private _client = {} as DisTube;
    get client() { return this._client };

    constructor() {
        this._client = new DisTube(bot, {
            leaveOnEmpty: true,
            leaveOnFinish: false,
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

    getQueue(guild?: Guild) {
        return this.client.getQueue(guild);
    }

    getDuration(voiceChannel?: VoiceBasedChannel) {
        const queue = this.getQueue(voiceChannel.guild);

        return `${queue.currentTime} / ${queue.songs[0].duration}`;
    };

    async autoCompleteSongs(query: string) {
        const videos = await this.client.search(query, { limit: 10, type: SearchResultType.VIDEO })
        return videos
    }
}