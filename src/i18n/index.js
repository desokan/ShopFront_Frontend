import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locales/en/translation.json';
import translationsInFrench from '../locales/fr/translation.json';
import translationsInItalian from '../locales/it/translation.json';

// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  fr: {
    translation: translationsInFrench
  },
  it: {
    translation: translationsInItalian
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources, 
    lng: "en", 
    debug: true,
    fallbackLng: "fr", 
    interpolation: {
      escapeValue: false
    },
    ns: "translation",
    defaultNS: "translation"
  });

export default i18n;