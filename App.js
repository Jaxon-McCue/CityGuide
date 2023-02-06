import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { Component } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import data from './location.json';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const cityIcon = require('./images/chicago.png');

export default class App extends React.Component {
  renderRow({ item }) {
    return (
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={cityIcon} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.description}>
            <Text>{item.address}</Text>
            <Text style={styles.url}>{item.modifiedURL}</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>City Guide</Text>
          <FlatList data={data} renderItem={this.renderRow} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede2e0',
  },
  title: {
    backgroundColor: '#1c7da5',
    color: '#ede2e0',
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
    fontSize: 18,
  },
  row: {
    borderColor: '#7b7983',
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  iconContainer: {
    backgroundColor: '#1f3243',
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  info: {
    flex: 1,
    paddingLeft: 15,
  },
  icon: {
    height: 45,
    width: 45,
  },
  name: {
    color: '#122737',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#3c4f62',
    fontSize: 16,
  },
  url: {
    fontStyle: 'italic',
  }
});
