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
  Modal,
  TouchableHighlight,
} from 'react-native';
import {StackNavigator} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ACA5A5',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  mainImage: {
    flex: 1
  },
  image: {
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
})


export default class GetPointsScreen extends Component {
  static navigationOptions = {
    header:null,
    title: 'GetPointsScreen',
  };

  constructor(props) {
    super(props);
    this.state = {
      modal: true,
    };
  };

  closeModal(visible) {
    this.props.navigation.navigate('HomeScreen');
    this.setState({modal: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="none"
          transparent={false}
          visible={this.state.modal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');}}>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <TouchableHighlight
              onPress={() => {
                this.closeModal(false)}}
              style={{flex:1, alignItems:'center', justifyContent:'center'}}
            >
            <Image
              source={require('../assets/images/getpoints.jpg')}
            />
            </TouchableHighlight>
          </View>
        </Modal>
        <Image
          style ={styles.image}
          source={require('../assets/images/logo.png')}
        />
        <Text style={styles.mainText}>
          More! {"\n"} Coming soon
        </Text>
      </View>
    );
  }
}
