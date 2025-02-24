import '../../css/about-us-components/au-story.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function StoryComponent() {
	const [visibleItems, setVisibleItems] = useState([]);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisibleItems((prev) => [...prev, entry.target.id]);
				} else {
					setVisibleItems((prev) => prev.filter((id) => id !== entry.target.id));
				}
			});
		}, options);

		const items = document.querySelectorAll('.timeline-item');
		items.forEach((item) => observer.observe(item));

		return () => observer.disconnect();
	}, []);

	const { t } = useTranslation();

	return (
		<div className='os-main-container'>
			<h2>Our Story</h2>
			<div className='timeline'>
				<div
					id='item-1'
					className={`timeline-item ${visibleItems.includes('item-1') ? 'visible' : ''}`}
				>
					<h3>{t('Au-Story.item-1-header')}</h3>
					<p>{t('Au-Story.item-1-text')}</p>
				</div>

				<div
					id='item-2'
					className={`timeline-item ${visibleItems.includes('item-2') ? 'visible' : ''}`}
				>
					<h3>{t('Au-Story.item-2-header')}</h3>
					<p>{t('Au-Story.item-2-text')}</p>
				</div>

				<div
					id='item-3'
					className={`timeline-item ${visibleItems.includes('item-3') ? 'visible' : ''}`}
				>
					<h3>{t('Au-Story.item-3-header')}</h3>
					<p>{t('Au-Story.item-3-text')}</p>
				</div>

				<div
					id='item-4'
					className={`timeline-item ${visibleItems.includes('item-4') ? 'visible' : ''}`}
				>
					<h3>{t('Au-Story.item-4-header')}</h3>
					<p>{t('Au-Story.item-4-text')}</p>
				</div>

				<div
					id='item-5'
					className={`timeline-item ${visibleItems.includes('item-5') ? 'visible' : ''}`}
				>
					<h3>{t('Au-Story.item-5-header')}</h3>
					<p>{t('Au-Story.item-5-text')}</p>
				</div>
			</div>
		</div>
	);
}

export default StoryComponent;
