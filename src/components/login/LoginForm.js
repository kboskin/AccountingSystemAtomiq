/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  ToastAndroid
} from 'react-native';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

  }

  render() {
    return (

      <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}>

        <TextInput
           placeholder = "ваш пароль"
           placeholderTextColor = '#fff'
           underlineColorAndroid = {'transparent'}
           style = {styles.input}
           secureTextEntry
           onChangeText={(text) => {this.setState({text})}}>
         </TextInput>

        <TouchableOpacity
          style= {styles.buttonContainer}
          onPress = {() =>
            this.navigateToMainPage()
            }>
            <Text  style= {styles.buttonText}>Войти</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>


    );
  }

  navigateToMainPage()
  {
    this.fetchDataFromServer()
    this
      .props
      .navigation
      .navigate('MainScreen');
  }
  fetchDataFromServer()
  {
    ToastAndroid.show(this.state.text, ToastAndroid.SHORT)
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input : {
    backgroundColor : 'rgba(255, 255, 255, 0.2)',
    height : 40,
    marginBottom : 10,
    color : '#FFF',
    fontSize : 16
  },
  buttonContainer : {
    backgroundColor : '#00B241',
    paddingVertical : 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 30
  },
  buttonText : {
    textAlign : 'center',
    color : '#fff'
  }
});
