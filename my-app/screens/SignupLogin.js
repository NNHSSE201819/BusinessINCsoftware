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
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImage: {
    width: 350,
    height: 175,
    marginBottom: 100,
  },
  mainText: {
    fontSize: 50,
    margin: 10,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: 'goldenrod'
  },
  subText: {
    fontSize: 30,
    margin: 10,
    fontFamily: 'Avenir',
    textAlign: 'center'
  },
  iconImage: {
    width: 50,
    height: 50
  }
});

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{height:300}} />
        <View>
          <Image
            style ={styles.mainImage}
            source={require('/Users/nn121local/GitHub/BusinessINCsoftware/my-app/assets/images/style.png')}
          />
        </View>
        <View style={{height:100}} />
        <View style={{alignItems: 'center'}}>
          <Text style ={styles.mainText}>
            Our Mission
          </Text>
          <Text style={styles.subText}>
            As a personalized swap service, we provide a cost-effective means to stay stylish
            without compromising the environment. Help us combat the unsustainability and waste
            production of the clothing industry.
          </Text>
          <Text style={styles.mainText}>
            Meet Our Stylists
          </Text>
        </View>
      </ScrollView>
    );
  }
}



{/*import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Text>
          Style 360
        </Text>
        <Image
          source = {{uri: 'https://facebook.github.io/react-native/img/header_logo.png'}}
          style = {{width: 55, height: 55}}
        />
      </View>

    );
  }
}

  /*_maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
}); */}
