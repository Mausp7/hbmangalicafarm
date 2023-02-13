import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
    .use(LanguageDetector)
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        fallbackLng: "hu",
        supportedLngs: ['hu', 'en', 'de'],
        whitelist: ['hu', 'en', 'de'],
        detection: {
            order: [ 'path', 'cookie', 'localStorage', 'htmlTag', 'subdomain'],
            caches: ['localStorage'],
            checkWhitelist: true,
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json'
        },
        react: {
            useSuspense: true
        },
        debug: false,
    });

export default i18n;