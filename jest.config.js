module.exports = {
  clearMocks: true,
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '.html$': '<rootDir>/../jest/HtmlStub.js',
  },
  rootDir: './src',
};
