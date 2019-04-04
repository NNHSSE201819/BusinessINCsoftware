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

export default class CustomizeOne extends React.Component {
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
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.darkTextInputLabel}>CHOOSE A STYLIST:</Text>
            <TouchableOpacity
                onPress={() => {
                }}>
                <Text style={styles.darkTextInputLabel}>Mona Fang</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                }}>
                <Text style={styles.darkTextInputLabel}>Anahita Tewatia</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                }}>
                <Text style={styles.darkTextInputLabel}>Leilani Salemme{"\n"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.progressBarTitleText}>customize</Text>
          <Text style={styles.numGarmentsInputLabel}>tell us any special requests that you{"\n"}have</Text>
          <TextInput style = {styles.input} multiline = {true}
              underlineColorAndroid = "transparent"
              placeholderTextColor = "#A9A9A9"
              autoCapitalize = "none"/>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate('CustomizeClothes');}}>
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
    height: 250,
    marginTop: 15,
    borderColor: '#EFECEC',
    borderWidth: 10,
    backgroundColor: '#EFECEC',
    fontFamily: 'HelveticaNeue-Light',
    color: '#383434',
    fontSize: 18,
    flexDirection: 'row',
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
