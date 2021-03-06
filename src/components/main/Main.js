import { useState } from 'react';
import ThoughtInput from '../ThoughtInput/ThoughtInput';
import ThoughtList from '../ThoughtsList/ThoughtList';
import { dummyThoughts } from '../../dummy-data/dummy-thoughts';
import './Main.css';

const styles = {
	root: 'Main p-3',
	header: 'mb-5',
	headerSecondary: 'text-secondary'
};

function Main() {
	const [thoughts, setThoughts] = useState(dummyThoughts);
	return (
		<div className={styles.root}>
			<h2 className={styles.header}>
				Today | <span className={styles.headerSecondary}>Previous Days</span>
			</h2>
			<ThoughtInput setThoughts={setThoughts} />
			<ThoughtList thoughts={thoughts} />
		</div>
	);
}

export default Main;
