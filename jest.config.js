module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
    transformIgnorePatterns: ['/node_modules/'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.js?$': 'babel-jest',
      },
  };
  