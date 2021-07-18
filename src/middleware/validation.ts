import Joi from 'joi';
import { Context, Middleware, Next } from 'koa';
import HttpStatus from 'http-status-codes';
import { ParsedUrlQuery } from 'querystring';

export const bodyValidator = (bodySchema: Joi.Schema): Middleware => async (ctx: Context, next: Next) => {
  try {
    const { value } = await bodySchema?.validateAsync(ctx.request.body) as {value: unknown};
    ctx.body = value;
  } catch (err) {
    ctx.throw(err, HttpStatus.BAD_REQUEST);
  }

  await next();
};

export const queryValidator = (querySchema: Joi.Schema): Middleware => async (ctx: Context, next: Next) => {
  try {
    const { value } = await querySchema?.validateAsync(ctx.query) as { value: ParsedUrlQuery };
    ctx.query = value;
  } catch (err) {
    ctx.throw(err, HttpStatus.BAD_REQUEST);
  }

  await next();
};
