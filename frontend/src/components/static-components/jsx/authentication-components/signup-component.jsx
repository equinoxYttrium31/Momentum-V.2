import '../../css/authentication-components/signup-component.css';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Buttons from '../../../reusable-components/Buttons';
import InputField from '../../../reusable-components/Input-Field';

function SignUpComponent() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<div className='sc-container-main'>
			<div className='sc-container-left'>
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
						/>
						<InputField
							inpType={'text'}
							className='sc-inputs'
							placeholder={'Last Name'}
							required={true}
						/>
						<InputField
							inpType={'tel'}
							className='sc-inputs wide'
							placeholder={'Contact Number'}
							required={true}
						/>
						<InputField
							inpType={'email'}
							className='sc-inputs wide'
							placeholder={'Email'}
							required={true}
						/>
						<InputField
							inpType={'password'}
							className='sc-inputs wide'
							placeholder={'Enter Password'}
							required={true}
						/>
						<InputField
							inpType={'password'}
							className='sc-inputs wide'
							placeholder={'Confirm Password'}
							required={true}
						/>
						<Buttons
							onClick={() => {}}
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
