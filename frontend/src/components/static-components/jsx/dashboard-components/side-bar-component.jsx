import '../../css/dashboard-components/side-bar-component.css';
import logo from '/momentum-logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import navLinks from '../../../../data/navList';

import axios from 'axios';

function SidebarComponent() {
	const [isOpen, setIsOpen] = useState(true);
	const [user, setUser] = useState({});
	const apiLink = import.meta.env.VITE_AXIOS_URL;

	const fetchUser = async () => {
		try {
			const response = await axios.get(`${apiLink}/fetch-user`, { withCredentials: true });

			if (response.status === 200) {
				setUser(response.data.user);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<div className='sidebar-container-main'>
			<div className={`sidebar-container-header ${isOpen ? 'w-64' : 'w-15 d-flex flex-col gap-2'}`}>
				<img
					src={logo}
					alt='Momentum Logo'
					className='sidebar-header-logo'
				/>

				<h1 className={`${isOpen ? 'block' : 'hidden'} sidebar-header-text`}>Momentum</h1>
				<button
					className={`${isOpen ? 'left' : 'right'} sidebar-close-button`}
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? (
						<svg
							width='32'
							height='32'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M15 6L9 12L15 18'
								stroke='currentColor'
								strokeWidth='3'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					) : (
						<svg
							width='32'
							height='32'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9 6L15 12L9 18'
								stroke='currentColor'
								strokeWidth='3'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					)}
				</button>
			</div>

			<div className='sidebar-navigation-container'>
				<div className='sidebar-navigation-list-container'>
					<ul
						id='sidebar-list'
						className='space-y-2 px-2'
					>
						{navLinks.map((link, index) => (
							<li
								key={index}
								className={link.className}
							>
								<Link
									to={link.path}
									className='sidebar-link'
								>
									{link.icon && <span className='sidebar-icon'>{link.icon}</span>}
									<span className={`${isOpen ? 'block' : 'hidden'} sidebar-tags`}>{link.name}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='sidebar-navigation-footer-container'>
					<div className='p-4 border-t flex items-center gap-3'>
						<img
							src='https://via.placeholder.com/40'
							alt='Profile'
							className='rounded-full w-10 h-10'
						/>
						<div className={`${isOpen ? 'block' : 'hidden'}`}>
							<p className='text-sm font-semibold'>{user.fullName}</p>
							<button className='text-xs text-gray-500 profile-button'>View Profile</button>
						</div>
					</div>
					<p className={`${isOpen ? 'block' : 'hidden'} sidebar-copyright`}>&copy; 2025 Momentum</p>
				</div>
			</div>
		</div>
	);
}

export default SidebarComponent;
