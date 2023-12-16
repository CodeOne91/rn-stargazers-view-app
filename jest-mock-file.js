import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// Mock the react-native-localize module
jest.mock('react-native-localize', () => ({
  getLocales: jest.fn(),
  findBestAvailableLanguage: jest.fn(() => ({
    languageTag: 'en',
    isRTL: false,
  })),
}));

// Other mocks
jest.mock('react-native-paper');
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

export {};
