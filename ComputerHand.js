import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View} from 'react-native';
import Card from './Card.js';

export default class ComputerHand extends Component {
  render () {
    return (
      <View>
        <Card card={this.props.computerHand[0]}/>
        <Card card={this.props.computerHand[1]}/>
        <Card card={this.props.computerHand[2]}/>
        <Card card={this.props.computerHand[3]}/>
        <Card card={this.props.computerHand[4]}/>
      </View>
    )
  }
}
