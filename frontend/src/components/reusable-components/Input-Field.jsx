import PropTypes from 'prop-types';

const InputField = ({ inpType, placeholder, className = '', required = false }) => {
	return (
		<input
			type={inpType}
			placeholder={placeholder}
			className={`bg-transparent border outline-none p-2 rounded ${className}`}
			required={required}
		></input>
	);
};

InputField.propTypes = {
	inpType: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	className: PropTypes.string,
	required: PropTypes.bool,
};

export default InputField;
