/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert
} from 'react-native';

export default class NavigationItem extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            count : 1,
            name : this.props.name,
            price : this.props.price,
            i : this.props.id,
        }
    }
    handleWarning()
    {
          Alert.alert(
              'Ах ты маленький воришка',
              'Решил подзаработать деньжат за счет кофейни? Не бывает отрицательного количества товаров! \n\n Побойся Боженьку (владельца)',
               [
                 {
                    text: 'Покаяться',
                      onPress: () => {
                      }
                 },
                 {
                    text: 'Согрешить',
                      onPress: () => {
                          console.log('Согрешил pressed');
                      },
                  }
              ], {
                  cancelable: false
              }
          )
          return true;
    }
    render(){
        return(
            <View style={styles.navigationItemStyle} key= {this.state.i}>
            <StatusBar hidden = {true}/>
            <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}}>{this.state.name}</Text>
            <Text style={{margin: 10, fontSize: 20, textAlign: 'right'}}>{this.state.price+ "  " + "UAN"} </Text>
            <TouchableOpacity
                style = {styles.opacityButtonStyle}
                onPress = {() => {
                    this.setState({
                        count : this.state.count + 1
                    })
                console.log(this.state.count)}}>
                <Image style={styles.imageStyle} source={require('../../../images/plus-flat.png')} />
            </TouchableOpacity>
            <Text style={{margin: 10, marginRight : 10, fontSize: 20, textAlign: 'left'}}>{this.state.count}</Text>
            <TouchableOpacity
                style = {styles.opacityButtonStyle}
                onPress = {() => {
                    if (this.state.count > 1) {
                      this.setState({
                          count : this.state.count - 1
                      })
                    }
                    else {
                      this.handleWarning()
                    }
                 }}>
                 <Image style={styles.imageStyle} source={require('../../../images/minus-flat.png')} />
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigationItemStyle : {
        marginTop : 10,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        flexDirection : 'row',
    },
    opacityButtonStyle: {
        height : 50,
        width : 50,
        alignItems : 'center'
    },
    imageStyle : {
        marginTop : 7.5,
        height : 35,
        width : 35,
        borderRadius : 25,
    }
});
