import express, { RequestHandler } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { join } from 'path';

import Deps from '../utils/Deps';
import Log from '../utils/log';
import Stats from './modules/stats';

import { router as apiRoutes } from './routes/api-routes';
import { router as authRoutes } from './routes/auth-routes';
import { router as guildsRoutes } from './routes/guilds-routes';
// import { router as musicRoutes } from './routes/music-routes';
import { router as payRoutes } from './routes/pay-routes';
import { router as userRoutes } from './routes/user-routes';

export const app = express();

export default class API {
    constructor(private stats = Deps.get<Stats>(Stats)) {
        app.use(cors());
        app.use(bodyParser.json() as RequestHandler);

        // api routes
        app.use('/api/pay', payRoutes);
        // app.use('/api/guilds/:id/music', musicRoutes);
        app.use('/api/guilds', guildsRoutes);
        app.use('/api/user', userRoutes);
        app.use('/api', apiRoutes, authRoutes);

        //main page

        app.get('/api/*', (req, res) => res.status(200).sendFile(`${distPath}/index.html`));
        app.get('/arc-sw.js', (req, res) => res.redirect('https://arc.io/arc-sw.js'));

        const distPath = join(process.cwd(), '/dist/neko-dashboard/browser');
        app.use(express.static(distPath));

        app.all('*', (req, res) => res.status(200).sendFile(`${distPath}/index.html`))

        this.stats.init();
    }
}

const port = process.env.PORT || 3000;

app.listen(port, () => Log.info(`API is live on port ${port}`, 'API'))