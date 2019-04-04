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
import RadioForm, {RadioButton, RadioButtonInput,
  RadioButtonLabel} from 'react-native-simple-radio-button';
import { MonoText } from '../components/StyledText';
import { WebBrowser } from 'expo';

var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];

export default class CustomizeClothes extends React.Component {
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
          <Text style={styles.progressBarTitleText}>customize</Text>
          <Text style={styles.numGarmentsInputLabel}>
            what kind of clothes do you prefer{"\n"}to receive? choose at least 3
          </Text>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={() => {}}
          />
          {/*Radio buttons:
            https://www.npmjs.com/package/react-native-simple-radio-button*/}
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate('SwapProgress');}}>
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
    marginRight: 40
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
    justifyContent: 'flex-start',
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
