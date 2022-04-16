import PropTypes from 'prop-types';
import { memo } from 'react';
import clsx from 'clsx';
import { dateParse } from '../../utils/parser';
import CustomButton from '../CustomButton/CustomButton';
import './ThoughtItem.css';

const styles = {
	root: 'ThoughtItem row align-items-center gx-2 mb-4',
	thoughtContainer: 'col-6 h-100 border p-2',
	buttonContainer: 'col-2 h-75',
	button: 'text-white p-2 h-100',
	buttonEnabled: 'bg-primary',
	buttonDisabled: 'bg-secondary',
	date: 'text-secondary text-end text-date'
};

function ThoughtItem({ thought }) {
	const buttons = [
		{
			label: 'Edit Thought',
			onClick: () => {},
			disabled: true
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
		<article className={styles.root}>
			<div className={styles.thoughtContainer}>
				<p>{thought.text}</p>
				<p className={styles.date}>{dateParse(thought.date)}</p>
			</div>
			{displayButtons}
		</article>
	);
}

ThoughtItem.propTypes = {
	thought: PropTypes.object.isRequired
};

export default memo(ThoughtItem);
