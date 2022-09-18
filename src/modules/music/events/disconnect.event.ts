import MusicEvent from "../../../interfaces/music-event";
import { Events, Queue } from "distube";
import { EmbedBuilder, GuildTextBasedChannel } from "discord.js";

export default class PlaySongEvent implements MusicEvent {
    on = Events.DISCONNECT;

    invoke(queue: Queue) {
        queue.stop();

        const embed = new EmbedBuilder()
        .setColor('Red')
        .setDescription(`Disconnecting from \`${queue.voiceChannel.name}\` and clearing queue.`)

        return (queue.textChannel as any).send({ embeds: [ embed ] })
    }
}