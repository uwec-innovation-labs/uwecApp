import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import LaundryScreen from './Laundry.js';
import styles from './StyleSheet';
import SpectatorScreen from './Spectator.js';
import BusTrackingScreen from './BusTracking.js';
import AboutScreen from './About.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'UWEC',
    headerStyle: {},
    headerTitleStyle: {
      position: 'absolute',
      left: 0
    }
  };

  render = () => {
    return (
      <View style={styles.container}>
        <View style={styles.laundryView}>
          <Text>Laundry Notifier</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Laundry')}
          >
            <Image
              style={styles.laundryImage}
              source={require('./assets/laundry.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.newsAndCarText}>
          <Text style={styles.newsText}> Spectator</Text>
        </View>
        <View style={styles.newsAndCarView}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Spectator')}
          >
            <Image
              style={styles.newsImage}
              source={require('./assets/index.png')}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.newsAndCarText}>
          <Text>Bus Tracking</Text>
        </View>
        <View style={styles.newsAndCarView}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('BusTracking')}
          >
            <Image
              style={styles.newsImage}
              source={require('./assets/bus.png')}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.newsAndCarText}>
          <Text>About</Text>
        </View>
        <View style={styles.newsAndCarView}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('About')}
          >
            <Image
              style={styles.newsImage}
              source={require('./assets/lineLogo.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  };
}

const HomePageNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Laundry: { screen: LaundryScreen },
  Spectator: { screen: SpectatorScreen },
  BusTracking: { screen: BusTrackingScreen },
  About: { screen: AboutScreen }
});

const App = createAppContainer(HomePageNavigator);
export default App;
