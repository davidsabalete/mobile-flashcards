import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { blue, green, red, white, yellow, gray, purple } from '../utils/colors';
import Button from './Button';
import { clearNotification, setNotification } from "../actions";

class QuizView extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.deck.title + ' Quiz'
    });

    state = {
        totalCards: 0,
        currentCard: 0,
        totalCorrect: 0,
        showAnswer: false,
        quizCompleted: false
    }

    componentDidMount() {
        const { deck } = this.props;
        this.setState((prevState) => ({
            totalCards: deck.questions.length
        }));
    }

    showAnswer = () => {
        this.setState((prevState) => ({
            showAnswer: !prevState.showAnswer
        }));
    }

    handleCorrectPressed = () => {
        this.setState((prevState) => ({
            totalCorrect: prevState.totalCorrect + 1,
            currentCard: prevState.currentCard + 1
        }));
        this.endQuiz();
    }

    handleIncorrectPressed = () => {
        if (this.state.totalCorrect >= 0) {
            this.setState((prevState) => ({
                currentCard: prevState.currentCard + 1
            }));
        }
        this.endQuiz();
    }

    endQuiz = () => {
        const { currentCard, totalCards } = this.state;
        if ((currentCard + 1) === totalCards) {
            this.setState((prevState) => ({
                quizCompleted: true,
                currentCard: 0
            }));
            clearNotification().then(setNotification);
        }
    }

    render() {
        const { totalCards, currentCard, totalCorrect, showAnswer, quizCompleted } = this.state;
        const { deck, navigation } = this.props;

        return (
            <View style={styles.container}>
                {quizCompleted
                    ?
                    <View>
                        <Text style={styles.quizText}>Quiz is over!</Text>
                        <Text style={styles.scoreText}>Your Score: {totalCorrect + ' / ' + totalCards} </Text>
                        <Button title="Back to Decks"
                            textColor={{ color: yellow }}
                            style={styles.btn}
                            onPress={() => navigation.navigate('Home')} />
                        <Button title="Manage Deck"
                            textColor={{ color: yellow }}
                            style={styles.btn}
                            onPress={() => navigation.navigate('DeckDetail', { deck: deck })} />
                        <Button title="Restart Quiz"
                            textColor={{ color: yellow }}
                            style={styles.btn}
                            onPress={() => navigation.navigate('Quiz', { deck: deck })} />
                    </View>
                    :
                    <View>
                        <Text style={{ color: gray, padding: 10, fontSize: 20 }}>
                            {'Card #' + (currentCard + 1) + ' of ' + totalCards + ' cards.'}
                        </Text>
                        {showAnswer
                            ?
                            <View>
                                <Text style={styles.questionText}>{deck.questions[currentCard].answer}</Text>
                                <TouchableOpacity onPress={this.showAnswer}>
                                    <Text style={styles.answerText}>Question</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <Text style={styles.questionText}>{deck.questions[currentCard].question}</Text>
                                <TouchableOpacity onPress={this.showAnswer}>
                                    <Text style={styles.answerText}>Answer</Text>
                                </TouchableOpacity>
                            </View>
                        }

                        <Button title="Correct"
                            style={{ backgroundColor: green, marginBottom: 20 }}
                            onPress={this.handleCorrectPressed}
                        />
                        <Button title="Incorrect"
                            style={{ backgroundColor: red, marginBottom: 20 }}
                            onPress={this.handleIncorrectPressed}
                        />
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        padding: 20
    },
    btn: {
        marginTop: 20
    },
    questionText: {
        fontSize: 30,
        padding: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    answerText: {
        fontSize: 24,
        color: red,
        padding: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    quizText: {
        fontSize: 32,
        padding: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    scoreText: {
        fontSize: 24,
        padding: 20,
        marginBottom: 20,
        textAlign: 'center'
    }
})

const mapStateToProps = (state, ownProps) => {
    const { deck } = ownProps.navigation.state.params;
    return {
        deck: state[deck.title]
    }
}

export default connect(mapStateToProps)(QuizView);