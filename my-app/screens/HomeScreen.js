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
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImage: {
    width: 350,
    height: 175,
    marginBottom: 100,
  },
  mainText: {
    fontSize: 50,
    margin: 10,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: 'goldenrod'
  },
  subText: {
    fontSize: 30,
    margin: 10,
    fontFamily: 'Avenir',
    textAlign: 'center'
  },
  iconImage: {
    width: 50,
    height: 50
  }
});

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{height:300}} />
        <View>
          <Image
            style ={styles.mainImage}
            source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/style.png')}
          />
        </View>
        <View style={{height:100}} />
        <View style={{alignItems: 'center'}}>
          <Text style ={styles.mainText}>
            Our Mission
          </Text>
          <Text style={styles.subText}>
            As a personalized swap service, we provide a cost-effective means to stay stylish
            without compromising the environment. Help us combat the unsustainability and waste
            production of the clothing industry.
          </Text>
          <Text style={styles.mainText}>
            Meet Our Stylists
          </Text>
        </View>
      </ScrollView>
    );
  }
}
