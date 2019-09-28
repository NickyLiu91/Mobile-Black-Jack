import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View} from 'react-native';

export default class Card extends Component {
  render () {
    return (
      <Text>
      {this.props.cards.length}
      </Text>
    )
  }
}

// {Math.floor(Math.random() * Math.floor(props.cards.length))}

// export default Card;
