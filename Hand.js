import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import Card from './Card.js';

export default class Hand extends Component {

  generateHandCards = () => {
    let i = 0
    return this.props.hand.slice(1, this.props.hand.length).map(
      cardObj => <Card key={i++} card={cardObj} source={"hand"}/>
    )
  }

  generateAllHandCards = () => {
    let i = 0
    return this.props.hand.map(
      cardObj => <Card key={i++} card={cardObj} source={"hand"} end={this.props.end}/>
    )
  }

  render () {
    if (this.props.end == true) {
      return (
        <View style={styles.hand}>
          {this.generateAllHandCards()}
        </View>
      )
    } else {
      return (
        <View style={styles.hand}>
          <Card card={this.props.hand[0]} source={"single"} player={"player"} />
          {this.generateHandCards()}
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  hand: {
    flexDirection: 'row',
    backgroundColor: 'gray'
  }
});
