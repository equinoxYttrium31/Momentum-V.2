import '../../../css/dashboard-components/form-habits-components/Page-04.css';
import Buttons from '../../../../reusable-components/Buttons';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function FormPageFour({ onSave, onPrev }) {
	const [habitData, setHabitData] = useState({});

	useEffect(() => {
		const data = {
			habitTitle: sessionStorage.getItem('habitTitle') || '',
			description: sessionStorage.getItem('description') || '',
			tags: sessionStorage.getItem('tags') ? JSON.parse(sessionStorage.getItem('tags')) : [],
			frequency: sessionStorage.getItem('frequency') || '',
			duration: sessionStorage.getItem('duration') || '',
			startDate: sessionStorage.getItem('startDate') || '',
			endDate: sessionStorage.getItem('endDate') || '',
			enableReminder: sessionStorage.getItem('enableReminder') === 'true',
			reminderTime: sessionStorage.getItem('reminderTime') || '',
			enableNotifications: sessionStorage.getItem('enableNotifications') === 'true',
			goalType: sessionStorage.getItem('goalType') || '',
			goalValue: sessionStorage.getItem('goalValue') || '',
		};
		setHabitData(data);
	}, []);

	return (
		<div className='review-container'>
			<h1 className='review-header'>Review Your Habit</h1>
			<div className='review-content'>
				<div className='review-card'>
					<h2>Habit Details</h2>
					<p>Title: {habitData.habitTitle}</p>
					<p>Description: {habitData.description}</p>
					<p>
						Tags:
						<span className='tags'>
							{' '}
							{Array.isArray(habitData.tags) && habitData.tags.length > 0
								? habitData.tags.join(', ')
								: 'None'}
						</span>
					</p>
				</div>

				<div className='review-card'>
					<h2>Tracking & Frequency</h2>
					<p>Frequency: {habitData.frequency}</p>
					<p>Duration: {habitData.duration} minutes</p>
					<p>Start Date: {habitData.startDate}</p>
					<p>End Date: {habitData.endDate || 'Not Set'}</p>
				</div>

				<div className='review-card'>
					<h2>Reminders & Notifications</h2>
					<p>Enable Reminder: {habitData.enableReminder ? 'Yes' : 'No'}</p>
					<p>Reminder Time: {habitData.reminderTime || 'Not Set'}</p>
					<p>Enable Notifications: {habitData.enableNotifications ? 'Yes' : 'No'}</p>
				</div>

				<div className='review-card'>
					<h2>Goals & Milestones</h2>
					<p>Goal Type: {habitData.goalType || 'Not Set'}</p>
					<p>Goal Value: {habitData.goalValue || 'Not Set'}</p>
				</div>
			</div>

			<div className='button-group'>
				<Buttons
					text='Back'
					onClick={onPrev}
					className='back-btn'
				/>
				<Buttons
					text='Save Habit'
					onClick={onSave}
					className='next-btn'
				/>
			</div>
		</div>
	);
}

FormPageFour.propTypes = {
	onSave: PropTypes.func.isRequired,
	onPrev: PropTypes.func.isRequired,
};

export default FormPageFour;
