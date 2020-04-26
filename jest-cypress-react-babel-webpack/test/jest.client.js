module.exports = {
  ...require('./jest-common'),
  testEnvironment: 'jest-environment-jsdom', // this is to simulate the DOM
  // on a node environment for our client
  //files that jest will run after it sets up the jest testing env
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  // necessary if you use your css in js (emotion, css-js, glamorous ...)
  // to see the css added in your snapshot
  snapshotSerializers: ['jest-emotion'],
}
