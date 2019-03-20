import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import { WebBrowser } from 'expo';



import { MonoText } from '../components/StyledText';

export default class InventoryScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(){
    super();
    this.state = {
      modals1: false,
    }
  }

  setModals1(visible){
    this.setState({modals1: visible})
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Inventory</Text>
          </View>

          <View style={styles.menuContainer}>

            <TouchableOpacity onPress={this._shirt} style={styles.button}>
              <Text style={styles.menuText}>Shirts</Text>
            </TouchableOpacity>

            <Text style={styles.menuText}>   </Text>

            <TouchableOpacity onPress={this._handleHelpPress} style={styles.button}>
              <Text style={styles.menuText}>Pants</Text>
            </TouchableOpacity>

            <Text style={styles.menuText}>   </Text>

            <TouchableOpacity onPress={this._handleHelpPress} style={styles.button}>
              <Text style={styles.menuText}>Dresses</Text>
            </TouchableOpacity>

            <Text style={styles.menuText}>   </Text>

            <TouchableOpacity onPress={this._handleHelpPress} style={styles.button}>
              <Text style={styles.menuText}>Shoes</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.container2}>
            <Text style={styles.divide}></Text>
            <Text style={styles.subText}>Shirts</Text>
            <Text style={styles.divide}></Text>

            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals1(true)}}xs>
                <Image style={styles.pic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals1}
              >
                <View style={styles.modalview}>
                  <Image style={styles.modalpic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>
                  <TouchableOpacity onPress={() => {this.setModals1(false)}}xs>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
                <Image style={styles.pic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>
                <Image style={styles.pic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>
                <Image style={styles.pic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>



            </View>
            <View style={styles.pic2} >
              <Image style={styles.pic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>
              <Image style={styles.pic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>
              <Image style={styles.pic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>
              <Image style={styles.pic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>



            </View>
            <View style={styles.pic2} >
              <Image style={styles.pic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>
              <Image style={styles.pic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>
              <Image style={styles.pic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>
              <Image style={styles.pic} source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/1.jpeg')}/>



            </View>
            <Text style={styles.divide}></Text>








            <View>
              <Text id="p" style={styles.subText}>Pants</Text>
              <Text style={styles.divide}></Text>
              <Text style={styles.subText}>Dresses</Text>
              <Text style={styles.divide}></Text>
              <Text style={styles.subText}>Shoes</Text>
              <Text style={styles.divide}></Text>
            </View>







          </ScrollView>
      </View>

    );
  }


}

const styles = StyleSheet.create({
  header:{
    fontSize: 70,
    fontWeight: 'bold',
    marginTop: 30,
    position: 'absolute',


  },
  modalview:{alignItems: 'center',},
  modalpic:{
    alignItems: 'center',
    height: 300,
    width: 300,
  },
  back:{
    marginBottom:10,
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',

  },
  headerContainer:{
    marginTop: 40,
    alignItems: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#aca585',
  },
  menuContainer: {
    marginTop: 110,
    alignItems: 'center',
    flexDirection:'row',
    paddingLeft: 70,

  },

  container2: {
    flex: 1,


  },
  menuText: {
    fontSize: 20,


  },
  button: {
    fontSize: 14,
    color: '#2e78b7',
    alignItems: 'center',




  },
  subText: {
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  pic:{
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 100,
    width: 100,

  },
  pic2:{flexDirection:'row',
  backgroundColor: 'white',
  alignItems: 'center',},
  divide:{
    backgroundColor: 'gray',
  },
});
