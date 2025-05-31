// D:/reactnative/lynkTT/index.ts
import 'react-native-get-random-values'; // MUST be first for crypto
import 'react-native-url-polyfill/auto';  // For URL polyfill

import { registerRootComponent } from 'expo';
import { Buffer } from 'buffer';

import App from './App';
global.Buffer = Buffer;

registerRootComponent(App);