import React from 'react';
import { ScrollView,
  StyleSheet,
  Button,
  Alert,
  View,
  TouchableHighlight,
  Text,
  TextInput, } from 'react-native';
import { MonoText } from '../components/StyledText';
import { WebBrowser } from 'expo';

export default class StartSwapScreen extends React.Component {

  state = {
    buttonClicked: 0,
    progressSteps: ["Order Received", "Outfits Assembled", "Order Shipped", "Order Delivered"]
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.progressBarTitleText}>START SWAP</Text>
          <Text style={styles.darkTextInputLabel}>number of garments:</Text>
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#A9A9A9"
               autoCapitalize = "none"/>
        </ScrollView>
      </View>
    );
  }

  startSwapPress = () => {
    this.setState({ buttonClicked: this.state.buttonClicked + 1});
    WebBrowser.openBrowserAsync('https://www.thestyle360.com/swap');
  }

  updateProgressDetails = () => {
    var text = [];
    for(var i = this.state.buttonClicked - 1; i >= 0; i--){
      text.push(
        <View>
          <Text style={{textAlign: 'right'}}>{this.state.progressSteps[i]}</Text>
        </View>
      )
      console.log(this.state.progressSteps[i]);
    }
    return(
      <View>
        {text}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
    //alignItems: 'center'
  },
  contentContainer: {
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  progressBarTitleText: {
    paddingTop: 10,
    marginBottom: 10,
    fontSize: 30,
    textAlign: 'center',
    color: '#2F2B2B'
  },
  darkTextInputLabel: {
    color: '#383434',
    fontSize: 24,
    paddingTop: 10,
    textAlign: 'center'
  },
  input: {
      margin: 15,
      height: 43,
      borderColor: '#A79696',
      borderWidth: 1,
      textAlign: 'right'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 20,
  }
});
