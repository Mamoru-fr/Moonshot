import i18next from 'i18next';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json';
import jp from '../locales/jp.json';
import de from '../locales/de.json';
import ru from '../locales/ru.json';
import { initReactI18next } from 'react-i18next';

export const languageResources = {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
    de: { translation: de },
    jp: { translation: jp },
    ru: { translation: ru },
}

i18next.use(initReactI18next).init({
    lng: 'en',
    compatibilityJSON: 'v3',
    debug: true,
    resources: languageResources,
});

export default i18next;
