import PropTypes from 'prop-types';

const Buttons = ({ text, onClick = () => {}, className = '' }) => {
	return (
		<button
			onClick={onClick}
			className={`bg-[var(--main-button)] text-[#d1f8ef] p-2 rounded ${className}`}
		>
			{text}
		</button>
	);
};

Buttons.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	className: PropTypes.string,
};

export default Buttons;
