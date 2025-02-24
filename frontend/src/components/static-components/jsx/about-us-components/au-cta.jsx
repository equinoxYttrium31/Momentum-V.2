import '../../css/about-us-components/au-cta.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Buttons from '../../../reusable-components/Buttons';

function CTAComponents() {
	const { t } = useTranslation();

	const navigate = useNavigate();

	const handleNavigation = (path) => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		navigate(path);
	};

	return (
		<div className='cta-main-container'>
			<h2 className='cta-heading-text'>{t('AboutUs.CTA-Header')}</h2>
			<p className='cta-subtext-text'>{t('AboutUs.CTA-Subtext')}</p>
			<Buttons
				className='cta-btn'
				text={t('AboutUs.CTA-Button')}
				onClick={() => handleNavigation('/signup')}
			/>
		</div>
	);
}

export default CTAComponents;
