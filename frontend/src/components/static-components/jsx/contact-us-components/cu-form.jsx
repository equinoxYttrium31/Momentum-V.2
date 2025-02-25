import '../../css/contact-us-components/cu-form.css';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import InputField from '../../../reusable-components/Input-Field';
import Buttons from '../../../reusable-components/Buttons';

function FormComponents() {
	const apiUrl = import.meta.env.VITE_AXIOS_URL;
	const [concern, setConcern] = useState({
		firstName: '',
		lastName: '',
		email: '',
		concernMessage: '',
	});

	const handleChangeConcern = (e) => {
		const { name, value } = e.target;
		setConcern({ ...concern, [name]: value });
	};

	const handleSubmitConcern = async (e) => {
		e.preventDefault();

		if (
			!concern.firstName.trim() ||
			!concern.lastName.trim() ||
			!concern.email.trim() ||
			!concern.concernMessage.trim()
		) {
			toast.error('Please fill out all the fields.');
			return;
		}

		try {
			const response = await axios.post(`${apiUrl}/send-concern`, concern);
			setConcern({
				firstName: '',
				lastName: '',
				email: '',
				concernMessage: '',
			});

			toast.success('Concern sent successfully');
		} catch (err) {
			toast.error(err.response?.data?.message || 'Something went wrong, please try again.');
		}
	};

	return (
		<div className='cu-form-container-main'>
			<div className='cu-form-container'>
				<p className='cu-form-label'>Name:</p>
				<InputField
					inpType={'text'}
					placeholder={'First'}
					className={'cu-form-inp'}
					required={true}
					name='firstName'
					value={concern.firstName}
					onChange={handleChangeConcern}
				/>
				<InputField
					inpType={'text'}
					placeholder={'Last'}
					className={'cu-form-inp'}
					required={true}
					name='lastName'
					value={concern.lastName}
					onChange={handleChangeConcern}
				/>
			</div>
			<div className='cu-form-container'>
				<p className='cu-form-label'>Email:</p>
				<InputField
					inpType={'email'}
					placeholder={'example@email.com'}
					className={'cu-form-inp'}
					required={true}
					name='email'
					value={concern.email}
					onChange={handleChangeConcern}
				/>
			</div>

			<div className='cu-form-container'>
				<p className='cu-form-label'>Message:</p>
				<textarea
					placeholder='Type your message...'
					className='cu-form-inp text-area'
					required={true}
					name='concernMessage'
					value={concern.concernMessage}
					onChange={handleChangeConcern}
				/>
			</div>
			<div className='cu-form-container'>
				<Buttons
					text={'Submit'}
					onClick={handleSubmitConcern}
					className='cu-form-button'
				/>
			</div>
		</div>
	);
}

export default FormComponents;
