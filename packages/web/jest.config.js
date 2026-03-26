module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  testRegex: 'src/.*\\.test\\.tsx?$',
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '^react-native$': require.resolve('react-native-web')
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native-web|escape-string-regexp)/)'
  ]
};
