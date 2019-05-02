import React from 'react';
import { ScrollView,
  StyleSheet,
  Button,
  Alert,
  View,
  TouchableHighlight,
  Text,
  Modal,
  TextInput,
  Dimensions } from 'react-native';
import { MonoText } from '../components/StyledText';
import { WebBrowser } from 'expo';
import TabBarIcon from '../components/TabBarIcon';
import { Platform } from 'react-native';
import { Icon } from 'expo';

export default class SwapProgressScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    buttonClicked: 0,
    progressSteps: ["Order Received", "Outfits Assembled", "Order Shipped", "Order Delivered"],
  }

  render() {
    return (
      <View style={styles.contentContainer}>
        <View style={{alignItems: 'flex-start'}}>
          <Button
            onPress={this.startSwapPress}
            title="Refresh"
            color="#383434"
          />
        </View>
        <View style={{height:30}} />
        <Text style={styles.progressBarTitleText}>Swap Progress</Text>
        <View style={styles.progressBarView}>
          {this.state.buttonClicked == 1? <View style={styles.progressBar1View} />: null}
          {this.state.buttonClicked == 2? <View style={styles.progressBar2View} />: null}
          {this.state.buttonClicked == 3? <View style={styles.progressBar3View} />: null}
          {this.state.buttonClicked >= 4? <View style={styles.progressBar4View} />: null}
        </View>
        <View>
          {this.updateProgressDetails}
          {this.state.buttonClicked >= 4? <Text style={styles.progressStatusText}>{this.state.progressSteps[3]}</Text>: null}
          {this.state.buttonClicked >= 3? <Text style={styles.progressStatusText}>{this.state.progressSteps[2]}</Text>: null}
          {this.state.buttonClicked >= 2? <Text style={styles.progressStatusText}>{this.state.progressSteps[1]}</Text>: null}
          {this.state.buttonClicked >= 1? <Text style={styles.progressStatusText}>{this.state.progressSteps[0]}</Text>: null}
        </View>
      </View>
    );
  }

  startSwapPress = () => {
    this.setState({ buttonClicked: this.state.buttonClicked + 1});
  }

  updateProgressDetails = () => {
    var text = [];
    for(var i = this.state.buttonClicked - 1; i >= 0; i--){
      text.push(
        <View>
          <Text style={{textAlign: 'right'}}>{this.state.progressSteps[i]}</Text>
        </View>
      )
      console.log(this.state.progressSteps[i]);
    }
    return(
        {text}
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
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
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 20
  },
  progressBarView: {
    marginTop: 10,
    marginBottom: 20,
    height: 20,
    borderWidth: 2.5,
    borderColor: '#000000',
  },
  progressBar1View: {
    marginRight: Dimensions.get('screen').width*.75,
    height: 15,
    backgroundColor: '#08BC40'
  },
  progressBar2View: {
    marginRight: Dimensions.get('screen').width*.5,
    height: 15,
    backgroundColor: '#08BC40'
  },
  progressBar3View: {
    marginRight: Dimensions.get('screen').width*.25,
    height: 15,
    backgroundColor: '#08BC40'
  },
  progressBar4View: {
    height: 15,
    backgroundColor: '#08BC40'
  },
  nextText: {
    color: '#383434',
    fontSize: 24,
    paddingTop: 30,
    fontFamily: 'Helvetica',
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
