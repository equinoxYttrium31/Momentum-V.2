import '../css/navbar-component.css';
import logo from '/momentum-logo.png';
import ThemeToggle from '../../../utils/ThemeToggle';
import LanguageSwitcher from '../../reusable-components/LanguageSwitcher';
import Buttons from '../../reusable-components/Buttons';

function NavbarComponent() {
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

			<div className='nb-container-list'>
				<button
					onClick={''}
					className='p-2 rounded-md text-white nb-burger'
				>
					<span className='block w-6 h-1 bg-[var(--text-color)] mb-1'></span>
					<span className='block w-6 h-1 bg-[var(--text-color)] mb-1'></span>
					<span className='block w-6 h-1 bg-[var(--text-color)] mb-1'></span>
				</button>

				<ul className='nb-list-group'>
					<li className='nb-list-items'>HOME</li>
					<li className='nb-list-items'>ABOUT</li>
					<li className='nb-list-items'>CONTACT US</li>
					<li id='nb-hidden-buttons'>
						<div className='nb-container-buttons'>
							<LanguageSwitcher />
							<ThemeToggle />

							<Buttons
								onClick={''}
								text={'Login'}
								className='btn-navbar'
							/>
							<Buttons
								onClick={''}
								text={'Sign Up'}
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
					onClick={''}
					text={'Login'}
					className='btn-navbar'
				/>
				<Buttons
					onClick={''}
					text={'Sign Up'}
					className='btn-navbar'
				/>
			</div>
		</div>
	);
}

export default NavbarComponent;
