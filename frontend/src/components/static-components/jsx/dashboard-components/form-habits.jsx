import '../../css/dashboard-components/form-habits.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
//Parent Component: Forms

//Child Components:
import ProgressBarComponent from './forms-habits-components/ProgressBar-component';
import FormPageOne from './forms-habits-components/Page-01';
import FormPageTwo from './forms-habits-components/Page-02';
import FormPageThree from './forms-habits-components/Page-03';
import FormPageFour from './forms-habits-components/Page-04';

const steps = [
	'Basic Habit Details',
	'Frequency & Reminders',
	'Goals, Milestones & Habit Log',
	'Review & Save',
];

function FormHabits({ onClose }) {
	const [currentStep, setCurrentStep] = useState(0);

	const APIurl = import.meta.env.VITE_AXIOS_URL;

	const description = sessionStorage.getItem('description');
	const duration = sessionStorage.getItem('duration');
	const enableInsights = sessionStorage.getItem('enableInsights') === 'true'; // Convert string back to boolean
	const enableMilestones = sessionStorage.getItem('enableMilestones') === 'true';
	const enableNotifications = sessionStorage.getItem('enableNotifications') === 'true';
	const enableReminder = sessionStorage.getItem('enableReminder') === 'true';
	const enableSuggestions = sessionStorage.getItem('enableSuggestions') === 'true';
	const endDate = sessionStorage.getItem('endDate');
	const frequency = sessionStorage.getItem('frequency');
	const goalType = sessionStorage.getItem('goalType');
	const goalValue = parseInt(sessionStorage.getItem('goalValue'), 10);
	const habitLog = JSON.parse(sessionStorage.getItem('habitLog')); // Parsing the habitLog array
	const habitTitle = sessionStorage.getItem('habitTitle');
	const reminderTime = sessionStorage.getItem('reminderTime');
	const startDate = sessionStorage.getItem('startDate');
	const tags = JSON.parse(sessionStorage.getItem('tags'));

	const HandleSave = async () => {
		try {
			const habit = {
				description,
				duration,
				enableInsights,
				enableMilestones,
				enableNotifications,
				enableReminder,
				enableSuggestions,
				endDate,
				frequency,
				goalType,
				goalValue,
				habitLog,
				habitTitle,
				reminderTime,
				startDate,
				tags,
			};

			const response = await axios.post(`${APIurl}/create-habit`, habit, {
				withCredentials: true,
				body: JSON.stringify(habit),
			});

			if (response.status === 201) {
				toast.success('Habit saved successfully!');
				console.log('Habit saved successfully:', response.data);

				sessionStorage.clear();
				setCurrentStep(0);
			} else {
				toast.error('Failed to save habit');
				console.error('Failed to save habit. Server responded with:', response.status);
			}
		} catch (error) {
			console.error('Error saving habit!', error);
		}
	};

	useEffect(() => {
		const savedStep = sessionStorage.getItem('currentStep');
		if (savedStep) {
			setCurrentStep(parseInt(savedStep, 10));
		}
	}, []);

	const nextStep = () => {
		setCurrentStep((prev) => {
			const nextStep = Math.min(prev + 1, steps.length - 1);
			sessionStorage.setItem('currentStep', nextStep);
			return nextStep;
		});
	};
	const prevStep = () => {
		setCurrentStep((prev) => {
			const prevStep = Math.max(prev - 1, 0);
			sessionStorage.setItem('currentStep', prevStep);
			return prevStep;
		});
	};

	// Render current page dynamically
	const renderStep = () => {
		switch (currentStep) {
			case 0:
				return <FormPageOne onNext={nextStep} />;
			case 1:
				return (
					<FormPageTwo
						onNext={nextStep}
						onPrev={prevStep}
					/>
				);
			case 2:
				return (
					<FormPageThree
						onNext={nextStep}
						onPrev={prevStep}
					/>
				);
			case 3:
				return (
					<FormPageFour
						onSave={HandleSave}
						onPrev={prevStep}
					/>
				);
			default:
				return <FormPageOne onNext={nextStep} />;
		}
	};

	return (
		<div className='form-habits-container'>
			<div className='form-habits-header'>
				<button
					className='back-button'
					onClick={onClose}
				>
					<svg
						fill='currentColor'
						height='32px'
						width='32px'
						version='1.1'
						id='Capa_1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 219.151 219.151'
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
							<g>
								<path d='M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575 C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575 c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z'></path>{' '}
								<path d='M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008 c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825 c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628 c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z'></path>{' '}
							</g>
						</g>
					</svg>
				</button>
				<h2 className='form-habits-header-text'>Add Habit</h2>
			</div>

			<div className='form-main-content'>
				<ProgressBarComponent
					currentStep={currentStep}
					totalSteps={steps.length}
					stepTitles={steps}
				/>

				{/* Render Step Form */}
				<div className='form-content'>{renderStep()}</div>
			</div>
		</div>
	);
}

FormHabits.propTypes = {
	onClose: PropTypes.func,
};

export default FormHabits;
