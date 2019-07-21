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
import { Permissions, Notifications } from 'expo'
const PUSH_REGISTRATION_ENDPOINT = 'http://3217019a.ngrok.io/token'
const MESSAGE_ENDPOINT = 'http://3217019a.ngrok.io/message'
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'UWEC',
    headerStyle: {},
    headerTitleStyle: {
      position: 'absolute',
      left: 0
    }
  }
  state = {
    currentDegrees: '',
    currentPrecipitation: 0,
    currentStatus: '',
    notification: null,
    messageText: ''
  }
  registerForPushNotifications = async () => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    if (status !== 'granted') {
      return
    }
    let token = await Notifications.getExpoPushTokenAsync()
    this.notificationSubscription = Notifications.addListener(
      this.handleNotification
    )
    return fetch(PUSH_REGISTRATION_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: {
          value: token
        },
        user: {
          username: 'uwec',
          name: 'uwecApp'
        }
      })
    })
  }

  handleNotification = notification => {
    this.setState({ notification })
  }
  componentDidMount() {
    this.registerForPushNotifications()
  }
  weather = () => {
    axios({
      url: 'http://15a6452d.ngrok.io/graphql',
      method: 'post',
      data: {
        query: `
        {
          weather {
            degrees
            status
            precipitation
          }
        }
        `
      }
    }).then(result => {
      this.setState({
        currentDegrees: result.data.data.degrees,
        currentPrecipitation: result.data.data.precipitation,
        currentStatus: result.data.data.precipitation
      })
    })
  }

  render = () => {
    //this.registerForPushNotifications()
    return (
      <View style={styles.topContainer}>
        <Text />
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
        <View style={styles.bottomContainer}>
          <Text>Pardon our dust this app is still under construction!</Text>
          <Text>Check back soon for new features and exciting updates!</Text>
        </View>
        {this.state.notification ? this.renderNotification() : null}
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
