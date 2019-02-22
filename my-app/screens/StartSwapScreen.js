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

export default class StartSwapScreen extends React.Component {
  static navigationOptions = {
    title: 'Start Swap',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <Text style={styles.questionText}>Name: *</Text>
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "First Name"
               //placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               //onChangeText = {this.handleEmail}
               />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    //alignItems: 'center'
  },
  contentContainer: {
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
      //margin: 15,
      height: 40,
      //borderColor: '#7a42f4',
      borderWidth: 1,
  },
  /*welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }*/
});
