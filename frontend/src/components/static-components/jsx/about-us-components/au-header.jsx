import '../../css/about-us-components/au-header.css';

import { useTranslation } from 'react-i18next';

function HeaderComponent() {
	const { t } = useTranslation();

	return (
		<div className='hc-container-main'>
			<h1 className='au-texts-header'>{t('AboutUs.Au-Header')}</h1>
			<p className='au-texts-subtext'>{t('AboutUs.Au-Subtext')}</p>
		</div>
	);
}

export default HeaderComponent;
