import PropTypes from 'prop-types';

const InputField = ({
	inpType,
	placeholder,
	className = '',
	required = false,
	value = '',
	onChange,
	name,
	onKeyDown,
	children,
	min,
}) => {
	// Conditionally render for different input types (textarea, select, etc.)
	if (inpType === 'textarea') {
		return (
			<textarea
				placeholder={placeholder}
				className={`bg-transparent border outline-none p-2 rounded ${className}`}
				required={required}
				value={value}
				onChange={onChange}
				name={name}
			/>
		);
	}

	if (inpType === 'select') {
		return (
			<select
				className={` border outline-none p-2 rounded ${className}`}
				required={required}
				value={value}
				onChange={onChange}
				name={name}
			>
				{children}
			</select>
		);
	}

	// Default input field for text, number, etc.
	return (
		<input
			type={inpType}
			placeholder={placeholder}
			className={`bg-transparent border outline-none p-2 rounded ${className}`}
			required={required}
			value={value}
			onChange={onChange}
			name={name}
			onKeyDown={onKeyDown}
			min={min}
		/>
	);
};

InputField.propTypes = {
	inpType: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	className: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	onKeyDown: PropTypes.func.isRequired,
	children: PropTypes.node,
};

export default InputField;
