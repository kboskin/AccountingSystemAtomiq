/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';


export default class NavigationGrid extends Component {

  constructor(props) {
      super(props);
      this.state = {
          items : [],
      }
  }

  componentDidMount()
  {
    for (let x = 1; x <= 10; x++) {
      this.state.items.push({
        name: `Grid ${x}`,
        price : `${x}$`
      });
    }
  }


  render() {
    return (
      <GridView
        itemDimension={100}
        items={this.state.items}
        renderItem={this.renderGridItem}
        horizontal = {true}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
