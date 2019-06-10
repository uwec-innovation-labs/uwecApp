import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions
} from 'react-native'
import LaundryScreen from './screens/Laundry.js'
import styles from './assets/styles/HomeScreenStyles.js'
import SpectatorScreen from './screens/Spectator.js'
import BusTrackingScreen from './screens/BusTracking.js'
import AboutScreen from './screens/About.js'
import { createStackNavigator, createAppContainer } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'UWEC',
    headerStyle: {},
    headerTitleStyle: {
      position: 'absolute',
      left: 0
    }
  }

  render = () => {
    return (
      <View style={styles.topContainer}>
        <View style={styles.navigationContainer}>
          <View style={styles.navigationContainerChild}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Laundry')}
            >
              <View style={styles.navigationBox}>
                <Text style={styles.navigationText}>Laundry Notifier</Text>

                <Image
                  style={styles.navigationImage}
                  source={require('./assets/images/laundry.png')}
                  resizeMode={'contain'}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Spectator')}
            >
              <View style={styles.navigationBox}>
                <Text style={styles.navigationText}> Spectator</Text>
                <Image
                  style={styles.navigationImage}
                  source={require('./assets/images/news.png')}
                  resizeMode={'contain'}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.navigationContainerChild}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('BusTracking')}
            >
              <View style={styles.navigationBox}>
                <Text style={styles.navigationText}>Bus Tracking</Text>

                <Image
                  style={styles.navigationImage}
                  source={require('./assets/images/bus.png')}
                  resizeMode={'contain'}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('About')}
            >
              <View style={styles.navigationBox}>
                <Text style={styles.navigationText}>About Us</Text>

                <Image
                  style={styles.navigationImageLogo}
                  source={require('./assets/images/logo.png')}
                  resizeMode={'contain'}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const HomePageNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Laundry: { screen: LaundryScreen },
  Spectator: { screen: SpectatorScreen },
  BusTracking: { screen: BusTrackingScreen },
  About: { screen: AboutScreen }
})

const App = createAppContainer(HomePageNavigator)
export default App
