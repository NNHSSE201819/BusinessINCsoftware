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

export default class StartSwapScreen extends React.Component {
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
      <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.progressBarTitleText}>START SWAP</Text>
            <Text style={styles.numGarmentsInputLabel}>number of garments:</Text>
            <View style={{alignItems: 'center'}}>
              <TextInput style = {styles.inputSmall}
                  underlineColorAndroid = "transparent"
                  placeholderTextColor = "#A9A9A9"
                  autoCapitalize = "none"
                  />
            </View>
            <Text style={styles.darkTextInputLabel}>name</Text>
            <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholderTextColor = "#A9A9A9"
                 autoCapitalize = "none"/>
            <Text style={styles.darkTextInputLabel}>address</Text>
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholderTextColor = "#A9A9A9"
                autoCapitalize = "none"/>
            <Text style={styles.darkTextInputLabel}>city</Text>
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholderTextColor = "#A9A9A9"
                autoCapitalize = "none"/>
            <Text style={styles.darkTextInputLabel}>zip code</Text>
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholderTextColor = "#A9A9A9"
                autoCapitalize = "none"/>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {this.props.navigation.navigate('CustomizeOne');}}>
                <Text style={styles.nextText}>next >> </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ACA5A5',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ACA5A5',
    paddingLeft: 20,
    paddingRight: 20
  },
  progressBarTitleText: {
    paddingTop: 10,
    marginBottom: 10,
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
  progressBarView: {
    marginTop: 20,
    width: 375,
    height: 50,
    borderWidth: 2.5,
    borderColor: '#000000',
  },
  progressBar1View: {
    width: 92.5,
    height: 45,
    backgroundColor: '#2196F3'
  },
  progressBar2View: {
    width: 190,
    height: 45,
    backgroundColor: '#2196F3'
  },
  progressBar3View: {
    width: 282.5,
    height: 45,
    backgroundColor: '#2196F3'
  },
  progressBar4View: {
    width: 370,
    height: 45,
    backgroundColor: '#2196F3'
  },
  numGarmentsInputLabel: {
    color: '#383434',
    fontSize: 24,
    paddingTop: 10,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'HelveticaNeue-Light'
  },
  darkTextInputLabel: {
    color: '#383434',
    fontSize: 24,
    paddingTop: 10,
    fontFamily: 'HelveticaNeue-Light',
    marginLeft: 40
  },
  nextText: {
    color: '#383434',
    fontSize: 24,
    paddingTop: 30,
    fontFamily: 'Helvetica',
  },
  inputSmall: {
    height: 43,
    marginTop: 15,
    borderColor: '#EFE9E9',
    borderWidth: 10,
    textAlign: 'right',
    alignItems: 'center',
    backgroundColor: '#EFE9E9',
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
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 20,
  }
});
