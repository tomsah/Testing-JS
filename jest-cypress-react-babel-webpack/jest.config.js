module.exports = {
  testEnvironment: 'jest-environment-jsdom', // this is to simulate the DOM
  // on a node environment
  moduleNameMapper: {
    // jest try to require our css files ( because of import foo from foo.css
    // pattern) like if it was a commonjs module
    //return the mock for the style module when jest see .css files
    '\\.css$': require.resolve('./test/style-mock.js')
  }
}
