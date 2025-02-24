import '../../css/about-us-components/au-mission.css';
import missionImage from '../../../../assets/images/missions-image.jpg';

import { useTranslation } from 'react-i18next';

function MissionComponent() {
	const { t } = useTranslation();

	return (
		<div className='au-mission-container'>
			<div className='au-mission-text-container'>
				<h2 className='mission-header-text'>Momentum&apos;s Mission</h2>
				<p className='mission-paragraph-text'>{t('AboutUs.Mission-Text')}</p>
			</div>
			<div className='au-mission-image-container'>
				<img
					src={missionImage}
					alt='mission image'
					className='mission-image'
				/>
			</div>
		</div>
	);
}

export default MissionComponent;
