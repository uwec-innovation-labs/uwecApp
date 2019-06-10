import React, { Component } from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import styles from '../assets/styles/StyleSheet.js'

class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About'
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.aboutText}>
          <Text>About Us</Text>

          <Text>
            This app is developed by Clearwater Labs in Eau Claire, WI
          </Text>

          <Text>Find us at</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.clearwaterlabs.org')}
          >
            <Text style={{ color: 'blue' }}>www.clearwaterlabs.org</Text>
          </TouchableOpacity>

          <Text>Version Alpha 1.0</Text>
          <Text>This app is currently under development</Text>
          <Text>Check back soon for new features!</Text>
          <Text>Questions, comments, concerns?</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('mailto:app@clearwaterlabs.org')}
          >
            <Text style={{ color: 'blue' }}>app@clearwaterlabs.org</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default AboutScreen
