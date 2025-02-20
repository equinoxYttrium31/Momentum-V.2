import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const handleChangeLanguage = (e) => {
		const newLang = e.target.value;
		i18n.changeLanguage(newLang);
	};

	return (
		<select
			value={i18n.language}
			onChange={handleChangeLanguage}
			className='p-2 border-none rounded outline-none'
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
