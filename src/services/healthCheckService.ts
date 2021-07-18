import { logger } from '../logging/logger';

export const healthCheckService = (): string => {
  logger.info('Health Check - OK');
  return 'OK';
};
