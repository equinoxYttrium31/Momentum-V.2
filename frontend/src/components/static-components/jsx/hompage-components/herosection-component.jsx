import '../../css/homepage-components/herosection-component.css';
import { useTranslation } from 'react-i18next';
import HeroImage from '../../../../assets/images/hero-image.png';
import Buttons from '../../../reusable-components/Buttons';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
	const { t } = useTranslation();

	const navigate = useNavigate();

	return (
		<div className='hs-container-main'>
			<div className='hs-container-images'>
				<img
					className='hs-image'
					src={HeroImage}
					alt='Hero section image'
				/>
			</div>

			<div className='hs-container-texts'>
				<h1 className='hs-text-header'>{t('HeroSection.header')}</h1>
				<p className='hs-text-subtext'>{t('HeroSection.subtext')}</p>
			</div>

			<div className='hs-container-buttons'>
				<Buttons
					onClick={() => navigate('/login')}
					text={t('HeroSection.cta')}
					className='cta-btn'
				/>
			</div>
		</div>
	);
}

export default HeroSection;
