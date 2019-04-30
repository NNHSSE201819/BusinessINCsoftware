import React, { Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  AppRegistry,
  Alert,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ACA5A5',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  mainImage: {
    width: 250,
    height: 250,
    marginBottom: 25,
  },
  mainText: {
    fontSize: 50,
    margin: 10,
    fontFamily: 'HelveticaNeue-Light',
    textAlign: 'center',
    color: 'black'
  },
});

export default class HomeScreen extends Component {
  static navigationOptions = {
    header:null,
    title: 'HomeScreen',
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style ={styles.mainImage}
          source={require('../assets/images/logo.png')}
        />
        <Text style={styles.mainText}>
          More! {"\n"} Coming soon
        </Text>
      </View>
    );
  }
}
