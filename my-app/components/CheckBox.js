import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
})

class MyForm extends Component {
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
  {/*when including a class including a Checkbox component, make sure
    to import at the top*/}
}

export default class Checkbox extends Component {

  static propTypes = {
    onToggle: PropTypes.func,
    isChecked: PropTypes.bool,
  }

  render() {
    const {onToggle, isChecked} = this.props

    return (
      <TouchableOpacity onPress={onToggle}>
        <View style={styles.box}>
          { isChecked && <View style={styles.inner}/> }
        </View>
      </TouchableOpacity>
    )
  }
}
