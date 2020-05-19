import React, { Component } from 'react';
import { View, TextInput, Switch, TouchableOpacity } from 'react-native';

class Dummy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
    };
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => {this.setState({text})}}
          testID="text-input" />

        <TouchableOpacity
          onPress={() => {this.setState({text: ''})}}
          testID="touchable-opacity" />
          
        <Switch />
      </View>
    );
  }
}

export default Dummy;
