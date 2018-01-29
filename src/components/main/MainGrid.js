/* @flow */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import GridLayout from 'react-native-layout-grid';

export default class MainGrid extends Component {
  render() {
    const items = [];
    for (let x = 1; x <= 30; x++) {
      items.push({
        name: `Grid ${x}`
      });
    }
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          <GridLayout
            items={items}
            itemsPerRow={5}
            renderItem={this.renderGridItem}
          />
        </View>
      </View>
    );
  }

  renderGridItem = (item) => (
      <View style={styles.item}>
        <View style={styles.flex} />
        <Text style={styles.name}>
          {item.name}
        </Text>
      </View>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  item: {
    height: 100,
    backgroundColor: '#CCCCCC',
    padding: 0,
  },
  name: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000000',
    bottom: 0,
    marginBottom : 0,
    opacity: 0.5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});
