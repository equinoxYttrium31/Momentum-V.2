import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		lng: savedLanguage,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: false,
		},

		backend: {
			loadPath: './locales/{{lng}}.json',
		},

		cache: {
			enabled: true,
		},
	});

i18n.on('languageChanged', (lng) => {
	localStorage.setItem('language', lng);
});

export default i18n;
