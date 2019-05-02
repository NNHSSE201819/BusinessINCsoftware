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


export default class SwapFinish extends React.Component {
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
        <Text style={styles.progressBarTitleText}>Awesome swap!{"\n"}Thank you for{"\n"}
          participating in{"\n"}circular fashion.{"\n"}{"\n"}Expect to get your clothes in{"\n"}
          5-7 business days!
        </Text>
        <View style={{alignItems: 'center'}}>
          <TouchableHighlight onPress={() => {this.props.navigation.navigate('SwapProgress');}}
          underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>view swap progress</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
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
    color: '#F8F8F8',
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
    marginRight: 40,
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
    backgroundColor: '#F7EFEF'
  },
  buttonText: {
    padding: 20,
    color: '#191616',
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Light',
  }
});
