import PropTypes from 'prop-types';
import { memo, useRef } from 'react';
import clsx from 'clsx';
import uniqid from 'uniqid';
import './ThoughtInput.css';
import CustomButton from '../CustomButton/CustomButton';

const styles = {
	root: 'AddThoughtInput row align-items-center gx-2 mb-5',
	inputContainer: 'col-6 h-100',
	input: 'w-100 h-100 p-2 resize-none',
	buttonContainer: 'col-2 h-75',
	button: 'text-white p-2 h-100',
	buttonEnabled: 'bg-primary',
	buttonDisabled: 'bg-secondary'
};

function ThoughtInput({ setThoughts }) {
	const inputRef = useRef();

	const buttons = [
		{
			label: 'Add Thought',
			onClick: () => {
				setThoughts((prevThoughts) => [
					{
						id: uniqid(),
						text: inputRef.current.value,
						date: new Date(Date.now()),
						...prevThoughts
					}
				]);
				inputRef.current.value = '';
			},
			disabled: false
		},
		{
			label: 'Link Thought',
			onClick: () => {},
			disabled: true
		},
		{
			label: 'Tag Thought',
			onClick: () => {},
			disabled: true
		}
	];

	const getButtonClassName = (buttonDisabled) =>
		clsx(styles.button, buttonDisabled ? styles.buttonDisabled : styles.buttonEnabled);

	const displayButtons = buttons.map((button, idx) => (
		<CustomButton
			key={idx}
			onClick={button.onClick}
			rootStyles={styles.buttonContainer}
			buttonStyles={getButtonClassName(button.disabled)}
			disabled={button.disabled}>
			{button.label}
		</CustomButton>
	));

	return (
		<section className={styles.root}>
			<div className={styles.inputContainer}>
				<textarea
					ref={inputRef}
					className={styles.input}
					id="thought"
					name="thought"
					placeholder="Add Thought"></textarea>
			</div>

			{displayButtons}
		</section>
	);
}

ThoughtInput.propTypes = {
	setThoughts: PropTypes.func.isRequired
};

export default memo(ThoughtInput);
