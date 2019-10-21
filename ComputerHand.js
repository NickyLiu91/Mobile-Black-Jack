import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import Card from './Card.js';

export default class ComputerHand extends Component {

  generateHandCards = () => {
    let i = 0
    return this.props.computerHand.slice(1, this.props.computerHand.length).map(
      cardObj => <Card key={i++} card={cardObj} source={"hand"}/>
    )
  }

  render () {
    return (
      <View style={styles.hand}>
        <Card card={this.props.computerHand[0]} source={"single"} player={"computer"}/>
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
