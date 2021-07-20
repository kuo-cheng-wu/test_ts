import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  cacheDirectory: '.jest/cache',
  preset: 'ts-jest',
  roots: ['src'],
  coverageThreshold: {
    global: {
      branches:90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};

export default config;
