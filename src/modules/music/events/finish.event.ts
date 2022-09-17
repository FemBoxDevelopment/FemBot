import MusicEvent from "../../../interfaces/music-event";
import { Events, Queue, Song } from "distube";

export default class PlaySongEvent implements MusicEvent {
    on = Events.FINISH;

    invoke(queue: Queue) {
        (queue.textChannel as any)?.send(`> **Queue has Ended**`);
    }
}