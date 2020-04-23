module.exports = {
  testEnvironment: 'jest-environment-jsdom', // this is to simulate the DOM
  // on a node environment
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
  // necessary if you use your css in js (emotion, css-js, glamorous ...)
  // to see the css added in your snapshot
  snapshotSerializers: ['jest-emotion']
}
