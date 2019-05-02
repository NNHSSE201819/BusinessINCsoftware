import React from 'react';
import { ScrollView,
  StyleSheet,
  Button,
  Alert,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Modal,
  TextInput, } from 'react-native';
import { MonoText } from '../components/StyledText';
import { WebBrowser } from 'expo';


export default class PaymentInfo extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    buttonClicked: 0,
    progressSteps: ["Order Received", "Outfits Assembled", "Order Shipped", "Order Delivered"],
    startSwapModal: true,
    customizeModal1: false,
    customizeModal2: false,
    paymentInfoModal: false,
    thankYouModal: false,
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.progressBarTitleText}>payment info</Text>
        <Text style={styles.lightTextInputLabel}>Credit Card</Text>
        <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholderTextColor = "#A9A9A9"
             autoCapitalize = "none"/>
        <Text style={styles.lightTextInputLabel}>CVV</Text>
        <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholderTextColor = "#A9A9A9"
            autoCapitalize = "none"/>
        <Text style={styles.lightTextInputLabel}>Date</Text>
        <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholderTextColor = "#A9A9A9"
            autoCapitalize = "none"/>
        <Text style={styles.lightTextInputLabel}>Name on Card</Text>
        <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholderTextColor = "#A9A9A9"
            autoCapitalize = "none"/>
        <Text style={styles.lightTextInputLabel}>Zip Code</Text>
        <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholderTextColor = "#A9A9A9"
            autoCapitalize = "none"/>
        <View style={{flexDirection: 'row', flex: 2}}>
          <View style={{alignItems: 'flex-start', flex: 2}}>
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate('MyCart');}}>
              <Text style={styles.nextText}>back</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate('SwapFinish');}}>
              <Text style={styles.nextText}>submit!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    backgroundColor: '#ACA5A5',
    paddingTop: 75,
    paddingLeft: 20,
    paddingRight: 20
  },
  progressBarTitleText: {
    paddingTop: 10,
    marginBottom: 20,
    fontSize: 36,
    textAlign: 'center',
    color: '#2F2B2B',
    fontFamily: 'HelveticaNeue-Light'
  },
  progressBarLabelText: {
    paddingTop: 5,
    marginLeft: 25,
    marginBottom: 25,
  },
  progressStatusText: {
    textAlign: 'right',
    marginBottom: 10,
  },
  numGarmentsInputLabel: {
    color: '#383434',
    fontSize: 24,
    paddingTop: 10,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'HelveticaNeue-Light'
  },
  lightTextInputLabel: {
    color: '#F8E4E4',
    fontSize: 24,
    paddingTop: 20,
    fontFamily: 'HelveticaNeue-Light',
    marginLeft: 40
  },
  nextText: {
    color: '#383434',
    fontSize: 24,
    paddingTop: 30,
    fontFamily: 'Helvetica',
    marginBottom: 15,
  },
  inputSmall: {
    height: 43,
    marginTop: 15,
    borderColor: '#A79696',
    borderWidth: 1,
    textAlign: 'right',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 100,
    fontFamily: 'HelveticaNeue-Light',
    color: '#383434',
    fontSize: 30
  },
  input: {
    height: 43,
    marginTop: 15,
    borderColor: '#EFE9E9',
    borderWidth: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#EFE9E9',
    fontFamily: 'HelveticaNeue-Light',
    color: '#383434',
    fontSize: 24,
    marginLeft: 40,
    marginRight: 40
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
