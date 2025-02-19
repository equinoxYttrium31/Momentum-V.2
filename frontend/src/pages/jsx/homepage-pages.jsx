import React from 'react';
import '../css/homepage-pages.css';

const HeroSection = React.lazy(() =>
	import('../../components/static-components/jsx/hompage-components/herosection-component'),
);

function Homepage() {
	return (
		<div className='homepage'>
			<section id='hp-hero-section'>
				<HeroSection />
			</section>
		</div>
	);
}

export default Homepage;
