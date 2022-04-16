import PropTypes from 'prop-types';
import { memo } from 'react';
import ThoughtItem from '../ThoughtItem/ThoughtItem';

function ThoughtList({ thoughts }) {
	const displayThoughts = thoughts.map((thought) => (
		<ThoughtItem key={thought.id} thought={thought} />
	));

	return (
		<section>
			<h2>Thoughts</h2>
			<div>{displayThoughts}</div>
		</section>
	);
}

ThoughtList.propTypes = {
	thoughts: PropTypes.array
};

export default memo(ThoughtList);
