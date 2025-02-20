import '../../css/authentication-components/login-component.css';

//Hooks Imports
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

//Components Imports
import InputField from '../../../reusable-components/Input-Field';
import Buttons from '../../../reusable-components/Buttons';

function LoginComponent() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<div className='lc-container-main'>
			<div className='lc-container-left'>
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
						/>
						<InputField
							inpType={'password'}
							placeholder={'Password'}
							className={'inp-password lc-input'}
						/>

						<Buttons
							onClick={() => {}}
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
