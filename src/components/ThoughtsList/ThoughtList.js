import PropTypes from 'prop-types';

export default function ThoughtList({ thoughts }) {
	return (
		<section>
			<h2>Thoughts</h2>
		</section>
	);
}

ThoughtList.propTypes = {
	thoughts: PropTypes.array
};
