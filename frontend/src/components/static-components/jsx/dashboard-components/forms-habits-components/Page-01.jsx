import '../../../css/dashboard-components/form-habits-components/Page-01.css';
import InputField from '../../../../reusable-components/Input-Field';
import Buttons from '../../../../reusable-components/Buttons';

import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

function FormPageOne({ onNext }) {
	const [tags, setTags] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [habitTitle, setHabitTitle] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		const savedHabitTitle = sessionStorage.getItem('habitTitle');
		const savedDescription = sessionStorage.getItem('description');
		const savedTags = sessionStorage.getItem('tags');

		if (savedHabitTitle) setHabitTitle(savedHabitTitle);
		if (savedDescription) setDescription(savedDescription);
		if (savedTags) setTags(JSON.parse(savedTags));
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		if (name === 'habitTitle') {
			setHabitTitle(value);
		} else if (name === 'description') {
			setDescription(value);
		} else if (name === 'tags') {
			setInputValue(value);
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' || e.key === ',') {
			e.preventDefault();
			if (inputValue.trim() && !tags.includes(inputValue.trim())) {
				setTags([...tags, `#${inputValue.trim()}`]);
				setInputValue('');
			}
		}
	};

	const handleDeleteTag = (tagToDelete) => {
		setTags(tags.filter((tag) => tag !== tagToDelete));
	};

	const handleNext = () => {
		sessionStorage.setItem('habitTitle', habitTitle);
		sessionStorage.setItem('description', description);
		sessionStorage.setItem('tags', JSON.stringify(tags));

		toast.success('Progress Saved!');
		onNext();
	};

	return (
		<div className='form-page-one-container'>
			<div className='form-page-one-content'>
				<div className='form-header'>
					<h1 className='header-form-text'>Basic Habit Details</h1>
				</div>
				<div className='form-contents'>
					<div className='form-fields'>
						<label htmlFor=''>Habit Title:</label>
						<InputField
							inpType={'text'}
							value={habitTitle}
							name={'habitTitle'}
							placeholder={'e.g., "Morning Exercise"'}
							onChange={handleInputChange}
						/>
					</div>
					<div className='form-fields'>
						<label htmlFor=''>Description:</label>
						<InputField
							inpType={'textarea'}
							value={description}
							name={'description'}
							className='text-area-page01'
							placeholder={'e.g., why, how, and when you want to achieve it'}
							onChange={handleInputChange}
						/>
					</div>
					<div className='form-fields'>
						<label htmlFor=''>Category:</label>
						<InputField
							inpType={'text'}
							value={inputValue}
							name={'tags'}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
							placeholder='Add tags'
						/>
					</div>

					<div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
						{tags.map((tag, index) => (
							<div
								key={index}
								style={{
									padding: '5px 10px',
									margin: '5px',
									borderRadius: '15px',
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<span>{tag}</span>
								<button
									onClick={() => handleDeleteTag(tag)}
									style={{
										background: 'transparent',
										border: 'none',
										marginLeft: '5px',
										cursor: 'pointer',
									}}
								>
									×
								</button>
							</div>
						))}
					</div>
					<div className='form-button-container'>
						<Buttons
							text={'Next'}
							onClick={handleNext}
							className={'next-btn'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

FormPageOne.propTypes = {
	onNext: PropTypes.func.isRequired,
};

export default FormPageOne;
