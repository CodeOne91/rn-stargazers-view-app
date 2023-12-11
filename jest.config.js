module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-native-paper|react-redux|@react-navigation|react-native-localize)',
  ],
  setupFiles: ['./jest-mock-file.js'],
};
