import { Context, Middleware, Next } from 'koa';
import { logger } from '../logging';

export const loggerMiddleware = (): Middleware => async (ctx: Context, next: Next) => {
  const {
    req: { method, url },
  } = ctx;

  logger.info(
    {
      req: { method, url },
    },
    'Request received',
  );

  await next();

  // Add data as needed
  logger.info(
    'Response sent',
  );
};
