// D:/reactnative/lynkTT/metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules = {
  ...defaultConfig.resolver.extraNodeModules,
  stream: require.resolve('readable-stream'),
  events: require.resolve('events'),
  http: require.resolve('stream-http'),
  https: require.resolve('stream-http'), // stream-http handles both
  url: require.resolve('react-native-url-polyfill'),
  zlib: require.resolve('browserify-zlib'),
  buffer: require.resolve('buffer/'),
  crypto: require.resolve('react-native-crypto'),
  path: require.resolve('path-browserify'),
  vm: require.resolve('vm-browserify'),
  net: require.resolve('react-native-tcp-socket'),
  tls: require.resolve('tls-browserify'),
  util: require.resolve('util/'),
  assert: require.resolve('assert'), 
};

module.exports = defaultConfig;