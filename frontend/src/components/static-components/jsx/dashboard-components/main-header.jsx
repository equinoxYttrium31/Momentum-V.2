import '../../css/dashboard-components/main-header.css';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import placeholder from '../../../../assets/images/placeholder.jpg';

function MainHeader() {
	const [notificationCount, setNotificationCount] = useState(5);
	const [user, setUser] = useState({});
	const [showNotification, setShowNotification] = useState(false);
	const [showProfile, setShowProfile] = useState(false);
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

	const logoutUser = async () => {
		try {
			const response = await axios.get(`${apiLink}/logout-user`, { withCredentials: true });
			console.log(response);

			if (response.status === 200) {
				toast.success('Logged out successfully');
				window.location.href = '/login';
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getUserInitials = (name) => {
		if (!name) return '?'; // Default if name is missing
		const nameParts = name.split(' ');
		const initials = nameParts.map((part) => part[0].toUpperCase()).join('');
		return initials;
	};

	useEffect(() => {
		fetchUser();
	}, []);

	const handleNotificationClick = () => {
		setShowNotification(!showNotification);
	};

	const handleProfileClick = () => {
		setShowProfile(!showProfile);
	};

	return (
		<div className='main-header-container'>
			<div className='button-container'>
				<button
					className='header-btn-notification'
					onClick={handleNotificationClick}
					onMouseEnter={() => {
						setShowNotification(true);
						setShowProfile(false);
					}}
				>
					<svg
						width='40px'
						height='40px'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						stroke=''
					>
						<g
							id='SVGRepo_bgCarrier'
							stroke-width='0'
						></g>
						<g
							id='SVGRepo_tracerCarrier'
							stroke-linecap='round'
							stroke-linejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M17.25 14.8125V10.4375C17.25 7.75125 15.8237 5.5025 13.3125 4.9075V4.3125C13.3125 3.58625 12.7263 3 12 3C11.2737 3 10.6875 3.58625 10.6875 4.3125V4.9075C8.185 5.5025 6.75 7.7425 6.75 10.4375V14.8125L5 16.5625V17.4375H19V16.5625L17.25 14.8125ZM12 20.0625C12.9625 20.0625 13.75 19.275 13.75 18.3125H10.25C10.25 19.275 11.0375 20.0625 12 20.0625ZM8.5 15.6875H15.5V10.4375C15.5 8.2675 14.1788 6.5 12 6.5C9.82125 6.5 8.5 8.2675 8.5 10.4375V15.6875Z'
								fill='currentColor'
							></path>
						</g>
					</svg>
					{notificationCount > 0 && <span className='notification-count'>{notificationCount}</span>}
				</button>
			</div>

			<div className='button-container'>
				<button
					className='header-btn notification'
					onClick={handleProfileClick}
					onMouseEnter={() => {
						setShowProfile(true);
						setShowNotification(false);
					}}
				>
					{user ? (
						<div className='w-9 h-9 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full text-md'>
							{getUserInitials(user.fullName)}
						</div>
					) : (
						<img
							src={placeholder}
							alt='Profile'
							className='rounded-full w-10 h-10'
						/>
					)}
				</button>
			</div>

			{showNotification && (
				<div
					className='modal-button'
					onMouseLeave={() => setShowNotification(false)}
				>
					<div className='header-modal-notifications'>
						<h2 className='header-notifications'>Notifications</h2>
					</div>
					<div className='notification-list-body'></div>
				</div>
			)}

			{showProfile && (
				<div
					className='modal-button-profile'
					onMouseLeave={() => setShowProfile(false)}
				>
					<div className='header-modal'>
						{user ? (
							<div className='header-content'>
								<div className='profile-picture w-18 h-18 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full text-2xl'>
									{getUserInitials(user.fullName)}
								</div>
								<h3 className='user-name'>{user.fullName}</h3>
								<p className='user-email'>{user.email}</p>
							</div>
						) : (
							<img
								src={placeholder}
								alt='Profile'
								className='rounded-full w-10 h-10'
							/>
						)}
					</div>

					<div className='link-container'>
						<button
							href='/dashboard/profile'
							className='profile-btn'
						>
							Profile
						</button>
						<button
							className='logout-btn'
							onClick={logoutUser}
						>
							Logout
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default MainHeader;
