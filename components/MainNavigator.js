import { StackNavigator } from 'react-navigation';
import Tabs from './Tabs';
import DeckListItem from './DeckListItem';
import { blue, purple } from '../utils/colors';

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    DeckListItem: {
        screen: DeckListItem,
        navigationOptions: {
            headerTintColor: blue,
            headerStyle: {
                backgroundColor: purple
            }
        }
    }
    // ,
    // AddCard: {
    //     screen: AddCard,
    //     navigationOptions: {
    //         headerTintColor: blue,
    //         headerStyle: {
    //             backgroundColor: purple
    //         }
    //     }
    // }
});

export default MainNavigator;