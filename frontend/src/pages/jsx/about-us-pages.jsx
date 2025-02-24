import '../css/about-us-pages.css';

import HeaderComponent from '../../components/static-components/jsx/about-us-components/au-header';
import MissionComponent from '../../components/static-components/jsx/about-us-components/au-mission';
import StoryComponent from '../../components/static-components/jsx/about-us-components/au-story';
import CTAComponents from '../../components/static-components/jsx/about-us-components/au-cta';

import useScrollAnimation from '../../hooks/useScrollAnimation';

function AboutUs() {
	const sectionsRef = useScrollAnimation('fade-in');

	return (
		<div className='au-container-main'>
			<div
				className='au-container-header au-sections'
				ref={(el) => (sectionsRef.current[0] = el)}
			>
				<HeaderComponent />
			</div>
			<div
				className='au-container-mission au-sections'
				ref={(el) => (sectionsRef.current[1] = el)}
			>
				<MissionComponent />
			</div>
			<div
				className='au-container-mission au-sections'
				ref={(el) => (sectionsRef.current[2] = el)}
			>
				<StoryComponent />
			</div>
			<div
				className='au-container-mission au-sections'
				ref={(el) => (sectionsRef.current[3] = el)}
			>
				<CTAComponents />
			</div>
		</div>
	);
}

export default AboutUs;
