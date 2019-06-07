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
      <View>
        <View style={styles.navigationContainer}>
          <View style={styles.navigationBox}>
            <Text style={styles.navigationText}>Laundry Notifier</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Laundry')}
            >
              <Image
                style={styles.navigationImage}
                source={require('./assets/laundry.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.navigationBox}>
            <Text style={styles.navigationText}> Spectator</Text>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Spectator')}
            >
              <Image
                style={styles.navigationImage}
                source={require('./assets/news.png')}
                resizeMode="contain"
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.navigationContainer}>
          <View style={styles.navigationBox}>
            <Text style={styles.navigationText}>Bus Tracking</Text>
            <View>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate('BusTracking')}
              >
                <Image
                  style={styles.navigationImage}
                  source={require('./assets/bus.png')}
                  resizeMode="contain"
                />
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.navigationBox}>
            <Text style={styles.navigationText}>About</Text>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('About')}
            >
              <Image
                style={styles.navigationImageLogo}
                source={require('./assets/lineLogo.png')}
                resizeMode="contain"
              />
            </TouchableHighlight>
          </View>
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
