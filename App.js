import React, {Component} from 'react';
import Hand from './Hand.js';
import ComputerHand from './ComputerHand.js';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const allNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const allSuites = ['Diamonds', "Clubs", "Hearts", "Spades"]

const deck = []

export default class App extends Component {

  state = {
    cards: [],
    hand: [{}, {}, {}, {}, {}],
    computerHand: [{}, {}, {}, {}, {}],
    end: ''
  }

  generateDeck = () => {
    allNumbers.forEach(cardNumber => {
      allSuites.forEach(cardSuit => {
        if (cardNumber == 'A') {
          deck.push({number: cardNumber, suit: cardSuit, value: 11})
        } else if (cardNumber == 'J' || cardNumber == 'Q' || cardNumber == 'K') {
          deck.push({number: cardNumber, suit: cardSuit, value: 10})
        } else {
          deck.push({number: cardNumber, suit: cardSuit, value: parseInt(cardNumber)})
        }
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
    let handValue = 0
    this.state.hand.forEach(obj => {
      if (Object.keys(obj).length != 0) {
        handValue += obj.value
      }
    })

    if (this.state.hand.some(obj => Object.keys(obj).length == 0)) {
      let copyHand = this.state.hand
      let selectedCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length) + 1]
      let replacementIndex = this.state.hand.findIndex(obj => Object.keys(obj).length == 0)
      copyHand[replacementIndex] = selectedCard

      if (handValue + selectedCard.value > 21) {
        this.lose()
      } else {
        this.setState({
          cards: this.state.cards.filter(obj => obj.number != selectedCard.number || obj.suit != selectedCard.suit),
          hand: copyHand
        })
      }
    }
  }

  dealComputerCard = () => {
    if (this.state.computerHand.some(obj => Object.keys(obj).length == 0)) {
      let copyHand = this.state.computerHand
      let selectedCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length) + 1]
      let replacementIndex = this.state.computerHand.findIndex(obj => Object.keys(obj).length == 0)
      copyHand[replacementIndex] = selectedCard
      this.setState({
        cards: this.state.cards.filter(obj => obj.number != selectedCard.number || obj.suit != selectedCard.suit),
        computerHand: copyHand
      }, () => {
        let handValue = 0
        this.state.computerHand.forEach(obj => {
          if (Object.keys(obj).length != 0) {
            handValue += obj.value
          }
        })
        if (handValue > 21) {
          this.win()
        } else if (this.state.computerHand.every(obj => {Object.keys(obj).length != 0})) {
          this.lose()
        }
      })
    }
  }

  holdHand = () => {
    let handValue = 0
    this.state.hand.forEach(obj => {
      if (Object.keys(obj).length != 0) {
        handValue += obj.value
      }
    })
    if (handValue > 21) {
      this.lose()
    } else if (this.state.hand.every(obj => {Object.keys(obj).length != 0})) {
      this.win()
    }
  }

  lose = () => {
    this.setState({
      end: 'LOSE'
    })
  }

  win = () => {
    this.setState({
      end: 'WIN'
    })
  }

  // deal = () => {
  //   let selectedCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length) + 1]
  //   this.setState({
  //     card: {number: 1, suit: 'Clubs'}
  //   }, () => {console.log(this.state.cards)})
  // }

  render() {
    if (this.state.end == 'LOSE') {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>YOU LOSE</Text>
        </View>
      )
    } else if (this.state.end == 'WIN') {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>YOU WIN</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Black Jack!</Text>
        <ComputerHand computerHand={this.state.computerHand}/>
        <Button background='black' color='gold' title="DEAL" onPress={this.dealCard}/>
        <Button background='black' color='gold' title="HOLD" onPress={this.holdHand}/>
        <Button background='black' color='gold' title="COMPUTER" onPress={this.dealComputerCard}/>
        <Hand hand={this.state.hand}/>
        </View>
      );

    }
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
