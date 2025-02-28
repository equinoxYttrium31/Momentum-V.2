import '../../../css/dashboard-components/form-habits-components/ProgressBar-component.css';
import PropTypes from 'prop-types';

function ProgressBarComponent({ currentStep, stepTitles }) {
	return (
		<div className='progress-bar-container'>
			{stepTitles.map((title, i) => (
				<div
					key={i}
					className={`step ${i <= currentStep ? 'active' : ''}`}
				>
					<div className='step-circle'>{i + 1}</div>
					<span className='step-title'>{title}</span>
					{i < stepTitles.length - 1 && <div className='step-line'></div>}
				</div>
			))}
		</div>
	);
}

ProgressBarComponent.propTypes = {
	currentStep: PropTypes.number.isRequired,
	stepTitles: PropTypes.array.isRequired,
};

export default ProgressBarComponent;
