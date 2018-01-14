import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/components/login/Login';
import {StackNavigator} from 'react-navigation';
import MainScreen from './src/components/main/MainScreen';

export default class App extends React.Component {
  static navigationOptions = { title: 'Welcome', header: null };

  render() {
    return (
        <AppNavigation />
    );
  }
}
const AppNavigation = StackNavigator({
  LoginScreen : {screen : Login},
  MainScreen : {screen : MainScreen},
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
