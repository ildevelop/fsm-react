import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Remap .js imports to ESM
  },
  transformIgnorePatterns: ['node_modules/(?!fsm-libts/.*)'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};

export default config;
