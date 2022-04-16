import uniqid from 'uniqid';

export const dummyThoughts = [
	{
		id: uniqid(),
		text: "Yes! I've done it again!",
		date: new Date(Date.UTC(2022, 2, 28, 15, 44, 0, 200))
	},
	{
		id: uniqid(),
		text: 'What has become of me?',
		date: new Date(Date.UTC(2022, 2, 14, 4, 58, 0, 200))
	},
	{
		id: uniqid(),
		text: 'This is coming from a place that no one has ever been before',
		date: new Date(Date.UTC(2022, 1, 20, 3, 0, 0, 200))
	}
];
