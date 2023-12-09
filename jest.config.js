module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-native-paper|react-redux)',
  ],
  setupFiles: ['./jest-mock-file.js'],
};
