import React, { Component } from "react";
// import {Platform} from 'react-native';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

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
               {this.props.card.value}{"\n"}
               {this.props.card.suit}
               </Text>
             </TouchableHighlight>
           )
         } else {
           return (
             <TouchableHighlight onPress={this.toggleHover}>
               <Text style={styles.card}>
               Blank
               </Text>
             </TouchableHighlight>
           )
         }
       } else {
         return (
           <Text style={styles.card}>
           Blank
           </Text>
         )
       }
    } else if (Object.keys(this.props.card).length != 0) {
     return (
       <Text style={styles.card}>
         {this.props.card.number}{"\n"}
         {this.props.card.value}{"\n"}
         {this.props.card.suit}
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
    margin: 5
  }
});
