import PropTypes from 'prop-types';

export default function CustomButton({ children, onClick, rootStyles, buttonStyles, disabled }) {
	return (
		<div className={rootStyles}>
			<button className={buttonStyles} onClick={onClick} disabled={disabled}>
				{children}
			</button>
		</div>
	);
}

CustomButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	rootStyles: PropTypes.string,
	buttonStyles: PropTypes.string,
	disabled: PropTypes.bool
};

CustomButton.defaultProps = {
	rootStyles: '',
	buttonStyles: '',
	disabled: false
};
