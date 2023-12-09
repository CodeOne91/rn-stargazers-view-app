module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // GENERATE ERROR IN FLAT LIST,
  plugins: [
    '@babel/plugin-transform-private-methods',
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
