const { join } = require('path');

const pkg = require('./package.json');

module.exports = {
  rootDir: __dirname,
  setupFilesAfterEnv: ['@wordpress/jest-console'],
  displayName: pkg.name,
  testMatch: [join(__dirname, 'src/**/*.test.{js,ts,tsx}')],
  setupFilesAfterEnv: ['<rootDir>/src/setuptests.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
};
