declare global {
    namespace NodeJS {
        interface ProcessEnv {
            //Bot Information

            BOT_TOKEN: string;
            BOT_ID: string;
            CLIENT_SECRET: string;
            OWNER_ID: string;

            //Server Information

            API_URL: string;
            DASHBOARD_URL: string;
            MONGO_URI: string;
            PORT: string;

            PRODUCATION: 'true' | 'false';
            TEST_SERVER: string;
            
        }
    }
}

export { };