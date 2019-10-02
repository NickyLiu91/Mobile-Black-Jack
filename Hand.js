import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View} from 'react-native';
import Card from './Card.js';

export default class Hand extends Component {
  render () {
    return (
      <Card card={this.props.hand[0]}/>
      <Card card={this.props.hand[1]}/>
      <Card card={this.props.hand[2]}/>
      <Card card={this.props.hand[3]}/>
      <Card card={this.props.hand[4]}/>
    )
  }
}

// {Math.floor(Math.random() * Math.floor(props.cards.length))}

// export default Card;
