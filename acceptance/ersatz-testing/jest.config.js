module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  testRegex: 'src/.*\\.test\\.tsx?$',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|node-fetch|fetch-blob|data-uri-to-buffer|formdata-polyfill)/)'
  ]
};
