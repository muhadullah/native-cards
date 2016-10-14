import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet} from 'react-native';

class NewProject extends Component {
  render() {
    return (
         <View style = {styles.card}>
            <Text style={styles.cardLetter}>{this.props.letter}</Text> //how does 'this' work
            <Text style={styles.cardName}>{this.props.name}</Text>
         </View>
            );
         }
     }

class NativeCards extends Component{ //need to setup NativeCards folder / directory
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

    card: {}, //why is this empty
    cardLetter: {
        fontSize: 24
     },
     cardName: {
        fontSize:16
        }
});



AppRegistry.registerComponent('NewProject', () => NewProject);
