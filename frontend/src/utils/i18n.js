import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Import the backend plugin

// Initialize i18next with JSON file support
i18n
	.use(Backend) // Add backend for loading translation files
	.use(initReactI18next) // Integrate with React
	.init({
		lng: 'en', // Set default language
		fallbackLng: 'en', // Fallback language if the selected language is not available
		interpolation: {
			escapeValue: false, // React already escapes values
		},
		react: {
			useSuspense: false, // Disable Suspense if you don't want to use it
		},

		// Backend configuration for loading translation files
		backend: {
			loadPath: './locales/{{lng}}.json', // Path to your translation files
		},

		// Optionally enable caching of translation files
		cache: {
			enabled: true,
		},
	});

export default i18n;
