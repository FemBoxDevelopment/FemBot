import MusicEvent from "../../../interfaces/music-event";
import { Events, Queue, Song } from "distube";
import { EmbedBuilder } from "discord.js";

export default class PlaySongEvent implements MusicEvent {
    on = Events.ADD_SONG;

    invoke(queue: Queue, song: Song) {

        const embed = new EmbedBuilder()
        .setColor('Blue')
        .setDescription(`[${song.name}](${song.url})`)
        .setAuthor({ name: 'Added To Queue', iconURL: song.user.avatarURL() })
        .addFields([
            { 
                name: 'Requested By',
                value: `<@${song.user.id}>`,
                inline: true
            },
            {
                name: 'Duration',
                value: `\`${song.formattedDuration}\``,
                inline: true
            },
            {
                name: 'Queue',
                value: `\`${queue.songs.length}\` songs - \`${queue.formattedDuration}\``,
                inline: true
            }
        ])

        return (queue.textChannel as any)?.send({ embeds: [ embed ]  })
    }
}