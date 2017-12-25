import { RECEIVE_DECKS, ADD_DECK } from '../actions';

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return JSON.parse(action.decks);
        case ADD_DECK:
            return {
                ...state,
                [action.newDeck]: {
                    title: action.newDeck,
                    questions: []
                }
            }
        default:
            return state;
    }
}

export default decks;