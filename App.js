import React, {Component} from 'react';
import Hand from './Hand.js';
import ComputerHand from './ComputerHand.js';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const allNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const allSuites = ['Diamonds']

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
    }, () => {
      if (this.checkBlackJack(this.state.hand) && this.checkBlackJack(this.state.computerHand)) {
        this.tie()
      } else if (this.checkBlackJack(this.state.hand)) {
        this.win()
      } else if (this.checkBlackJack(this.state.computerHand)) {
        this.lose()
      }
    })
  }

  calculateHandValue = (hand) => {
    var handValue = 0
    let aces = hand.filter(obj => obj.value == 11).length

    hand.forEach(obj => {
      if (Object.keys(obj).length != 0) {
        handValue += obj.value
      }
    })

    while (handValue > 21 && aces > 0) {
      aces = aces - 1
      handValue = handValue - 10
    }

    return handValue
  }

  dealCard = (position) => {
    if (this.state.cards.length == 0) {
      let fieldCards = []
      this.state.hand.forEach(card => {
        if (Object.keys.length != 0) {
          fieldCards << card
        }
      })

      this.state.computerHand.forEach(card => {
        if (Object.keys.length != 0) {
          fieldCards << card
        }
      })
      console.log(fieldCards)
      console.log(cdeck.filter(card => fieldCards.filter(card2 => card.number == card2.number && card.suit == card2.suit).length != 1))

      this.setState({
        cards: deck.filter(card => fieldCards.filter(card2 => card.number == card2.number && card.suit == card2.suit).length != 1)
      }, () => {
        if (this.state.hand.some(obj => Object.keys(obj).length == 0)) {
          let copyHand = this.state.hand
          let selectedCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length)]
          let replacementIndex = this.state.hand.findIndex(obj => Object.keys(obj).length == 0)
          copyHand[replacementIndex] = selectedCard

          this.setState({
            cards: this.state.cards.filter(obj => obj.number != selectedCard.number || obj.suit != selectedCard.suit),
            hand: copyHand
          }, () => {
            let handValue = this.calculateHandValue(this.state.hand)
            if (handValue > 21) {
              this.lose()
            }
          })
        }
      })
    } else {
      if (this.state.hand.some(obj => Object.keys(obj).length == 0)) {
        let copyHand = this.state.hand
        let selectedCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length)]
        let replacementIndex = this.state.hand.findIndex(obj => Object.keys(obj).length == 0)
        copyHand[replacementIndex] = selectedCard

        this.setState({
          cards: this.state.cards.filter(obj => obj.number != selectedCard.number || obj.suit != selectedCard.suit),
          hand: copyHand
        }, () => {
          let handValue = this.calculateHandValue(this.state.hand)
          if (handValue > 21) {
            this.lose()
          }
        })
      }
    }
  }

  dealComputerCard = () => {
    if (this.state.cards.length == 0) {
      let fieldCards = []
      this.state.hand.forEach(card => {
        if (Object.keys.length != 0) {
          fieldCards << card
        }
      })

      this.state.computerHand.forEach(card => {
        if (Object.keys.length != 0) {
          fieldCards << card
        }
      })

      console.log(fieldCards)
      console.log(deck.filter(card => fieldCards.filter(card2 => card.number == card2.number && card.suit == card2.suit).length != 1))

      this.setState({
        cards: deck.filter(card => fieldCards.filter(card2 => card.number == card2.number && card.suit == card2.suit).length != 1)
      }, () => {
        var handValue = this.calculateHandValue(this.state.hand)

        let computerHandValue = this.calculateHandValue(this.state.computerHand)

        if (this.state.computerHand.some(obj => Object.keys(obj).length == 0)) {
          let copyHand = this.state.computerHand
          let selectedCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length)]
          let replacementIndex = this.state.computerHand.findIndex(obj => Object.keys(obj).length == 0)
          copyHand[replacementIndex] = selectedCard
          this.setState({
            draw: 'no',
            cards: this.state.cards.filter(obj => obj.number != selectedCard.number || obj.suit != selectedCard.suit),
            position: copyHand
          }, () => {
            let computerHandValue = this.calculateHandValue(this.state.computerHand)

            if (computerHandValue > 21) {
              this.win()
            } else if (this.state.computerHand.every(obj => Object.keys(obj).length != 0) && this.state.hand.every(obj => Object.keys(obj).length != 0)) {
              this.tie()
            } else if (this.state.computerHand.every(obj => Object.keys(obj).length != 0)) {
              this.lose()
            } else if (this.state.hand.every(obj => Object.keys(obj).length != 0)) {
              this.win()
            } else if (computerHandValue < 17 || computerHandValue < this.visibleHandValue()) {
              setTimeout(this.dealComputerCard, 2000)
            } else if (computerHandValue > handValue) {
              this.lose()
            } else if (computerHandValue < handValue) {
              this.win()
            } else if (computerHandValue == handValue) {
              this.tie()
            }
          })
        }
      })
    } else {
      var handValue = this.calculateHandValue(this.state.hand)

      let computerHandValue = this.calculateHandValue(this.state.computerHand)

      if (this.state.computerHand.some(obj => Object.keys(obj).length == 0)) {
        let copyHand = this.state.computerHand
        let selectedCard = this.state.cards[Math.floor(Math.random() * this.state.cards.length)]
        let replacementIndex = this.state.computerHand.findIndex(obj => Object.keys(obj).length == 0)
        copyHand[replacementIndex] = selectedCard
        console.log(selectedCard)
        console.log(this.state.cards)
        this.setState({
          draw: 'no',
          cards: this.state.cards.filter(obj => obj.number != selectedCard.number || obj.suit != selectedCard.suit),
          position: copyHand
        }, () => {
          let computerHandValue = this.calculateHandValue(this.state.computerHand)

          if (computerHandValue > 21) {
            this.win()
          } else if (this.state.computerHand.every(obj => Object.keys(obj).length != 0) && this.state.hand.every(obj => Object.keys(obj).length != 0)) {
            this.tie()
          } else if (this.state.computerHand.every(obj => Object.keys(obj).length != 0)) {
            this.lose()
          } else if (this.state.hand.every(obj => Object.keys(obj).length != 0)) {
            this.win()
          } else if (computerHandValue < 17 || computerHandValue < this.visibleHandValue()) {
            setTimeout(this.dealComputerCard, 2000)
          } else if (computerHandValue > handValue) {
            this.lose()
          } else if (computerHandValue < handValue) {
            this.win()
          } else if (computerHandValue == handValue) {
            this.tie()
          }
        })
      }
    }
  }

  visibleHandValue = () => {
    var handValue = 1
    let visibleHand = this.state.hand.slice(1)
    let aces = visibleHand.filter(obj => obj.value == 11).length

    visibleHand.forEach(obj => {
      if (Object.keys(obj).length != 0) {
        handValue += obj.value
      }
    })

    while (handValue > 21 && aces > 0) {
      aces = aces - 1
      handValue = handValue - 10
    }

    console.log(handValue)
    return handValue
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

  tie = () => {
    this.setState({
      end: 'TIE'
    })
  }

  checkBlackJack = (hand) => {
    // console.log(hand.filter(obj => Object.keys(obj).length != 0))
    // console.log(hand.some(obj => obj.number == 'A'))
    if (hand.filter(obj => Object.keys(obj).length != 0).length == 2 &&
      (hand.some(obj => obj.number == 'A') && hand.some(obj => obj.number == 'J' || obj.number == 'Q' || obj.number == 'K'))
    ) {
      return true
    } else {
      return false
    }
  }

  nextRound = () => {
    let allCards = this.state.cards
    // let fieldCards = []
    // this.state.hand.forEach(card => {
    //   if (Object.keys.length != 0) {
    //     fieldCards << card
    //   }
    // })
    //
    // this.state.computerHand.forEach(card => {
    //   if (Object.keys.length != 0) {
    //     fieldCards << card
    //   }
    // })
    //
    // console.log(fieldCards)
    // console.log(deck.filter(card => fieldCards.filter(card2 => card.number == card2.number && card.suit == card2.suit).length != 1))

    if (allCards.length == 0) {
      allCards = deck.filter(card => fieldCards.filter(card2 => card.number == card2.number && card.suit == card2.suit).length != 1)
    }
    let firstCard = allCards[Math.floor(Math.random() * allCards.length)]
    console.log(firstCard)
    console.log(allCards)
    allCards = allCards.filter(obj => obj.number != firstCard.number || obj.suit != firstCard.suit)

    if (allCards.length == 0) {
      allCards = deck.filter(card => fieldCards.filter(card2 => card.number == card2.number && card.suit == card2.suit).length != 1)
    }
    let firstComputerCard = allCards[Math.floor(Math.random() * allCards.length)]
    // console.log(firstComputerCard)
    allCards = allCards.filter(obj => obj.number != firstComputerCard.number || obj.suit != firstComputerCard.suit)

    if (allCards.length == 0) {
      allCards = deck.filter(card => fieldCards.filter(card2 => card.number == card2.number && card.suit == card2.suit).length != 1)
    }
    let secondCard = allCards[Math.floor(Math.random() * allCards.length)]
    // console.log(secondCard)
    allCards = allCards.filter(obj => obj.number != secondCard.number || obj.suit != secondCard.suit)

    if (allCards.length == 0) {
      allCards = deck.filter(card => fieldCards.filter(card2 => card.number == card2.number && card.suit == card2.suit).length != 1)
    }
    let secondComputerCard = allCards[Math.floor(Math.random() * allCards.length)]
    // console.log(secondComputerCard)
    allCards = allCards.filter(obj => obj.number != secondComputerCard.number || obj.suit != secondComputerCard.suit)
    console.log(allCards)

    this.setState({
      draw: 'yes',
      cards: allCards,
      hand: [firstCard, secondCard, {}, {}, {}],
      computerHand: [firstComputerCard, secondComputerCard, {}, {}, {}],
      end: ''
    }, () => {
      if (this.checkBlackJack(this.state.hand) && this.checkBlackJack(this.state.computerHand)) {
        this.tie()
      } else if (this.checkBlackJack(this.state.hand)) {
        this.win()
      } else if (this.checkBlackJack(this.state.computerHand)) {
        this.lose()
      }
    })
  }

  render() {
    if (this.state.end == 'LOSE') {
      return (
        <TouchableOpacity style={styles.container} onPress={this.nextRound}>
          <Text style={styles.welcome}>Welcome to Black Jack!</Text>
          <ComputerHand computerHand={this.state.computerHand} end={true}/>
          <Text style={styles.welcome}>YOU LOSE</Text>
          <Hand hand={this.state.hand} end={true}/>
        </TouchableOpacity>
      );
    } else if (this.state.end == 'WIN') {
      return (
        <TouchableOpacity style={styles.container} onPress={this.nextRound}>
          <Text style={styles.welcome}>Welcome to Black Jack!</Text>
          <ComputerHand computerHand={this.state.computerHand} end={true}/>
          <Text style={styles.welcome}>YOU WIN</Text>
          <Hand hand={this.state.hand} end={true}/>
        </TouchableOpacity>
      );
    } else if (this.state.end == 'TIE') {
      return (
        <TouchableOpacity style={styles.container} onPress={this.nextRound}>
          <Text style={styles.welcome}>Welcome to Black Jack!</Text>
          <ComputerHand computerHand={this.state.computerHand} end={true}/>
          <Text style={styles.welcome}>TIE</Text>
          <Hand hand={this.state.hand} end={true}/>
        </TouchableOpacity>
      );
    } else {
      if (this.state.draw == 'yes') {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to Black Jack!</Text>
            <ComputerHand computerHand={this.state.computerHand}/>
            <Button background='black' color='gold' title="DEAL" onPress={(event) => {this.dealCard(event)}}/>
            <Button background='black' color='gold' title="COMPUTER" onPress={(event) => {this.dealComputerCard(event)}}/>
            <Hand hand={this.state.hand}/>
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to Black Jack!</Text>
            <ComputerHand computerHand={this.state.computerHand}/>
            <Button background='black' color='gold' title="COMPUTER" onPress={(event) => {this.dealComputerCard(event)}}/>
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
