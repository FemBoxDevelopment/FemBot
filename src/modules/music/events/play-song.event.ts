import { ReplyMessageOptions, EmbedBuilder } from 'discord.js';
import MusicEvent from "../../../interfaces/music-event";
import { Events, Queue, Song } from "distube";
import Music from '../music';
import Deps from '../../../utils/Deps';

export default class PlaySongEvent implements MusicEvent {
    on = Events.PLAY_SONG;

    constructor(
        private music = Deps.get<Music>(Music)
    ) {}

    invoke(queue: Queue, song: Song) {

        const embed = new EmbedBuilder()
        .setColor('Blue')
        .setAuthor({ name: 'Playing', iconURL: song.user.avatarURL() })
        .setThumbnail(song.thumbnail)
        .setDescription(`[${song.name}](${song.url})`)
        .addFields(
            [
                {
                    name: 'Views',
                    value: `\`${song.views}\``,
                    inline: true
                },
                {
                    name: 'Likes',
                    value: `\`${song.likes}\` 👍`,
                    inline: true
                },
                {
                    name: 'Dislikes',
                    value: `\`${song.dislikes}\` 👎`,
                    inline: true
                },
                {
                    name: 'Requested By',
                    value: `<@${song.user.id}>`,
                    inline: true,
                },
                {
                    name: 'Duration',
                    value: `\`${this.music.getDuration(queue.voiceChannel)}\``,
                    inline: true
                },
                {
                    name: 'Queue',
                    value: `\`${queue.songs.length}\` songs - \`${queue.formattedDuration}\``,
                    inline: true
                },
                {
                    name: 'Volume',
                    value: `${queue.volume}%`,
                    inline: true
                },
                {
                    name: 'Bitrate',
                    value: `${queue.voiceChannel.bitrate / 1000}kbps`,
                    inline: true
                }
            ]
        )
        
        return (queue.textChannel as any)?.send({ embeds: [ embed ] })
    }
}