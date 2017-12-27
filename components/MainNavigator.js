import { StackNavigator } from 'react-navigation';
import Tabs from './Tabs';
import { blue, purple } from '../utils/colors';
import DeckListView from './DeckListView';
import DeckDetailView from './DeckDetailView';
import AddCardView from './AddCardView';
import QuizView from './QuizView';

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    DeckList: {
        screen: DeckListView,
        navigationOptions: {
            headerTintColor: blue,
            headerStyle: {
                backgroundColor: purple
            }
        }
    },
    DeckDetail: {
        screen: DeckDetailView,
        navigationOptions: {
            headerTintColor: blue,
            headerStyle: {
                backgroundColor: purple
            }
        }
    },
    AddCard: {
        screen: AddCardView,
        navigationOptions: {
            headerTintColor: blue,
            headerStyle: {
                backgroundColor: purple
            }
        }
    },
    Quiz: {
        screen: QuizView,
        navigationOptions: {
          headerTintColor: blue,
          headerStyle: {
            backgroundColor: purple
          }
        }
      }
});

export default MainNavigator;