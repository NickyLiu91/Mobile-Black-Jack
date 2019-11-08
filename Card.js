import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View, StyleSheet, TouchableHighlight, Image} from 'react-native';

var SUITS = {
  Diamonds: require('./images/Diamonds.png'),
  Clubs: require('./images/Clubs.png'),
  Hearts: require('./images/Hearts.png'),
  Spades: require('./images/Spades.png')
}


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
               <View style={styles.card} >
                 <View style={styles.topHalf}>
                   <Text>{this.props.card.number}</Text>

                   <Image style={styles.images} source={SUITS[this.props.card.suit]} />
                 </View>

                 <View style={styles.bottomHalf}>
                   <Text>{this.props.card.number}</Text>

                   <Image style={styles.images} source={SUITS[this.props.card.suit]} />
                 </View>
               </View>
             </TouchableHighlight>
           )
         } else {
           return (
             <TouchableHighlight onPress={this.toggleHover}>
               <View style={styles.cardBack}>

               </View>
             </TouchableHighlight>
           )
         }
       } else {
         return (
           <View style={styles.cardBack}>

           </View>
         )
       }
    } else if (Object.keys(this.props.card).length != 0) {
     return (
       <View style={styles.card}>
        <View style={styles.topHalf}>
          <Text>{this.props.card.number}</Text>
          <Image style={styles.images} source={SUITS[this.props.card.suit]} />
        </View>

        <View style={styles.bottomHalf}>
          <Text>{this.props.card.number}</Text>
          <Image style={styles.images} source={SUITS[this.props.card.suit]} />
        </View>
       </View>
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
    flex: 1,
    maxWidth: 70,
    minWidth: 70,
    maxHeight: 140,
    minHeight: 140,
    color: 'red',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    margin: 5,
    // flexDirection: 'column',
    justifyContent: 'space-between'
  },
  topHalf: {
    color: 'red',
    alignSelf: 'flex-start'
    // alignItems: 'top'
  },
  bottomHalf: {
    color: 'blue',
    alignSelf: 'flex-end'
    // alignItems: 'bottom'
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
  images: {
    height: 10,
    width: 10
  }
  // circle: {
  //   width: 70,
  //   height: 100,
  //   // borderWidth: 3,
  //   borderColor: 'white',
  //   backgroundColor: 'blue',
  // }
});
