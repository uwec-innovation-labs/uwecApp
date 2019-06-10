import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import styles from '../app-assets/app-styles/SpectatorStyles.js.js.js'

class SpectatorScreen extends Component {
  static navigationOptions = {
    title: 'Spectator'
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text> EXTRA EXTRA READ ABOUT IT </Text>
      </View>
    )
  }
}

export default SpectatorScreen
