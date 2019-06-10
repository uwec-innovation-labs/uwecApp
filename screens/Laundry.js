//Clearwater Labs 2019
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  RCTNativeAppEventEmitter,
  Picker
} from 'react-native'
import styles from '../assets/styles/LaundryStyles.js'
const axios = require('axios')

class LaundryScreen extends Component {
  static navigationOptions = {
    title: 'Laundry Notifier'
  }
  state = {
    laundryRoom: '',
    numDryers: '',
    numWashers: '',
    numDryersAvailable: '',
    numWashersAvailable: ''
  }

  updateLaundry = laundry => {
    //this.laundryRoomSelection(this.state.laundryRoom);
    axios({
      url: 'http://35.247.62.2:4000/graphql',
      method: 'post',
      data: {
        query: `
                        {
                            laundryRoom(building: "${laundry}") {
                                totalNumDryers
                                totalNumWashers 
                                dryersAvailable
                                washersAvailable
                            }
                        }
                        `
      }
    }).then(result => {
      this.setState({
        laundryRoom: laundry,
        numDryers: result.data.data.laundryRoom.totalNumDryers,
        numWashers: result.data.data.laundryRoom.totalNumWashers,
        numDryersAvailable: result.data.data.laundryRoom.dryersAvailable,
        numWashersAvailable: result.data.data.laundryRoom.washersAvailable
      })
    })
  }

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.laundryContainer}>
        <Text style={styles.title}>Select a Residence Hall</Text>
        <Picker
          selectedValue={this.state.laundryRoom}
          style={{}}
          onValueChange={(itemValue, itemIndex) =>
            this.updateLaundry(itemValue)
          }
        >
          <Picker.Item label="Bridgman" value="bridgman" />
          <Picker.Item label="Chancellors" value="chancellors" />
          <Picker.Item label="Governors" value="governors" />
          <Picker.Item label="Horan" value="horan" />
          <Picker.Item label="Karlgaard Towers" value="towers" />
          <Picker.Item label="Katharine Thomas" value="kt" />
          <Picker.Item label="Murray" value="murray" />
          <Picker.Item label="Oak Ridge" value="oak" />
          <Picker.Item label="Putnam" value="putnam" />
          <Picker.Item label="The Suites" value="suites" />
          <Picker.Item label="Sutherland" value="sutherland" />
        </Picker>
        <View style={styles.containerLaundryText}>
          <Text style={styles.laundryText}>
            Laundry Room Selected: {this.state.laundryRoom}
          </Text>
          <Text style={styles.laundryText}>
            Number of Washers Available: {this.state.numWashersAvailable}
          </Text>
          <Text style={styles.laundryText}>
            Number of Dryers Available: {this.state.numDryersAvailable}
          </Text>
          <Text style={styles.laundryText}>
            Total Washers: {this.state.numWashers} | Total Dryers:{' '}
            {this.state.numDryers}
          </Text>
        </View>
      </View>
    )
  }
}

export default LaundryScreen
