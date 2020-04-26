module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: ['**/src/**/*.js'],
  //enforce that need code has to come with test
  coverageThreshold: {
    global: {
      statements: 31,
      branches: 18,
      functions: 28,
      lines: 29
    },
    //reinforce coverage on particular files
    //jest remove the file from the global coverage
    './src/shared/utils.js' : {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100
    }
  },
  //allow to run both of our test environment (node / browser) by
  //pointing at 2 diff jest config
  projects: ['./test/jest.lint.js','./test/jest.client.js', './test/jest.server.js']
}
