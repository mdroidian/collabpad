import PropTypes from 'prop-types';
import { useMemo, useRef } from 'react';
import clsx from 'clsx';
import './ThoughtInput.css';

const styles = {
	root: 'AddThoughtInput row align-items-center gx-2 mb-5',
	inputContainer: 'col-6 h-100',
	input: 'w-100 h-100 p-2 resize-none',
	buttonContainer: 'col-2 h-75',
	button: 'text-white p-2 h-100',
	buttonEnabled: 'bg-primary',
	buttonDisabled: 'bg-secondary'
};

export default function ThoughtInput({ setThoughts }) {
	const inputRef = useRef();

	const displayButtons = useMemo(() => {
		const buttons = [
			{
				label: 'Add Thoughts',
				onClick: () => {
					setThoughts((prevThoughts) => [
						{
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

		return buttons.map((button, idx) => (
			<article key={idx} className={styles.buttonContainer}>
				<button
					className={getButtonClassName(button.disabled)}
					onClick={button.onClick}
					disabled={button.disabled}>
					{button.label}
				</button>
			</article>
		));
	}, [setThoughts]);

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
