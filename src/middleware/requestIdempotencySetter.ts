import { v4 as uuidv4 } from 'uuid';
import { Context, Middleware, Next } from 'koa';
import { requestStore } from '../logging';

export const requestIdempotencySetter = (): Middleware => async (ctx: Context, next: Next) => {
  const id = ctx.headers['X-Request-ID'] as string || uuidv4();

  requestStore.set<string>('id', id);
  await next();
};
