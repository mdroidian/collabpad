import PropTypes from 'prop-types';

export default function ThoughtItem({ thought }) {
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

	return <article></article>;
}

ThoughtItem.propTypes = {
	thought: PropTypes.object.isRequired
};
