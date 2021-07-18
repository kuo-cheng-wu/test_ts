import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import {
  loggerMiddleware, errorHandler, requestIdempotencySetter, requestStoreMiddleware,
} from './middleware';
import router from './router';
import { getConfig } from './config/config';

const app = new Koa();

app.use(errorHandler());
app.use(requestStoreMiddleware());
app.use(requestIdempotencySetter());
app.use(loggerMiddleware());
app.use(
  helmet({
    contentSecurityPolicy: getConfig().get('contentPolicy'),
  }),
);
app.use(bodyParser());
app.use(router.routes());

export default app;
