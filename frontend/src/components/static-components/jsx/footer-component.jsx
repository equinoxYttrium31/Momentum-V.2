import '../css/footer-component.css';
import { facebook, twitter, instagram, github } from '../../../assets/icons/Icons';
import { Link } from 'react-router-dom';

function FooterComponent() {
	const handleLinkClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className='fs-main-container'>
			<div className='fs-contact-container'>
				<div className='fs-nav-links-container'>
					<ul className='fs-nav-links'>
						<li className='fs-nav-items'>
							<Link
								to='/'
								onClick={handleLinkClick}
								className='item-link'
							>
								HOME
							</Link>
						</li>
						<li className='fs-nav-items'>
							<Link
								to='/about'
								onClick={handleLinkClick}
								className='item-link'
							>
								ABOUT
							</Link>
						</li>
						<li className='fs-nav-items'>
							<Link
								to='/contact'
								onClick={handleLinkClick}
								className='item-link'
							>
								CONTACT US
							</Link>
						</li>
					</ul>
				</div>
				<div className='fs-contact-info-container'>
					<div className='fs-email-container'>
						<p className='fs-email-label'>Email: </p>
						<a
							className='fs-email-link'
							href='mailto:johnmarkflameno@gmail.com'
						>
							johnmarkflameno@gmail.com
						</a>
					</div>
				</div>
				<div className='fs-social-icon-container'>
					<div className='fs-icons-items'>
						<a href='https://github.com/equinoxYttrium31'>
							<img
								src={github}
								alt=''
								className='icons-image'
							/>
						</a>
					</div>

					<div className='fs-icons-items'>
						<a href='https://web.facebook.com/profile.php?id=61568548185514'>
							<img
								src={facebook}
								alt=''
								className='icons-image'
							/>
						</a>
					</div>

					<div className='fs-icons-items'>
						<a href='https://www.instagram.com/flameno_jm/'>
							<img
								src={instagram}
								alt=''
								className='icons-image'
							/>
						</a>
					</div>

					<div className='fs-icons-items'>
						<a href='https://x.com/dev_jaem_com'>
							<img
								src={twitter}
								alt='Twitter'
								className='icons-image'
							/>
						</a>
					</div>
				</div>
			</div>

			<div className='fs-copyright-container'>
				<p>© {new Date().getFullYear()} Momentum. All rights reserved.</p>
			</div>
		</div>
	);
}

export default FooterComponent;
