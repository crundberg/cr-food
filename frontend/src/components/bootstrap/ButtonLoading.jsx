import React from 'react';
import PropTypes from 'prop-types';

function ButtonLoading({
	text,
	textLoading,
	textSucceeded,
	isLoading,
	didSucceeded,
}) {
	let buttonText = text;
	let disable = false;
	let spinner = '';

	if (isLoading) {
		buttonText = ` ${textLoading}`;
		disable = true;
		spinner = (
			<span
				className="spinner-border spinner-border-sm"
				role="status"
				aria-hidden="true"
			/>
		);
	}

	if (didSucceeded) {
		buttonText = textSucceeded;
		disable = true;
		spinner = '';
	}

	return (
		<button type="submit" className="btn btn-secondary" disabled={disable}>
			{spinner}
			{buttonText}
		</button>
	);
}

ButtonLoading.defaultProps = {
	text: 'Save',
	textLoading: 'Saving...',
	textSucceeded: 'Saved!',
};

ButtonLoading.propTypes = {
	text: PropTypes.string,
	textLoading: PropTypes.string,
	textSucceeded: PropTypes.string,
	isLoading: PropTypes.bool.isRequired,
	didSucceeded: PropTypes.bool.isRequired,
};

export default ButtonLoading;
