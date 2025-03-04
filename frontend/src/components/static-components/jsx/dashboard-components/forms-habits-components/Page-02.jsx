import '../../../css/dashboard-components/form-habits-components/Page-02.css';
import InputField from '../../../../reusable-components/Input-Field';
import Buttons from '../../../../reusable-components/Buttons';

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

function FormPageTwo({ onNext, onPrev }) {
	const [frequency, setFrequency] = useState('');
	const [duration, setDuration] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [enableReminder, setEnableReminder] = useState(false);
	const [reminderTime, setReminderTime] = useState('');
	const [enableNotifications, setEnableNotifications] = useState(false);

	useEffect(() => {
		const savedFrequency = sessionStorage.getItem('frequency');
		const savedDuration = sessionStorage.getItem('duration');
		const savedStartDate = sessionStorage.getItem('startDate');
		const savedEndDate = sessionStorage.getItem('endDate');

		if (savedFrequency) setFrequency(savedFrequency);
		if (savedDuration) setDuration(savedDuration);
		if (savedStartDate) setStartDate(savedStartDate);
		if (savedEndDate) setEndDate(savedEndDate);
	}, []);

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		if (name === 'frequency') setFrequency(value);
		if (name === 'duration') setDuration(value);
		if (name === 'startDate') setStartDate(value);
		if (name === 'endDate') setEndDate(value);
		if (type === 'checkbox') {
			if (name === 'enableReminder') setEnableReminder(checked);
			if (name === 'enableNotifications') setEnableNotifications(checked);
		}
		if (type === 'time' && name === 'reminderTime') {
			setReminderTime(value);
		}
	};

	const handleNext = () => {
		sessionStorage.setItem('frequency', frequency);
		sessionStorage.setItem('duration', duration);
		sessionStorage.setItem('startDate', startDate);
		sessionStorage.setItem('endDate', endDate);
		sessionStorage.setItem('enableReminder', enableReminder);
		sessionStorage.setItem('reminderTime', reminderTime);
		sessionStorage.setItem('enableNotifications', enableNotifications);
		sessionStorage.setItem('enableReminder', JSON.stringify(enableReminder));
		sessionStorage.setItem('reminderTime', reminderTime);
		sessionStorage.setItem('enableNotifications', JSON.stringify(enableNotifications));

		toast.success('Progress Saved!');
		onNext();
	};

	const handlePrev = () => {
		sessionStorage.setItem('frequency', frequency);
		sessionStorage.setItem('duration', duration);
		sessionStorage.setItem('startDate', startDate);
		sessionStorage.setItem('endDate', endDate);
		sessionStorage.setItem('enableReminder', enableReminder);
		sessionStorage.setItem('reminderTime', reminderTime);
		sessionStorage.setItem('enableNotifications', enableNotifications);
		sessionStorage.setItem('enableReminder', JSON.stringify(enableReminder));
		sessionStorage.setItem('reminderTime', reminderTime);
		sessionStorage.setItem('enableNotifications', JSON.stringify(enableNotifications));

		toast.success('Progress Saved!');
		onPrev();
	};

	return (
		<div className='form-page-two-container'>
			<div className='form-page-two-content'>
				<div className='page-two-header'>
					<h1 className='header-two-text'>Frequency & Reminder</h1>
				</div>
				<div className='page-two-content'>
					<div className='form-fields wide'>
						<label>Frequency: </label>
						<InputField
							inpType={'select'}
							name='frequency'
							value={frequency}
							onChange={handleInputChange}
						>
							<option
								className='bg-[var(--text-hover)] font-semibold text-[var(--main-button)] rounded-none'
								value=''
								disabled
							>
								Select Frequency...
							</option>
							<option
								className='bg-[var(--bg-color)] text-[var(--text-color)] rounded-none'
								value='daily'
							>
								Daily
							</option>
							<option
								className='bg-[var(--bg-color)] text-[var(--text-color)] rounded-none'
								value='weekly'
							>
								Weekly
							</option>
							<option
								className='bg-[var(--bg-color)] text-[var(--text-color)] rounded-none'
								value='monthly'
							>
								Monthly
							</option>
							<option
								className='bg-[var(--bg-color)] text-[var(--text-color)] rounded-none'
								value='yearly'
							>
								Yearly
							</option>
						</InputField>
					</div>
					<div className='form-fields wide'>
						<label
							htmlFor='duration'
							className='font-semibold'
						>
							Duration (Minutes): <span className='text-gray-500'>(Optional)</span>
						</label>
						<InputField
							inpType='number'
							name='duration'
							value={duration}
							onChange={handleInputChange}
							placeholder='Enter duration in minutes'
							className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none'
						/>
					</div>
					<div className='form-fields'>
						<label
							htmlFor='startDate'
							className='font-semibold'
						>
							Start Date:
						</label>
						<InputField
							inpType='date'
							name='startDate'
							value={startDate}
							onChange={handleInputChange}
							min={new Date().toISOString().split('T')[0]}
							className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none'
						/>
					</div>
					<div className='form-fields'>
						<label
							htmlFor='endDate'
							className='font-semibold'
						>
							End Date: <span className='text-gray-500'>(Optional)</span>
						</label>
						<InputField
							inpType='date'
							name='endDate'
							value={endDate}
							onChange={handleInputChange}
							min={startDate}
							className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none'
						/>
					</div>
					<div className=' checkbox-cont'>
						<label htmlFor='enableReminder'>Enable Reminder:</label>
						<InputField
							inpType='checkbox'
							name='enableReminder'
							checked={enableReminder}
							onChange={handleInputChange}
							className='w-5 h-5'
						/>
					</div>

					{enableReminder && (
						<div className='form-fields'>
							<label htmlFor='reminderTime'>Reminder Time:</label>
							<InputField
								inpType='time'
								name='reminderTime'
								value={reminderTime}
								onChange={handleInputChange}
								className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none'
							/>
						</div>
					)}

					<div className=' wide checkbox-cont'>
						<label htmlFor='enableNotifications'>Enable Notifications:</label>
						<InputField
							inpType='checkbox'
							name='enableNotifications'
							checked={enableNotifications}
							onChange={handleInputChange}
							className='w-5 h-5'
						/>
					</div>

					<div className='form-fields wide btn-container'>
						<Buttons
							text='Back'
							onClick={handlePrev}
							className='back-btn'
						/>
						<Buttons
							text='Next'
							onClick={handleNext}
							className='next-btn'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

FormPageTwo.propTypes = {
	onNext: PropTypes.func.isRequired,
	onPrev: PropTypes.func.isRequired,
};

export default FormPageTwo;
