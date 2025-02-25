import '../../css/authentication-components/login-component.css';
import logo from '/momentum-logo.png';
import axios from 'axios';
import { toast } from 'react-hot-toast';

//Hooks Imports
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Components Imports
import InputField from '../../../reusable-components/Input-Field';
import Buttons from '../../../reusable-components/Buttons';

function LoginComponent() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const apiUrl = import.meta.env.VITE_AXIOS_URL;
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isVisible, setIsVisible] = useState(false);

	const handleLogin = async () => {
		if (!email || !password) {
			setError('Please fill in both fields.');
			return;
		}

		try {
			const response = await axios.post(
				`${apiUrl}/login`,
				{ email, password },
				{ withCredentials: true },
			);

			if (response.status === 200) {
				//Redirect to the dashboard
				toast.success('Logged in Successful!');
			} else {
				toast.error(response.data.message || 'Something went wrong');
			}
		} catch (error) {
			toast.error('An error occurred while logging in.');
		}
	};

	return (
		<div className='lc-container-main'>
			<div className='lc-container-left'>
				<img
					src={logo}
					alt='Momentum Logo'
					className='lc-side-logo'
				/>
				<p className='lc-engaging-text'>{t('Authentication.sideText')}</p>
				<Buttons
					onClick={() => navigate('/signup')}
					text={t('Authentication.signup-button')}
					className='lc-btn create-account'
				/>
			</div>
			<div className='lc-container-right'>
				<div className='lc-container-glass'>
					<div className='lc-container-header'>
						<h1 className='lc-header-text'>{t('Authentication.login-header')}</h1>
					</div>
					<div className='lc-container-form'>
						<InputField
							inpType={'email'}
							placeholder={'Email'}
							className={'inp-email lc-input'}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<InputField
							inpType={isVisible ? 'text' : 'password'}
							placeholder={'Password'}
							className={'inp-password lc-input'}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button
							type='button'
							className='eye-toggle'
							onClick={() => setIsVisible(!isVisible)}
						>
							{isVisible ? (
								// Eye Open (Visible)
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
									<circle
										cx='12'
										cy='12'
										r='3'
									/>
								</svg>
							) : (
								// Eye Closed (Hidden)
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M17.94 17.94A10.12 10.12 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 3.17-4.91m4.5-3A9.71 9.71 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-3.17 4.91' />
									<line
										x1='2'
										y1='2'
										x2='22'
										y2='22'
									/>
								</svg>
							)}
						</button>

						<Buttons
							onClick={handleLogin}
							text={t('Authentication.signin-button')}
							className='lc-btn sign-in'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginComponent;
