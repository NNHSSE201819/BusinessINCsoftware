import React from 'react';
import { ScrollView,
  StyleSheet,
  Button,
  Alert,
  View,
  TouchableHighlight,
  Text,
  TextInput, } from 'react-native';
import { MonoText } from '../components/StyledText';
import { WebBrowser } from 'expo';

export default class StartSwapScreen extends React.Component {
  static navigationOptions = {
    title: 'Start Swap',
  }
  state = {
    buttonClicked: 0
  }

  render() {
    const progressSteps = ["Order Received", "Outfits Assembled", "Order Shipped", "Order Delivered"];
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.progressBarTitleText}>Swap Progress</Text>
          <View style={styles.progressBarView}>
            {this.state.buttonClicked == 1? <View style={styles.progressBar1View} />: null}
            {this.state.buttonClicked == 2? <View style={styles.progressBar2View} />: null}
            {this.state.buttonClicked == 3? <View style={styles.progressBar3View} />: null}
            {this.state.buttonClicked == 4? <View style={styles.progressBar4View} />: null}
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.progressBarLabelText}>Received</Text>
            <Text style={styles.progressBarLabelText}>Assembled</Text>
            <Text style={styles.progressBarLabelText}>Shipped</Text>
            <Text style={styles.progressBarLabelText}>Delivered</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableHighlight onPress={this.startSwapPress}
            underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Start Swap!</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            {/*{this.state.buttonClicked == 1? <Text style={{textAlign: 'right'}}>Order Received!</Text>: null}*/}
            {this.updateProgressDetails}
          </View>
        </ScrollView>
      </View>
    );
  }

  startSwapPress = () => {
    this.setState({ buttonClicked: this.state.buttonClicked + 1});
    WebBrowser.openBrowserAsync('https://www.thestyle360.com/swap');
  }

  updateProgressDetails = () => {
    var text = [];
    for(var i = this.state.buttonClicked - 1; i >= 0; i--){
      text.push(
        <View>
          <Text style={{textAlign: 'right'}}>{progressSteps[i]}</Text>
        </View>
      )
    }
    console.log(text);
    return(
      <View>
        {text}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
    //alignItems: 'center'
  },
  contentContainer: {
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  progressBarTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  progressBarLabelText: {
    paddingTop: 5,
    marginLeft: 25,
    marginBottom: 25,
  },
  progressBarView: {
    marginTop: 20,
    width: 375,
    height: 50,
    borderWidth: 2.5,
    borderColor: '#000000'
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
  input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
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
