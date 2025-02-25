import '../css/contact-us-pages.css';

import TextComponents from '../../components/static-components/jsx/contact-us-components/cu-texts';
import FormComponents from '../../components/static-components/jsx/contact-us-components/cu-form';

import useScrollAnimation from '../../hooks/useScrollAnimation';

function ContactUs() {
	const sectionsRef = useScrollAnimation('fade-in');

	return (
		<div
			className='contact-us-container-main'
			ref={(el) => (sectionsRef.current[0] = el)}
		>
			<div
				className='contact-us-container-left cu-sections'
				ref={(el) => (sectionsRef.current[1] = el)}
			>
				<TextComponents />
			</div>
			<div
				className='contact-us-container-right cu-sections'
				ref={(el) => (sectionsRef.current[2] = el)}
			>
				<FormComponents />
			</div>
		</div>
	);
}

export default ContactUs;
