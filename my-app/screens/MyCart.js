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
  Image,
  TextInput, } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput,
  RadioButtonLabel} from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-check-box';
import { MonoText } from '../components/StyledText';
import { WebBrowser } from 'expo';
import { FullCheckBox } from '../components/FullCheckBox';


export default class MyCart extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    casualShirts: false,
    jackets: false,
    sweaters: false,
    dresses: false,
    shorts: false,
    skirts: false,
    athleticWear: false,
    tshirts: false,
    pants: false,
    tanks: false,
    flannels: false,
    jeans: false,
    joggers_sweatpants: false,
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.progressBarTitleText}>my cart</Text>
        <View style={{height:10}} />
        <View style={styles.topDivider} />
        <View style={{height:10}} />
        <View style={{flexDirection: 'row', flex: 2}}>
          <Image
            style ={styles.image}
            source={require('../assets/images/myCart1.jpg')}
          />
          <View style={{width:30}} />
          <Text style={styles.nextText}>points: 550</Text>
        </View>
        <View style={styles.bottomDivider} />
        <View style={{flexDirection: 'row', flex: 2}}>
          <Image
            style ={styles.image}
            source={require('../assets/images/myCart2.jpg')}
          />
          <View style={{width:30}} />
          <Text style={styles.nextText}>points: 300</Text>
        </View>
        <View style={styles.bottomDivider} />
        <View style={{flexDirection: 'row', flex: 2}}>
          <Image
            style ={styles.image}
            source={require('../assets/images/myCart3.jpg')}
          />
          <View style={{width:30}} />
          <Text style={styles.nextText}>points: 1000</Text>
        </View>
        <View style={{flexDirection: 'row', flex: 2}}>
          <View style={{alignItems: 'flex-start', flex: 2}}>
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate('CustomizeOne');}}>
              <Text style={styles.nextText}>back</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate('PaymentInfo');}}>
              <Text style={styles.nextText}>next</Text>
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
    marginBottom: 20,
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
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 15,
    marginTop: 15
  },
  topDivider: {
    height: 10,
    backgroundColor: '#6F4141'
  },
  bottomDivider: {
    height: 3,
    backgroundColor: '#654321',
    marginLeft: 35,
    marginRight: 35,
  }
});
