export default interface CustomEvent {
    on: string;

    init(...args: any[]): Promise<any> | void;
}