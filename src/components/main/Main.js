import { useState } from 'react';
import AddThoughtInput from '../AddThoughtInput/AddThoughtInput';
import './Main.css';

const styles = {
	root: 'Main p-3',
	header: 'mb-5',
	headerSecondary: 'text-secondary'
};

function Main() {
	const [thoughts, setThoughts] = useState([]);
	console.log(thoughts);

	return (
		<div className={styles.root}>
			<h2 className={styles.header}>
				Today | <span className={styles.headerSecondary}>Previous Days</span>
			</h2>
			<AddThoughtInput setThoughts={setThoughts} />
		</div>
	);
}

export default Main;
