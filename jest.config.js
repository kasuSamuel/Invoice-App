module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: [
    "<rootDir>/node_modules/jest-preset-angular/setup-jest.js",
  ],
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],
};
