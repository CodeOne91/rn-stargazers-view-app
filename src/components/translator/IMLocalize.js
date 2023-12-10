import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

import en from '../../constants/translations/en';
import it from '../../constants/translations/it';

const LANGUAGES = {
  en,
  it,
};

export const LANG_CODES = Object.keys(LANGUAGES);

export const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    AsyncStorage.getItem('user-language', (err, language) => {
      // if error fetching stored data or no language was stored
      // display errors when in DEV mode as console statements
      if (err || !language) {
        if (err) {
          console.log('Error fetching Languages from asyncstorage ', err);
        } else {
          console.log('No language is set, choosing English as fallback');
        }
        const findBestAvailableLanguage =
          RNLocalize.findBestAvailableLanguage(LANG_CODES);
        if (findBestAvailableLanguage?.languageTag) {
          callback(findBestAvailableLanguage?.languageTag || 'en');
          return;
        } else {
          callback('en');
          return;
        }
        // callback(findBestAvailableLanguage?.languageTag || 'en');
        // return;
      }
      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: language => {
    AsyncStorage.setItem('user-language', language);
  },
};

i18n
  // detect language
  .use(LANGUAGE_DETECTOR)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // set options
  .init({
    compatibilityJSON: 'v3',

    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    // set the initial language from AsyncStorage, or fall back to the best available language
    initImmediate: false,
    init: async (err, t) => {
      const language = await AsyncStorage.getItem('user-language');
      if (language) {
        i18n.changeLanguage(language);
      } else {
        const bestAvailableLanguage =
          RNLocalize.findBestAvailableLanguage(LANG_CODES);
        i18n.changeLanguage(bestAvailableLanguage?.languageTag || 'en');
      }
    },
  });
