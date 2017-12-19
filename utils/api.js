import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = 'mobile-flashcards';

const initData = {
    German: {
		title: 'German',
		questions: [
			{
				question: 'Wie geht\'s dir?',
				answer: 'How are you?',
			},
			{
				question: 'Entschuldigung',
				answer: 'Excuse me',
			},
		],
	},
	Catalan: {
		title: 'Catalan',
		questions: [
			{
				question: 'Vinga, tots junts!',
				answer:
					'Come on! All together!',
			},
		],
	},
}

export const setupData = () => {
	console.log('setupData()');
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initData));
	return initData;
}

export const fetchDecks = () => {
	console.log('fetchDecks()');
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
		console.log(`results: ${results}`);
        return results === null ? setupData() : JSON.parse(results);
    });
}