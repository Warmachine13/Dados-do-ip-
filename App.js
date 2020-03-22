/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NetworkInfo } from "react-native-network-info";

export default () => {

  useEffect(async () => {
    let ip = await NetworkInfo.getIPAddress();

    AsyncStorage.setItem('IP', JSON.stringify(ip));
    console.warn(ip);

    try {
      //'http://ip-api.com/json/' + ip
      let response = await fetch('https://ip-api.com/json/');
      let responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.warn(error);
    }

  }, []);

  return (
    <View style={styles.container}>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
