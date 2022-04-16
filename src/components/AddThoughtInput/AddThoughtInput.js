import PropTypes from 'prop-types';
import { useMemo } from 'react';
import clsx from 'clsx';
import './AddThoughtInput.css';

const styles = {
	root: 'AddThoughtInput row align-items-center gx-2',
	inputContainer: 'col-6 h-100',
	input: 'w-100 h-100 p-2 resize-none',
	buttonContainer: 'col-2 h-75',
	button: 'text-white p-2 h-100',
	buttonEnabled: 'bg-primary',
	buttonDisabled: 'bg-secondary'
};

export default function AddThoughtInput({ setThoughts }) {
	const displayButtons = useMemo(() => {
		const buttons = [
			{
				label: 'Add Thoughts',
				onClick: ({ target }) => {
					setThoughts((prevThoughts) => [...prevThoughts, target.value]);
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

		return buttons.map((button, idx) => (
			<div key={idx} className={styles.buttonContainer}>
				<button
					className={getButtonClassName(button.disabled)}
					onClick={button.onClick}
					disabled={button.disabled}>
					{button.label}
				</button>
			</div>
		));
	}, []);

	return (
		<section className={styles.root}>
			<div className={styles.inputContainer}>
				<textarea
					className={styles.input}
					id="thought"
					name="thought"
					placeholder="Add Thought"></textarea>
			</div>

			{displayButtons}
		</section>
	);
}

AddThoughtInput.propTypes = {
	setThoughts: PropTypes.func.isRequired
};
