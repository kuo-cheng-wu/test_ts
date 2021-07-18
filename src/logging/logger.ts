import pino from 'pino';
import { get as requestStoreGet } from './requestStore';

const loggerInstance = pino({
  mixin: () => ({ requestId: requestStoreGet<string>('id') }),
});

export const logger = loggerInstance;
