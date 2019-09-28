import React, {Component} from 'react';
import Card from './Card.js';
import {Platform, StyleSheet, Text, View} from 'react-native';

state = {
  cards: []
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const allNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const allSuites = ['Diamonds', "Clubs", "Hearts", "Spades"]

const deck = []

generateDeck = () => {
  allNumbers.forEach(cardNumber => {
    allSuites.forEach(cardSuit => {
      deck.push({number: cardNumber, suit: cardSuit})
    })
  })
}

componentDidMount(){
  this.generateDeck()
  this.setState({
    cards: deck
  })
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Black Jack!</Text>
        <Text style={styles.cards}><Card cards={this.state.cards}/></Text>
        <Text style={styles.cards}><Card cards={this.state.cards}/></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  cards: {
    textAlign: 'center',
    color: 'red',
    backgroundColor: 'white',
    // alignSelf: 'stretch',
    width: 50,
    height: 70,
    // marginBottom: 5,
  },
});
