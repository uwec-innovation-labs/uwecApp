import React, { Component } from 'react';
import { WebView } from 'react-native';

class BusTrackingScreen extends Component {
  static navigationOptions = {
    title: 'Bus Tracking'
  };
  render() {
    return (
      <WebView
        source={{ uri: 'https://ectbustracker.doublemap.com/map/' }}
        style={{ marginTop: 0 }}
      />
    );
  }
}
export default BusTrackingScreen;
