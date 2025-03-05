import i18next from 'i18next';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

export const languageResources = {
    en: { translation: en },
    fr: { translation: fr },
}

i18next.init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: {
                key: 'Hello World',
            }
        }
    },
});

export default i18next;
