import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';

export default class Card extends Component {

  render () {
     if (Object.keys(this.props.card).length != 0) {
      return (
        <Text style={styles.card}>
        {this.props.card.number}{"\n"}
        {this.props.card.value}{"\n"}
        {this.props.card.suit}
        </Text>
      )
    } else {
      return (
        <Text>

        </Text>
      )
    }
  }

}

const styles = StyleSheet.create({
  card: {
    width: 70,
    height: 140,
    color: 'red',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    margin: 5
  }
});
