import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/login/Login';

export default class App extends React.Component {
  render() {
    return (
        <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
