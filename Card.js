import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

export default class Card extends Component {

  findSuit = (suit) => {
    if (suit == 'Diamonds') {
      return ♦
    } else if (suit == 'Clubs') {
      return ♣
    } else if (suit == 'Hearts') {
      return ♥
    } else if (suit == 'Diamonds') {
      return ♠
    }
  }

  state = {
    hover: false
  }

  toggleHover = () => {
    this.setState({
      hover: !this.state.hover
    })
  }

  render () {
     if (this.props.source == "single" && !this.props.end) {
       if (this.props.player == "player") {
         if (this.state.hover == true) {
           return (
             <TouchableHighlight onPress={this.toggleHover}>
               <Text style={styles.card} >
               {this.props.card.number}{"\n"}
               {this.findSuit(this.props.card)}
               </Text>
             </TouchableHighlight>
           )
         } else {
           return (
             <TouchableHighlight onPress={this.toggleHover}>
               <Text style={styles.cardBack}>

               </Text>
             </TouchableHighlight>
           )
         }
       } else {
         return (
           <Text style={styles.cardBack}>

           </Text>
         )
       }
    } else if (Object.keys(this.props.card).length != 0) {
     return (
       <Text style={styles.card}>
         {this.props.card.number}{"\n"}
         {this.findSuit(this.props.card)}
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
    margin: 5,
    textAlign: 'center'
  },
  cardBack: {
    width: 70,
    height: 140,
    borderWidth: 3,
    margin: 5,
    // padding: 10,
    // color: 'brown',
    backgroundColor: 'brown',
    borderColor: 'gold',
    // flex: 0.3,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  // circle: {
  //   width: 70,
  //   height: 100,
  //   // borderWidth: 3,
  //   borderColor: 'white',
  //   backgroundColor: 'blue',
  // }
});
