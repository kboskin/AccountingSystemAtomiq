import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source = {require('../../../images/logo.png')}
              style = {styles.logo}>
            </Image>
            <Text style = {styles.title}>Добро пожаловать!</Text>
            <Text style = {styles.titleLower}>Введите код для авторизации</Text>
          </View>

          <View style = {styles.formContainer}>
            <LoginForm/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#3493db'
  },
  logoContainer : {
    flexGrow : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  logo : {
    width : 120,
    height : 120
  },
  title : {
    color : '#fff',
    marginBottom : 10,
    fontSize : 22
  },
  titleLower : {
    color : '#fff',
    marginTop : 5,
    fontSize : 12
  }
});
