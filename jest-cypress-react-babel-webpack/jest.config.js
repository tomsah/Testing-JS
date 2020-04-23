const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom', // this is to simulate the DOM
  // on a node environment

  // telling jest how to load our modules like node_modules, so without to give
  // the relative path
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  moduleNameMapper: {
    // CONFIG necessary fif you use css module
    //return a string for the path that was accessed for that module
    // essentially return the name of the comp as a class name, allowing
    // testing around classname logic ect.. essential because we are mocking
    // our css module
    '\\.module\\.css$': 'identity-obj-proxy',
    // jest try to require our css files ( because of import foo from foo.css
    // pattern) like if it was a commonjs module
    //return the mock for the style module when jest see .css files
    '\\.css$': require.resolve('./test/style-mock.js')
  },
  //files that jest will run after it sets up the jest testing env
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  // necessary if you use your css in js (emotion, css-js, glamorous ...)
  // to see the css added in your snapshot
  snapshotSerializers: ['jest-emotion']
}
