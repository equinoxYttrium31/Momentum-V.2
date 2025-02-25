import '../../css/contact-us-components/cu-texts.css';

import { useTranslation } from 'react-i18next';

function TextComponents() {
	const { t } = useTranslation();

	return (
		<div className='texts-container-main'>
			<div className='texts-container-header'>
				<h1 className='cu-header-text'>{t('ContactUs.Header')}</h1>
				<p className='cu-context-text'>{t('ContactUs.Subtext')}</p>
			</div>
			<div className='texts-container-socials'>
				<div className='social-items-container'>
					<svg
						className='social-items-icon'
						width='32'
						height='32'
						viewBox='0 0 24 24'
						fill='currentColor'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.79 15.38 19.23 15.62 20.71 15.62C21.39 15.62 22 16.23 22 16.91V20.71C22 21.39 21.39 22 20.71 22C10.07 22 2 13.93 2 3.29C2 2.61 2.61 2 3.29 2H7.09C7.77 2 8.38 2.61 8.38 3.29C8.38 4.77 8.62 6.21 9.06 7.57C9.18 7.92 9.09 8.32 8.82 8.59L6.62 10.79Z' />
					</svg>
					<a
						href='tel:+639123456789'
						className='social-items-link'
					>
						09123456789
					</a>
				</div>
				<div className='social-items-container'>
					<svg
						className='social-items-icon'
						width='32'
						height='32'
						viewBox='0 0 24 24'
						fill='currentColor'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M2 4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4ZM20 6.5L12 12L4 6.5V20H20V6.5ZM4 4V5.07L12 10.5L20 5.07V4H4Z' />
					</svg>
					<a
						href='mailto:johnmarkflameno@gmail.com'
						className='social-items-link'
					>
						johnmarkflameno@gmail.com
					</a>
				</div>
				<div className='social-items-container'>
					<svg
						className='social-items-icon'
						width='32'
						height='32'
						viewBox='0 0 24 24'
						fill='currentColor'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M12 2C8.13 2 5 5.13 5 9C5 13.25 10.25 19.75 11.43 21.14C11.73 21.5 12.27 21.5 12.57 21.14C13.75 19.75 19 13.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z' />
					</svg>
					<a
						href='https://www.google.com/maps/place/Pulilan,+Bulacan/@14.9017288,120.8676643,20z/data=!4m6!3m5!1s0x339655aca2f900db:0x553f606707251b8c!8m2!3d14.9124488!4d120.8457963!16zL20vMDZwel8z?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D'
						className='social-items-link'
					>
						Pulilan, Bulacan, Philippines
					</a>
				</div>
			</div>
		</div>
	);
}

export default TextComponents;
