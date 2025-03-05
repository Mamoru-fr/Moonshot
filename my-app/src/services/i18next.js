import i18next from 'i18next';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { initReactI18next } from 'react-i18next';

export const languageResources = {
    en: { translation: en },
    fr: { translation: fr },
}

i18next.use(initReactI18next).init({
    lng: 'en',
    compatibilityJSON: 'v3',
    debug: true,
    resources: languageResources,
});

export default i18next;
