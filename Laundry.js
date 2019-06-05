//Clearwater Labs 2019
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  RCTNativeAppEventEmitter,
  Picker
} from 'react-native';
const axios = require('axios');
import { LaundryQuery } from './LaundryQuery.js';

class LaundryScreen extends Component {
  static navigationOptions = {
    title: 'Laundry Notifier'
  };
  state = {
    laundryRoom: '',
    numDryers: '',
    numWashers: '',
    numDryersAvailable: '',
    numWashersAvailable: ''
  };

  updateLaundry = laundry => {
    //this.laundryRoomSelection(this.state.laundryRoom);
    axios({
      url: 'ASK SULLY FOR THE IP',
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
      });
    });
  };

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Testing text</Text>
        <Picker
          selectedValue={this.state.laundryRoom}
          style={{ height: 50, width: 100 }}
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
          <Text>Laundry Room Selected: {this.state.laundryRoom}</Text>
          <Text>
            Number of Washers Available: {this.state.numWashersAvailable}
          </Text>
          <Text>
            Number of Dryers Available: {this.state.numDryersAvailable}
          </Text>
          <Text>
            Total Washers: {this.state.numWashers} | Total Dryers:{' '}
            {this.state.numDryers}
          </Text>
        </View>
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
