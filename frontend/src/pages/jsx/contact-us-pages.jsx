import '../css/contact-us-pages.css';

import TextComponents from '../../components/static-components/jsx/contact-us-components/cu-texts';
import FormComponents from '../../components/static-components/jsx/contact-us-components/cu-form';

function ContactUs() {
	return (
		<div className='contact-us-container-main'>
			<div className='contact-us-container-left'>
				<TextComponents />
			</div>
			<div className='contact-us-container-right'>
				<FormComponents />
			</div>
		</div>
	);
}

export default ContactUs;
