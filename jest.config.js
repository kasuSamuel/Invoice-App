module.exports = {
  preset: 'jest-preset-angular',
  "setupFilesAfterEnv": ["<rootDir>/test-setup.ts"],

  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
