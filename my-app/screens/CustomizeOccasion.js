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
import { CheckBox } from 'react-native-check-box';
import { MonoText } from '../components/StyledText';
import { WebBrowser } from 'expo';

var casual_shirts = [
  {label: 'casual shirts', value: 0 },
  {/*{label: 'jackets', value: 0 },
  {label: 'sweaters', value: 0 },
  {label: 'dresses', value: 0 },
  {label: 'shorts', value: 0 },
  {label: 'skirts', value: 0 },
  {label: 'athletic wear', value: 0 },
  {label: 'T-shirts', value: 0 },
  {label: 'pants', value: 0 },
  {label: 'tanks', value: 0 },
  {label: 'flannel shirts', value: 0 },
  {label: 'jeans', value: 0 },
  {label: 'joggers/sweatpants', value: 0 }*/}
];
var jackets = [
  {label: 'jackets', value: 0 }
];
var sweaters = [
  {label: 'sweaters', value: 0 }
];
var dresses = [
  {label: 'dresses', value: 0 }
];
var shorts = [
  {label: 'shorts', value: 0 }
];
var skirts = [
  {label: 'skirts', value: 0 }
];
var athletic_wear = [
  {label: 'athletic wear', value: 0 }
];
var t_shirts = [
  {label: 'T-shirts', value: 0 }
];
var pants = [
  {label: 'pants', value: 0 }
];
var tanks = [
  {label: 'tanks', value: 0 }
];
var flannel_shirts = [
  {label: 'flannel shirts', value: 0 }
];
var jeans = [
  {label: 'jeans', value: 0 }
];
var joggers_sweatpants = [
  {label: 'joggers/sweatpants', value: 0 }
];

export default class CustomizeOccasion extends React.Component {
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
            what type(s) of occasion(s) do you need clothes for?
          </Text>
          <RadioForm
            radio_props={casual_shirts}
            initial={0}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={'#2196f3'}
            animation={true}
            onPress={() => {}}
          />

          {/*Radio buttons:
            https://www.npmjs.com/package/react-native-simple-radio-button*/}
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate('PaymentInfo');}}>
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
    marginTop: 100,
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
    borderRadius: 20,
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
