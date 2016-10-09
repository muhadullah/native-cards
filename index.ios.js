import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Card extends Component
{
	render () {
		return (
			<View style={styles.card}>
				<Text style={styles.cardLetter}>{ this.props.letter }</Text>
				<Text style={styles.cardName}>{ this.props.name }</Text>
			</View>
		);
	}
}

class NativeCards extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Card letter="أ" />
				<Card letter="ب‎" />
				<Card letter="ت‎" />
				<Card letter="ث" />
				<Card letter="ج" />
				<Card letter="ح" />
				<Card letter="خ" />
				<Card letter="د" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  card: {

  },
  cardLetter: {
  	fontSize: 24
  },
  cardName: {
  	fontSize: 16
  }
});

AppRegistry.registerComponent('NativeCards', () => NativeCards);
