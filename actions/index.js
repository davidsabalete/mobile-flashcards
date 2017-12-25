import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';

export const DECK_STORAGE_KEY = 'mobile-flashcards::decks';
export const NOTIFICATION_KEY = 'mobile-flashcards::notifications';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export function getDecksFromStorage() {
    return function (dispatch) {
        AsyncStorage.getItem(DECK_STORAGE_KEY).then((response) => {
            return dispatch(getDecks(response));
        })
    }
}

export function addDeckToStorage(newDeck) {
    return function (dispatch) {
        AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({ [newDeck.newDeck]: { title: newDeck.newDeck, questions: [] } }))
            .then(dispatch(addDeck(newDeck)));
    }
}

export function addCardToStorage(deck, card) {
    return function (dispatch) {
        AsyncStorage.getItem(DECK_STORAGE_KEY).then(response => {
            const decks = JSON.parse(response);
            AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({ [deck]: { questions: decks[deck].questions.concat(card) } }))
                .then((response) => { dispatch(addCard(deck, card)); });
        })
    }
}

export const getDecks = (decks) => ({
    type: RECEIVE_DECKS,
    decks: decks
});

export const addDeck = (newDeck) => ({
    type: ADD_DECK,
    newDeck: newDeck.newDeck
});

export const addCard = (deck, card) => ({
    type: ADD_CARD,
    deck: deck,
    card: card
})

// Notifications

export function setNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then((status) => {
                        if (status.status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)
                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                { time: tomorrow.getTime() }
                            )
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        } else {
                            console.log(status)
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        })
}

export function clearNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification() {
    return {
        title: 'Take a quiz',
        body: "👋 Don't forget to take your quiz today!",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}