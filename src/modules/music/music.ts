import { Guild, GuildTextBasedChannel, VoiceBasedChannel } from "discord.js";
import { DisTube, Song, DisTubeVoice, SearchResultType } from "distube";
import { bot } from "../../bot";

export default class Music {
    private maxTrackLength = 1000 * 60 * 60;
    private _client = {} as DisTube;
    get client() { return this._client };

    constructor() {
        this._client = new DisTube(bot, {
            leaveOnEmpty: false,
            leaveOnFinish: false,
            leaveOnStop: false,
        });

        this.hookEvents();
    }

    private hookEvents() {
        this.client.on('playSong', (queue, song) => {
            (queue.textChannel as any)?.send(`> **Now Playing**: \`${song.name}\``)
        });
        this.client.on('finish', (queue) => {
            (queue.textChannel as any)?.send(`> **Queue has Ended**`);
        });
        this.client.on('error', (channel, e) => {
            console.log(e);
        })
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

        if(!queue.playing)
            throw new TypeError('No songs currently playing.');
        
        return `${queue.currentTime} / ${queue.songs[0].duration}`;
    };

    async getSong(query: string) {
        const videos = await this.client.search(query, { limit: 1, type: SearchResultType.VIDEO });
        return videos[0];
    }
}