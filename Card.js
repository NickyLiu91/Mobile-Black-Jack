import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View, StyleSheet, TouchableHighlight, Image} from 'react-native';

var SUITS = [
  {
    Diamonds: require('./images/Diamonds.png')
  },
  {
    Clubs: require('./images/Clubs.png')
  },
  {
    Hearts: require('./images/Hearts.png')
  },
  {
    Spades: require('./images/Spades.png')
  }
]

export default class Card extends Component {

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
               <Image style={{height: 50, width: 50}} source={SUITS.Diamonds} />

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
         <Image style={{height: 50, width: 50}} source={SUITS.Diamonds} />
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
