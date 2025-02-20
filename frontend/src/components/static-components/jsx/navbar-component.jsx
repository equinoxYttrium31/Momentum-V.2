import '../css/navbar-component.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/momentum-logo.png';
import ThemeToggle from '../../../utils/ThemeToggle';
import LanguageSwitcher from '../../reusable-components/LanguageSwitcher';
import Buttons from '../../reusable-components/Buttons';

function NavbarComponent() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const navigate = useNavigate();

	return (
		<div className='nb-container-main'>
			<div className='nb-container-logos'>
				<img
					src={logo}
					alt='Momentum Logo'
					className='nb-image-logo'
				/>
				<h1 className='nb-text-logo'>Momentum</h1>
			</div>

			<div className={`nb-container-list ${menuOpen ? 'open' : 'closed'}`}>
				<button
					onClick={toggleMenu}
					className='p-2 rounded-md text-white nb-burger'
				>
					<span className='block w-6 h-1 bg-[var(--text-color)] mb-1'></span>
					<span className='block w-6 h-1 bg-[var(--text-color)] mb-1'></span>
					<span className='block w-6 h-1 bg-[var(--text-color)] mb-1'></span>
				</button>

				<ul className={`nb-list-group ${menuOpen ? 'nb-list-open' : 'nb-list-closed'}`}>
					<li className='nb-list-items'>
						<Link to='/'>HOME</Link>
					</li>
					<li className='nb-list-items'>
						<Link to='/about'>ABOUT</Link>
					</li>
					<li className='nb-list-items'>
						<Link to='/contact'>CONTACT US</Link>
					</li>
					<li className={`nb-hidden-buttons ${menuOpen ? 'show' : ''}`}>
						<div className='nb-container-buttons-li'>
							<LanguageSwitcher />
							<ThemeToggle />

							<Buttons
								onClick={() => navigate('/login')}
								text={'Login'}
								className='btn-navbar'
							/>
						</div>
					</li>
				</ul>
			</div>

			<div className='nb-container-buttons'>
				<LanguageSwitcher />
				<ThemeToggle />

				<Buttons
					onClick={() => navigate('/login')}
					text={'Login'}
					className='btn-navbar'
				/>
			</div>
		</div>
	);
}

export default NavbarComponent;
