import MusicEvent from "../../../interfaces/music-event";
import { Events, Queue, Song } from "distube";
import { GuildTextBasedChannel } from "discord.js";

export default class PlaySongEvent implements MusicEvent {
    on = Events.ERROR;

    invoke(channel: GuildTextBasedChannel, error: string) {
        console.log(error);
    }
}