/* @flow */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ListView,
  TouchableOpacity,
  ToastAndroid,
  Image

} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import NavigationGrid from './NavigationGrid'
import GridView from 'react-native-super-grid';


export default class MainGrid extends Component {

  constructor(props) {
      super(props);
      this.state = {
          items : [],
          navigationItems : []
      }
  }
  componentDidMount()
  {
    for (let x = 1; x <= 30; x++) {
      this.state.items.push({
        name: `Grid ${x}`,
        price : `${x}$`
      });
    }
    for (let x = 1; x <= 10; x++) {
      this.state.navigationItems.push({
        name: `NavGrid ${x}`,
        price : `${x}$`
      });
    }
  }
  render() {

    return (
      <View style={styles.container}>
      <GridView
        style = {{height : Dimensions.get('window').height/5 + 90}}
        horizontal = {true}
        itemDimension={100}
        items={this.state.navigationItems}
        renderItem={item => (
          <TouchableOpacity
            style={styles.item}
            onPress = {() =>
              ToastAndroid.show(item.name, ToastAndroid.SHORT)
              }>
          <Image style={{borderRadius : 40,
              height  : 80,
              width : 80,
              top: 0,
              marginTop : 0,
              marginLeft : 10,
              position : 'absolute'}}
            source={require('../../../images/coffee.jpg')}/>
          <Text style ={{
            fontSize: 18,
            textAlign: 'center',
            width : '100%',
            color: '#fff',
            bottom: 0,
            marginBottom : 0,
            opacity: 0.5,
            position : 'absolute',
            backgroundColor: 'transparent',
          }} >{item.name}</Text>
          </TouchableOpacity>
        )}/>
      <GridView
        style = {{height : Dimensions.get('window').height - Dimensions.get('window').height/5 - 40}}
        itemDimension={100}
        items={this.state.items}
        renderItem={this.renderGridItem}/>
      </View>
    );
  }

  renderGridItem = (item) => (
      <TouchableOpacity
        style={styles.item}
        onPress = {() =>
          ToastAndroid.show(item.name, ToastAndroid.SHORT)
          }>
        <ImageBackground style={{flex : 1}}
        source={require('../../../images/coffee.jpg')}/>
        <Text style={styles.name}>
          {item.name}
        </Text>
        <Text style={styles.price}>
          {item.price}
        </Text>
      </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 4,
    display: 'flex',
    flexDirection : 'column',
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  flex: {
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    height: 100,
    backgroundColor : 'rgba(200, 0, 0, 0.6)',
    width : 100,
    marginRight : 16,
    padding: 0,
  },
  name: {
    fontSize: 14,
    textAlign: 'left',
    position : 'absolute',
    width : '100%',
    color: '#000000',
    bottom: 0,
    paddingLeft : 10,
    marginBottom : 0,
    opacity: 0.5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  price : {
    fontSize: 14,
    width : '100%',
    position : 'absolute',
    textAlign: 'right',
    marginBottom : 0,
    bottom: 0,
    paddingRight : 5,
    color: 'red',
  }
});
