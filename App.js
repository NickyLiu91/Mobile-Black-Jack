import React, {Component} from 'react';
import Hand from './Hand.js';
import ComputerHand from './ComputerHand.js';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const allNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const allSuites = ['Diamonds', "Clubs", "Hearts", "Spades"]

const deck = []

export default class App extends Component {

  state = {
    draw: 'yes',
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
      this.setUp()
    })
  }

  setUp = () => {
    let allCards = this.state.cards
    let firstCard = allCards[Math.floor(Math.random() * allCards.length) + 1]
    console.log(firstCard)
    allCards = allCards.filter(obj => obj.number != firstCard.number || obj.suit != firstCard.suit)
    let firstComputerCard = allCards[Math.floor(Math.random() * allCards.length) + 1]
    console.log(firstComputerCard)
    allCards = allCards.filter(obj => obj.number != firstComputerCard.number || obj.suit != firstComputerCard.suit)
    let secondCard = allCards[Math.floor(Math.random() * allCards.length) + 1]
    console.log(secondCard)
    allCards = allCards.filter(obj => obj.number != secondCard.number || obj.suit != secondCard.suit)
    let secondComputerCard = allCards[Math.floor(Math.random() * allCards.length) + 1]
    console.log(secondComputerCard)
    allCards = allCards.filter(obj => obj.number != secondComputerCard.number || obj.suit != secondComputerCard.suit)
    console.log(allCards)

    this.setState({
      cards: allCards,
      hand: [firstCard, secondCard, {}, {}, {}],
      computerHand: [firstComputerCard, secondComputerCard, {}, {}, {}]
    })
  }

  dealCard = (position) => {

    var handValue = 0
    this.state.hand.forEach(obj => {
      if (Object.keys(obj).length != 0) {
        handValue += obj.value
      }
    })

    if (position == "hand") {
      if (this.state[position].some(obj => Object.keys(obj).length == 0)) {
        let copyHand = this.state[position]
        let selectedCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length) + 1]
        let replacementIndex = this.state[position].findIndex(obj => Object.keys(obj).length == 0)
        copyHand[replacementIndex] = selectedCard

        if (handValue + selectedCard.value > 21) {
          this.lose()
        } else {
          this.setState({
            cards: this.state.cards.filter(obj => obj.number != selectedCard.number || obj.suit != selectedCard.suit),
            position: copyHand
          })
        }
      }
    } else if (position == "computerHand") {
      let computerHandValue = 0
      this.state[position].forEach(obj => {
        if (Object.keys(obj).length != 0) {
          computerHandValue += obj.value
        }
      })

      if (handValue <= 21 && handValue > computerHandValue) {
        if (this.state[position].some(obj => Object.keys(obj).length == 0)) {
          let copyHand = this.state[position]
          let selectedCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length) + 1]
          let replacementIndex = this.state[position].findIndex(obj => Object.keys(obj).length == 0)
          copyHand[replacementIndex] = selectedCard
          this.setState({
            draw: 'no',
            cards: this.state.cards.filter(obj => obj.number != selectedCard.number || obj.suit != selectedCard.suit),
            position: copyHand
          }, () => {
            let computerHandValue = 0
            this.state[position].forEach(obj => {
              if (Object.keys(obj).length != 0) {
                computerHandValue += obj.value
              }
            })
          })
        }
      }

      if (computerHandValue > 21) {
        this.win()
      } else if (computerHandValue >= handValue) {
        this.lose()
      } else if (handValue > computerHandValue) {
        if (computerHandValue < 17 || computerHandValue < (handValue - this.state.hand[0].value + 1)) {
          setTimeout(this.dealComputerCard, 1000)
        } else {
          this.holdHand()
        }
      }
    }
  }

  dealComputerCard = () => {

    let handValue = 0
    this.state.hand.forEach(obj => {
      if (Object.keys(obj).length != 0) {
        handValue += obj.value
      }
    })

    let computerHandValue = 0
    this.state.computerHand.forEach(obj => {
      if (Object.keys(obj).length != 0) {
        computerHandValue += obj.value
      }
    })

    if (handValue <= 21 && handValue > computerHandValue) {
      if (this.state.computerHand.some(obj => Object.keys(obj).length == 0)) {
        let copyHand = this.state.computerHand
        let selectedCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length) + 1]
        let replacementIndex = this.state.computerHand.findIndex(obj => Object.keys(obj).length == 0)
        copyHand[replacementIndex] = selectedCard
        this.setState({
          draw: 'no',
          cards: this.state.cards.filter(obj => obj.number != selectedCard.number || obj.suit != selectedCard.suit),
          computerHand: copyHand
        }, () => {
          let handValue = 0
          this.state.computerHand.forEach(obj => {
            if (Object.keys(obj).length != 0) {
              handValue += obj.value
            }
          })
        })
      }
    }

    if (computerHandValue > 21) {
      this.win()
    } else if (computerHandValue >= handValue) {
      this.lose()
    } else if (handValue > computerHandValue) {
      if (computerHandValue < 17 || computerHandValue < (handValue - this.state.hand[0].value + 1)) {
        setTimeout(this.dealComputerCard, 1000)
      } else {
        this.holdHand()
      }
    }
  }

  holdHand = () => {
    let handValue = 0
    this.state.hand.forEach(obj => {
      if (Object.keys(obj).length != 0) {
        handValue += obj.value
      }
    })

    let computerHandValue = 0
    this.state.computerHand.forEach(obj => {
      if (Object.keys(obj).length != 0) {
        computerHandValue += obj.value
      }
    })

    if (computerHandValue > 21) {
      this.win()
    } else if (this.state.hand.every(obj => Object.keys(obj).length != 0)) {
      this.win()
    } else if (this.state.computerHand.every(obj => Object.keys(obj).length != 0) && computerHandValue <= 21) {
      this.lose()
    } else if (handValue > computerHandValue) {
      this.win()
    } else {
      this.lose()
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
          <Text style={styles.welcome}>Welcome to Black Jack!</Text>
          <ComputerHand computerHand={this.state.computerHand} end={true}/>
          <Text style={styles.welcome}>YOU LOSE</Text>
          <Hand hand={this.state.hand} end={true}/>
        </View>
      );
    } else if (this.state.end == 'WIN') {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to Black Jack!</Text>
          <ComputerHand computerHand={this.state.computerHand} end={true}/>
          <Text style={styles.welcome}>YOU WIN</Text>
          <Hand hand={this.state.hand} end={true}/>
        </View>
      );
    } else {
      if (this.state.draw == 'yes') {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to Black Jack!</Text>
            <ComputerHand computerHand={this.state.computerHand}/>
            <Button background='black' color='gold' title="DEAL" onPress={(event) => {this.dealCard("hand")}}/>
            <Button background='black' color='gold' title="COMPUTER" onPress={(event) => {this.dealCard("computerHand")}}/>
            <Hand hand={this.state.hand}/>
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to Black Jack!</Text>
            <ComputerHand computerHand={this.state.computerHand}/>
            <Button background='black' color='gold' title="COMPUTER" onPress={(event) => {this.dealCard("computerHand")}}/>
            <Hand hand={this.state.hand}/>
          </View>
        );
      }

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
