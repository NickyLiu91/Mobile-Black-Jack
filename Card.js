import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View} from 'react-native';

export default class Card extends Component {

  render () {
    if (this.props.player == 'computer') {
      return (
        <Text>
        Computer
        </Text>
      )
    } else if (Object.keys(this.props.card).length != 0) {
      return (
        <Text>
        {this.props.card.number}
        {this.props.card.value}
        {this.props.card.suit}
        </Text>
      )
    } else {
      return (
        <Text>
        BLANK
        </Text>
      )
    }
  }

}

// {Math.floor(Math.random() * Math.floor(props.cards.length))}

// export default Card;
