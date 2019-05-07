//Clearwater Labs 2019
import React, { Component } from 'react';
import { View, StyleSheet, Text, RCTNativeAppEventEmitter } from 'react-native';
import LaundryQuery from './LaundryQuery';


class LaundryScreen extends Component {
  static navigationOptions = {
    title: 'Laundry Notifier'
  };
  render() {
    //const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          <Text>Plz put information in me sully </Text>
         <LaundryQuery />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default LaundryScreen;
