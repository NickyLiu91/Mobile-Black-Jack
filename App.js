import React, {Component} from 'react';
import Hand from './Hand.js';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const allNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const allSuites = ['Diamonds', "Clubs", "Hearts", "Spades"]

const deck = []

export default class App extends Component {

  state = {
    cards: [],
    hand: [{}, {}, {}, {}, {}]
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
    }, () => {
      this.dealCard()
    })
  }

  dealCard = () => {
    if this.state.hand.some(obj => obj == {}) {
      let copyHand = this.state.hand
      let selectedCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length) + 1]
      let replacementIndex = this.state.hand.findIndex(obj => obj == {})
      copyHand[replacementIndex] = selectedCard
      this.setState({
        cards: this.state.cards.filter(obj => obj.number != selectedCard.number || obj.suit != selectedCard.suit),
        hand: copyHand
      })
    }
  }

  // deal = () => {
  //   let selectedCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length) + 1]
  //   this.setState({
  //     card: {number: 1, suit: 'Clubs'}
  //   }, () => {console.log(this.state.cards)})
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Black Jack!</Text>
        <Button background='black' color='gold' title="DEAL" onPress={this.dealCard}/>
        <Hand hand={this.state.hand}/>
        // <Text style={styles.cards}><Card card={this.state.card}/></Text>
        // <Text style={styles.cards}><Card card={this.state.card}/></Text>
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
  buttons: {
    backgroundColor: 'white',
    color: 'black'
  }
});
