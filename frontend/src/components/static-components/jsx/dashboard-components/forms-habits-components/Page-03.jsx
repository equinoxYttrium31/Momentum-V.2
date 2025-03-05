import '../../../css/dashboard-components/form-habits-components/Page-03.css';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import InputField from '../../../../reusable-components/Input-Field';
import Buttons from '../../../../reusable-components/Buttons';
import { toast } from 'react-hot-toast';

function FormPageThree({ onNext, onPrev }) {
	const [enableMilestones, setEnableMilestones] = useState(false);
	const [goalType, setGoalType] = useState('');
	const [goalValue, setGoalValue] = useState('');

	const [habitLog, setHabitLog] = useState([]);
	const [newLogEntry, setNewLogEntry] = useState('');
	const [enableSuggestions, setEnableSuggestions] = useState(false);
	const [enableInsights, setEnableInsights] = useState(false);

	// Load session storage values
	useEffect(() => {
		setEnableMilestones(sessionStorage.getItem('enableMilestones') === 'true');
		setGoalType(sessionStorage.getItem('goalType') || '');
		setGoalValue(sessionStorage.getItem('goalValue') || '');

		const savedLogs = JSON.parse(sessionStorage.getItem('habitLog')) || [];
		setHabitLog(savedLogs);

		setEnableSuggestions(sessionStorage.getItem('enableSuggestions') === 'true');
		setEnableInsights(sessionStorage.getItem('enableInsights') === 'true');
	}, []);

	// Handle input change
	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		if (type === 'checkbox') {
			if (name === 'enableMilestones') setEnableMilestones(checked);
			if (name === 'enableSuggestions') setEnableSuggestions(checked);
			if (name === 'enableInsights') setEnableInsights(checked);
		} else if (name === 'goalType') {
			setGoalType(value);
		} else if (name === 'goalValue') {
			setGoalValue(value);
		} else if (name === 'newLogEntry') {
			setNewLogEntry(value);
		}
	};

	// Add new habit log entry
	const addLogEntry = () => {
		if (!newLogEntry.trim()) return;
		const updatedLogs = [...habitLog, newLogEntry];
		setHabitLog(updatedLogs);
		sessionStorage.setItem('habitLog', JSON.stringify(updatedLogs));
		setNewLogEntry('');
	};

	// Save progress & move forward
	const handleNext = () => {
		sessionStorage.setItem('enableMilestones', enableMilestones);
		sessionStorage.setItem('goalType', goalType);
		sessionStorage.setItem('goalValue', goalValue);
		sessionStorage.setItem('habitLog', JSON.stringify(habitLog));
		sessionStorage.setItem('enableSuggestions', enableSuggestions);
		sessionStorage.setItem('enableInsights', enableInsights);

		toast.success('Progress Saved!');
		onNext();
	};

	// Save progress & go back
	const handlePrev = () => {
		sessionStorage.setItem('enableMilestones', enableMilestones);
		sessionStorage.setItem('goalType', goalType);
		sessionStorage.setItem('goalValue', goalValue);
		sessionStorage.setItem('habitLog', JSON.stringify(habitLog));
		sessionStorage.setItem('enableSuggestions', enableSuggestions);
		sessionStorage.setItem('enableInsights', enableInsights);

		toast.success('Progress Saved!');
		onPrev();
	};

	return (
		<div className='form-page-three-container'>
			<div className='form-page-three-content'>
				<div className='page-header'>
					<h1 className='header-text'>Goals, Milestones & Habit Log</h1>
				</div>

				<div className='page-content'>
					{/* Enable Milestones */}
					<div className='form-fields wide'>
						<label className='font-semibold'>
							<input
								type='checkbox'
								name='enableMilestones'
								checked={enableMilestones}
								onChange={handleInputChange}
							/>
							<span className='ml-2'>
								Enable Milestones <span className='text-gray-500'>(Optional)</span>
							</span>
						</label>
					</div>

					{/* Goal Type & Value */}
					{enableMilestones && (
						<>
							<div className='form-fields wide'>
								<label className='font-semibold'>Goal Type:</label>
								<InputField
									inpType='select'
									name='goalType'
									value={goalType}
									onChange={handleInputChange}
								>
									<option
										value=''
										disabled
										className='bg-[var(--text-hover)] font-semibold text-[var(--main-button)] rounded-none'
									>
										Select Goal Type...
									</option>
									<option
										value='time-based'
										className='bg-[var(--bg-color)] text-[var(--text-color)] rounded-none'
									>
										Time-based
									</option>
									<option
										value='streak-based'
										className='bg-[var(--bg-color)] text-[var(--text-color)] rounded-none'
									>
										Streak-based
									</option>
								</InputField>
							</div>

							<div className='form-fields wide'>
								<label className='font-semibold'>Goal Value:</label>
								<InputField
									inpType='number'
									name='goalValue'
									value={goalValue}
									onChange={handleInputChange}
									placeholder='Enter goal value (e.g., 30 days)'
									min={1}
								/>
							</div>
						</>
					)}

					{/* Habit Log (Read-Only) */}
					<div className='form-fields wide'>
						<h2 className='sub-header'>Habit Log</h2>
						<ul className='habit-log-list'>
							{habitLog.length > 0 ? (
								habitLog.map((log, index) => <li key={index}>{log}</li>)
							) : (
								<p className='text-gray-500'>No log entries yet.</p>
							)}
						</ul>
					</div>

					{/* Add New Log Entry */}
					<div className='form-fields wide'>
						<label className='font-semibold'>Add New Log Entry:</label>
						<InputField
							inpType='text'
							name='newLogEntry'
							value={newLogEntry}
							onChange={handleInputChange}
							placeholder='E.g., Completed my 30-minute workout today!'
						/>
						<Buttons
							text='Add Log'
							onClick={addLogEntry}
							className='add-log-btn'
						/>
					</div>

					{/* Habit Suggestions */}
					<div className='form-fields'>
						<label className='font-semibold'>
							<input
								type='checkbox'
								name='enableSuggestions'
								checked={enableSuggestions}
								onChange={handleInputChange}
							/>
							<span className='ml-2'>
								Enable Habit Suggestions <span className='text-gray-500'>(Optional)</span>
							</span>
						</label>
					</div>

					{/* Habit Insights */}
					<div className='form-fields'>
						<label className='font-semibold'>
							<input
								type='checkbox'
								name='enableInsights'
								checked={enableInsights}
								onChange={handleInputChange}
							/>
							<span className='ml-2'>
								Enable Habit Insights <span className='text-gray-500'>(Optional)</span>
							</span>
						</label>
					</div>

					{/* Navigation Buttons */}
					<div className='form-fields btn-container wide'>
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

FormPageThree.propTypes = {
	onNext: PropTypes.func.isRequired,
	onPrev: PropTypes.func.isRequired,
};

export default FormPageThree;
