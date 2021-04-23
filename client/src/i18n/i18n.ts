import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { enUS } from './locale';

const resources = { en_US: enUS };

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en_US',
    ns: ['labels', 'phrases', 'form', 'text'],
    saveMissing: true,
    keySeparator: false,
    load: 'all',
    defaultNS: 'labels',
    fallbackNS: 'pending',
    supportedLngs: ['en_US'],
    missingKeyHandler: (lng, ns, key, fallbackValue) => {
      console.error(`Missing key ${key} for language ${lng}`);
    },
    parseMissingKeyHandler: () => 'TRANSLATION_NOT_FOUND',
    interpolation: {
      escapeValue: false,
    },
    detection: { order: ['navigator'] },
  });

const t = i18next.t.bind(i18next);
export { t };
export default i18next;
