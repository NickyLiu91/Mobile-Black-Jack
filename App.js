import React, {Component} from 'react';
import Card from './Card.js';
import {Platform, StyleSheet, Text, View} from 'react-native';

const allNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const allSuites = ['Diamonds', "Clubs", "Hearts", "Spades"]

const deck = []

export default class App extends Component {

  state = {
    cards: [],
    card: {number: 1, suit: 'Clubs'}
  }

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

  dealCard = () => {
    let selectedCard = this.state.cards(Math.floor(Math.random() * this.state.cards.length) + 1)
    this.setState({
      cards: this.state.cards.filter(obj => {obj.number == selectedCard.number && obj.suit == selectedCard.suit}),
      card: selectedCard
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Black Jack!</Text>
        <Text style={styles.cards}><Card card={this.state.card}/></Text>
        <Text style={styles.cards}><Card card={this.state.card}/></Text>
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
