import SQLite from 'react-native-sqlite-storage';

export const db = SQLite.openDatabase(
	{
		name: '1',
		location: 'default',
		createFromLocation: '1',
	},
	() => {},
	error => {
		console.log(error);
	},
);
