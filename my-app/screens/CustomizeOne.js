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
    choseMona: false,
    choseAnahita: false,
    choseLeilani: false,
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={styles.darkTextInputLabel}>CHOOSE A STYLIST:</Text>
          <TouchableOpacity
            onPress={this.chooseMona}>
            {this.state.choseMona == true? <Text style={styles.selectedText}>Mona Fang</Text>: <Text style={styles.darkTextInputLabel}>Mona Fang</Text>}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.chooseAnahita}>
            {this.state.choseAnahita == true? <Text style={styles.selectedText}>Anahita Tewatia</Text>: <Text style={styles.darkTextInputLabel}>Anahita Tewatia</Text>}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.chooseLeilani}>
            {this.state.choseLeilani == true? <Text style={styles.selectedText}>Leilani Salemme{"\n"}</Text>: <Text style={styles.darkTextInputLabel}>Leilani Salemme{"\n"}</Text>}
          </TouchableOpacity>
        </View>
        <Text style={styles.progressBarTitleText}>customize</Text>
        <Text style={styles.numGarmentsInputLabel}>tell us any special requests that you have</Text>
        <TextInput style = {styles.input} multiline = {true}
            underlineColorAndroid = "transparent"
            placeholderTextColor = "#A9A9A9"
            autoCapitalize = "none"/>
        <View style={{flexDirection: 'row', flex: 2}}>
          <View style={{alignItems: 'flex-start', flex: 2}}>
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate('StartSwap');}}>
              <Text style={styles.nextText}>back</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate('MyCart');}}>
              <Text style={styles.nextText}>next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  chooseMona = () => {
    this.setState({ choseMona: this.state.choseMona = true,
                    choseAnahita: this.state.choseAnahita = false,
                    choseLeilani: this.state.choseLeilani = false });
  }
  chooseAnahita = () => {
    this.setState({ choseMona: this.state.choseMona = false,
                    choseAnahita: this.state.choseAnahita = true,
                    choseLeilani: this.state.choseLeilani = false });
  }
  chooseLeilani = () => {
    this.setState({ choseMona: this.state.choseMona = false,
                    choseAnahita: this.state.choseAnahita = false,
                    choseLeilani: this.state.choseLeilani = true });
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
  selectedText: {
    color: 'white',
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
