import app from './app';
import { logger } from './logging';
import { getConfig } from './config/config';

const port = getConfig().get('port');
app.listen(port);
logger.info(`Listening to http://localhost:${port} 🚀`);
