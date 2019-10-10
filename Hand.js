import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View} from 'react-native';
import Card from './Card.js';

export default class Hand extends Component {

  generateHandCards = () => {
    let i = 0
    return this.props.hand.map(
      cardObj => <Card key={i++} card={cardObj}/>
    )
  }

  render () {
    return (
      <View>
        {this.generateHandCards()}
      </View>
    )
  }
}

// {Math.floor(Math.random() * Math.floor(props.cards.length))}

// export default Card;
