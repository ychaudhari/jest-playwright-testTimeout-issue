import type { Config } from '@jest/types';

// https://jestjs.io/docs/en/configuration
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: false,
    setupFilesAfterEnv: ['./jest.setup.ts', 'expect-playwright'],
    preset: 'jest-playwright-preset',
    testMatch: ['**/tests/**/?(*.)+(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '/helpers/'],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    reporters: [
      'default',
    ],
    testTimeout: 18000,
  };
};
