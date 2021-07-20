import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  cacheDirectory: '.jest/cache',
  preset: 'ts-jest',
  roots: ['src'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};

export default config;
