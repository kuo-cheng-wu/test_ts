import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  cacheDirectory: '.jest/cache',
  preset: 'ts-jest',
  roots: ['src'],
};

export default config;
