import { Context, Middleware, Next } from 'koa';
import { requestStore } from '../logging';

export const requestStoreMiddleware = (): Middleware => async (ctx: Context, next: Next) => {
  const store = requestStore.getStore();

  store.bindEmitter(ctx.req);
  store.bindEmitter(ctx.res);

  await store.runPromise(() => next());
};
