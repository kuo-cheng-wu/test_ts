import { Context } from 'koa';
import { prefix, request, summary } from 'koa-swagger-decorator';
import { healthCheckService } from '../services/healthCheckService';

@prefix('/healthz')
export default class HealthCheck {
  @request('get', '/')
  @summary('Checks that the service is up')
  helloWorld(ctx: Context): Context {
    ctx.body = healthCheckService();
    ctx.status = 200;
    return ctx;
  }
}
