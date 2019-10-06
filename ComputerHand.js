import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View} from 'react-native';
import Card from './Card.js';

export default class ComputerHand extends Component {
  render () {
    return (
      <View>
        <Card card={this.props.computerHand[0]} player={"computer"}/>
        <Card card={this.props.computerHand[1]} player={"computer"}/>
        <Card card={this.props.computerHand[2]} player={"computer"}/>
        <Card card={this.props.computerHand[3]} player={"computer"}/>
        <Card card={this.props.computerHand[4]} player={"computer"}/>
      </View>
    )
  }
}
