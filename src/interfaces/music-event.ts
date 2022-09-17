import { Events } from "distube";

export default interface MusicEvent {
    on: Events;

    invoke(...args: any[]): Promise<any> | void;
}