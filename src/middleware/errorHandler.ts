import { Context, Middleware, Next } from 'koa';
import { logger } from '../logging';

export const errorHandler = (): Middleware => async (_ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    logger.info({ error: err }, 'Error');
    // TODO: We need a better way of stopping execution rather than just throwing a new error
    // would a promise.reject here be better?
    // Re-throwing errors shouldn't happen if we can avoid it
    throw err;
  }
};
