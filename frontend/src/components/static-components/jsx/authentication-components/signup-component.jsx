import '../../css/authentication-components/signup-component.css';
import logo from '/momentum-logo.png';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Buttons from '../../../reusable-components/Buttons';
import InputField from '../../../reusable-components/Input-Field';

function SignUpComponent() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		contactNumber: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState('');
	const apiUrl = import.meta.env.VITE_AXIOS_URL;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Basic form validation
		if (
			!user.firstName.trim() ||
			!user.lastName.trim() ||
			!user.contactNumber.trim() ||
			!user.email.trim() ||
			!user.password.trim() ||
			!user.confirmPassword.trim()
		) {
			setError('Please fill out all the fields.');
			return;
		}

		if (user.password !== user.confirmPassword) {
			setError('Passwords do not match.');
			return;
		}

		try {
			const response = await axios.post(`${apiUrl}/create-user`, user);
			setUser({
				firstName: '',
				lastName: '',
				contactNumber: '',
				email: '',
				password: '',
				confirmPassword: '',
			});

			toast.success(`${response.firstName}'s Account was created!`);
			navigate('/login');
		} catch (err) {
			toast.error(err.response?.data?.message || 'Something went wrong, please try again.');
		}
	};

	return (
		<div className='sc-container-main'>
			<div className='sc-container-left'>
				<img
					src={logo}
					alt='Momentum Logo'
					className='lc-side-logo'
				/>
				<p className='lc-engaging-text'>{t('Authentication.sideText')}</p>
				<Buttons
					onClick={() => navigate('/login')}
					text={t('Authentication.signin-button')}
					className='lc-btn sign-in'
				/>
			</div>
			<div className='sc-container-right'>
				<div className='sc-container-form'>
					<div className='sc-form-header'>
						<h1 className='sc-text-header'>{t('Authentication.signup-header')}</h1>
						<p className='sc-text-instruction'>{t('Authentication.signup-instructions')}</p>
					</div>
					<div className='sc-form-body'>
						<InputField
							inpType={'text'}
							className='sc-inputs'
							placeholder={'First Name'}
							required={true}
							name='firstName'
							value={user.firstName}
							onChange={handleChange}
						/>
						<InputField
							inpType={'text'}
							className='sc-inputs'
							placeholder={'Last Name'}
							required={true}
							name='lastName'
							value={user.lastName}
							onChange={handleChange}
						/>
						<InputField
							inpType={'tel'}
							className='sc-inputs wide'
							placeholder={'Contact Number'}
							required={true}
							name={'contactNumber'}
							value={user.contactNumber}
							onChange={handleChange}
						/>
						<InputField
							inpType={'email'}
							className='sc-inputs wide'
							placeholder={'Email'}
							required={true}
							name='email'
							value={user.email}
							onChange={handleChange}
						/>
						<InputField
							inpType={'password'}
							className='sc-inputs wide'
							placeholder={'Enter Password'}
							required={true}
							name='password'
							value={user.password}
							onChange={handleChange}
						/>
						<InputField
							inpType={'password'}
							className='sc-inputs wide'
							placeholder={'Confirm Password'}
							required={true}
							name='confirmPassword'
							value={user.confirmPassword}
							onChange={handleChange}
						/>
						{error && <p className='error-message wide'>{error}</p>}
						<Buttons
							onClick={handleSubmit}
							text={t('Authentication.signup-button')}
							className='lc-btn create-account'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUpComponent;
