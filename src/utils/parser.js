export function dateParse(date) {
	const options = { month: 'short', day: 'numeric', year: 'numeric' };
	return new Intl.DateTimeFormat('en-US', options).format(date);
}
