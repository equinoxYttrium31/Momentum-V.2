import { useTranslation } from 'react-i18next'; // Import i18n from react-i18next

const LanguageSwitcher = () => {
	const { i18n } = useTranslation(); // Use i18n hook from react-i18next

	// Handle language change
	const handleChangeLanguage = (e) => {
		const newLang = e.target.value;
		i18n.changeLanguage(newLang); // Change language using i18next
	};

	return (
		<select
			value={i18n.language} // Bind to the current language from i18next
			onChange={handleChangeLanguage} // Handle language change
			className='p-2 border rounded outline-none'
		>
			<option
				className=' bg-[var(--bg-color)]'
				value='en'
			>
				English
			</option>
			<option
				className=' bg-[var(--bg-color)]'
				value='fil'
			>
				Filipino
			</option>
		</select>
	);
};

export default LanguageSwitcher;
