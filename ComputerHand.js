import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import Card from './Card.js';

export default class ComputerHand extends Component {

  generateHandCards = () => {
    let i = 0
    return this.props.computerHand.map(
      cardObj => <Card key={i++} card={cardObj}/>
    )
  }

  render () {
    return (
      <View style={styles.hand}>
        {this.generateHandCards()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  hand: {
    flexDirection: 'row',
    backgroundColor: 'brown'
  }
});
