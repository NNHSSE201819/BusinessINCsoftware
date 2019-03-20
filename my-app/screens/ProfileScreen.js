import React, { Component} from 'react';
import {WebBrowser} from 'expo';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  AppRegistry,
  Alert,
  Button,
  Picker,
  TouchableHighlight,
  Modal,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ACA5A5',
    flex: 1
  },
  iconImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'grey',
    marginRight: 20,
    marginLeft: 20,
  },
  divider: {
    height: 10,
    backgroundColor: '#6f4141',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 75,
  },
  button: {
    flex: 1,
    justifyContent: 'center'
  },
  heading: {
    height: 50,
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#f6eab4'
  },
  textMain: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'black'
  },
  textLittle: {
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20,
  },
  hideModalText: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default class ProfileScreen extends Component {
  static navigationOptions = {
    header:null,
  };

  constructor() {
    super();
    this.state = {
      modalMona: false,
      modalAnahita: false,
      modalLeilani: false,
    }
  }

  meetMona(visible) {
    this.setState({modalMona: visible});
  }

  meetAnahita(visible) {
    this.setState({modalAnahita: visible});
  }

  meetLeilani(visible) {
    this.setState({modalLeilani: visible});
  }



  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalMona}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={{flex:1, alignItems:'center', backgroundColor: '#e2cce7'}}>
            <View style={{height: 100, backgroundColor: '#e2cce7'}}/>
            <Image
              style ={styles.iconImage}
              source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/your_profile_picture.jpg')}
            />
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Mona Fang</Text>
            <Text style={{textAlign: 'center',fontSize: 20, marginLeft: 15, marginRight: 15}}>
            is compelled to help solve the unsustainable problems of fashion.
            As a clothing sewing hobbyist, she enjoys designing and styling pieces of her own.
            Her personas range from laid-back to professional.
            She enjoys dressing business casual, cozy athleisure and soft grunge.
            Some days you’ll see her in some straight black trousers, mules with no socks and a blazer.
            Other days she’ll be wearing platform booties with stacked socks, jeans and a ripped sweater matching with jewelry.
            Mona believes that comfort is vital to looking cute.
            But it is also important to showcase your inner spirit.
            When tailoring a person’s outfit, color palette and garment figure must be considered to create the best unique look.
            </Text>
            <TouchableHighlight
              onPress={() => {
                this.meetMona(!this.state.modalMona)}}
              style={{marginTop: 25, backgroundColor: '#7E5197'}}
            >
              <Text style={styles.hideModalText}>Close</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalAnahita}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={{flex:1, alignItems:'center', backgroundColor: '#a8daf9'}}>
            <View style={{height: 100, backgroundColor: '#a8daf9'}}/>
            <Image
              style ={styles.iconImage}
              source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/anahita.jpg')}
            />
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Anahita</Text>
            <Text style={{textAlign: 'center',fontSize: 20, marginLeft: 15, marginRight: 15}}>
            is part of the circular fashion initiative because she really appreciates the notion that second-hand clothing has a rich history and the idea that when you trade clothing with someone, it’s as if you’re giving each other a piece of your histories. Her style is very preppy-chic, and she can usually be seen wearing dresses and skirts. Anahita’s style icon is young Brooke Shields, and she believes the most important fashion accessory is a killer pair of shoes and a matching confidence. Her vision for the future is one where people stop throwing their clothing away and start showing it some love.
            </Text>
            <TouchableHighlight
              onPress={() => {
                this.meetAnahita(!this.state.modalAnahita)}}
              style={{marginTop: 25, backgroundColor: '#0099cc'}}
            >
              <Text style={styles.hideModalText}>Close</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalLeilani}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={{flex:1, alignItems:'center', backgroundColor: '#4CD4B2'}}>
            <View style={{height:100, backgroundColor:'#4cd4b2'}}/>
            <Image
              style ={styles.iconImage}
              source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/leilani.jpg')}
            />
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Leilani</Text>
            <Text style={{textAlign: 'center',fontSize: 20, marginLeft: 15, marginRight: 15}}>
            is a young woman looking to make some sort of impact, whether it be big or small. She has always been interested in helping the environment throughout her life. As for her style, she wears pretty much anything that she feels comfortable in. To her, it doesn't matter where the clothing comes from as long as she feels confident and happy; that's all that matters to her. Style360 brings to life the idea that she can still wear clothing that she feels comfortable in and at the same time promote circular fashion.
            </Text>
            <TouchableHighlight
              onPress={() => {
                this.meetLeilani(!this.state.modalLeilani)}}
              style={{marginTop: 25, backgroundColor:'#008766'}}
            >
              <Text style={styles.hideModalText}>Close</Text>
            </TouchableHighlight>
          </View>
        </Modal>


        <View style ={styles.profileHeader}>
          <Image
            style ={styles.iconImage}
            source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/style.png')}
          />
          <Text style ={styles.textMain}>
            Insert Name Here
          </Text>
        </View>

        <View style ={styles.divider}/>

        <View style={styles.heading}>
          <TouchableHighlight
            onPress={() => {Alert.alert('Modal has been closed.')}}
            style ={styles.button}
          >
            <Text style ={styles.textMain}>Personal Info</Text>
          </TouchableHighlight>
        </View>

        <View style ={styles.divider}/>

        <View style={styles.heading}>
          <TouchableHighlight
            onPress={() => {Alert.alert('Modal has been closed.')}}
            style ={styles.button}
          >
            <Text style ={styles.textMain}>Style Profile</Text>
          </TouchableHighlight>
        </View>

        <View style ={styles.divider}/>

        <View style={styles.heading}>
          <TouchableHighlight
            onPress={() => {Alert.alert('Modal has been closed.')}}
            style ={styles.button}
          >
            <Text style ={styles.textMain}>Transaction History</Text>
          </TouchableHighlight>
        </View>

        {/* New subset of information */}

        <View style ={styles.divider}/>

        <View style={{marginTop: 10, marginBottom: 20}}>
          <Text style ={styles.textMain}>Mission</Text>
          <Text style ={styles.textLittle}>
            As a personalized swap service, we provide a cost-effective means to stay stylish
            without compromising the environment. Help us combat the unsustainability and waste
            production of the clothing industry.
          </Text>
        </View>

        <View>
          <Text style ={styles.textMain}>Choose Your Stylists</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 10}}>
          <TouchableOpacity
            onPress={() => this.meetMona(true)}
            style={{alignItems: 'center'}}>
              <Image
                style ={styles.iconImage}
                source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/your_profile_picture.jpg')}
              />
              <Text>Mona Fang</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.meetAnahita(true)}
            style={{alignItems: 'center'}}>
              <Image
                style ={styles.iconImage}
                source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/anahita.jpg')}
              />
              <Text>Anahita</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.meetLeilani(true)}
            style={{alignItems: 'center'}}>
              <Image
                style ={styles.iconImage}
                source={require('/Users/nn121local/Documents/GitHub/BusinessINCsoftware/my-app/assets/images/leilani.jpg')}
              />
              <Text>Leilani</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}
