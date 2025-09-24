import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation resources
import ukTranslations from './translations/uk.json';
import enTranslations from './translations/en.json';

const resources = {
  uk: {
    translation: ukTranslations
  },
  en: {
    translation: enTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uk', // Ukrainian as default
    fallbackLng: 'uk',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;