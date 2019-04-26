import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import CheckBox from '../components/CheckBox';

export default class FullCheckBox extends Component {
  state = {
    checkboxChecked: false,
  }
  render() {
    return (
      <View>
      <Checkbox isChecked={this.state.checkboxChecked}
        onToggle={this.handleCheck}/>
      </View>)
  }
  handleCheck = () => {
    this.setState({checkboxChecked: !this.state.checkboxChecked})
  }
}
