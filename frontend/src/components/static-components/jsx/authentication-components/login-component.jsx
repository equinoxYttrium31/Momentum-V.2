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
				setError(response.data.message || 'Something went wrong');
			}
		} catch (error) {
			setError('An error occurred while logging in.');
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
							inpType={'password'}
							placeholder={'Password'}
							className={'inp-password lc-input'}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						{error && <p className='error-message'>{error}</p>}

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
