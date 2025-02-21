import PropTypes from 'prop-types';

const InputField = ({
	inpType,
	placeholder,
	className = '',
	required = false,
	value,
	onChange,
	name,
}) => {
	return (
		<input
			type={inpType}
			placeholder={placeholder}
			className={`bg-transparent border outline-none p-2 rounded ${className}`}
			required={required}
			value={value}
			onChange={onChange}
			name={name}
		></input>
	);
};

InputField.propTypes = {
	inpType: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	className: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
};

export default InputField;
