import React, { Component } from "react";
// import {Platform} from 'react-native';

export default class Card extends Component {
  render () {
    return (
        {props.cards.length}
    )
  }
}

// {Math.floor(Math.random() * Math.floor(props.cards.length))}

// const Instructions = () => {
//   return (
//     '???????????'
//   )
// }

// Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu'
// })

// export default Instructions;
