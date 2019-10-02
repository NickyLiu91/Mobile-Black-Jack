import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View} from 'react-native';

export default class Card extends Component {
  if this.props.card != {} {
    render () {
      return (
        <Text>
        {this.props.card.number}
        {this.props.card.suit}
        </Text>
      )
    }
  } else {
    render () {
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
