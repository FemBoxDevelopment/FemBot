import express from 'express';
import Log from '../utils/log';

export const app = express();

export default class API {
    constructor() {
        app.use('/api/*', (req, res) => res.status(200).send('Tea.'))
    }
}

const port = process.env.PORT || 3000;

app.listen(port, () => Log.info(`API is live on port ${port}`, 'API'))