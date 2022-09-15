export default class Log {
    static getSource(src?: string) {
        return src?.toUpperCase() || 'OTHER';
    };
    static info(message?: any, src?: string) {
        console.log(`[${this.toHHMMSS(new Date())}] INFO [${this.getSource(src)}] ${message}`);
    };
    static error(err?:any, src?: string) {
        const message = err?.message || err || 'Unknown error';
        console.error(`[${this.toHHMMSS(new Date())}] ERROR [${this.getSource(src)}] ${message}`);
    };

    private static toHHMMSS(time: Date) {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };
};