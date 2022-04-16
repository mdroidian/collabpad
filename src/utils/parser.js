export function dateParse(date) {
	const options = {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	};
	return new Intl.DateTimeFormat('en-US', options).format(date);
}
