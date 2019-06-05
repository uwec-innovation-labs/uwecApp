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

class LaundryScreen extends Component {
  static navigationOptions = {
    title: 'Laundry Notifier'
  };
  state = { laundryRoom: '' };

  // const getLaundryRooms = async () => {
  //   try {
  //     return await axios.get('IP HERE');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const laundryRoom = async () => {
  //   const selectedRoom = await getLaundryRooms();
  //   return selectedRoom;
  // };

  updateLanguage = language => {
    this.setState({ laundryRoom: language });
    //this.laundryRoomSelection(this.state.laundryRoom);
  };

  render() {
    const laundryRoom = () => {
      return axios({
        url: 'http://192.168.1.28:4000/graphql',
        method: 'post',
        data: {
          query: `
                  {
                      laundryRoom(building: "Towers") {
                          totalNumDryers
                          totalNumWashers 
                      }
                  }
                  `
        }
      }).then(result => {
        return result.data;
      });
    };

    let laundryRoomSelected = async () => {
      return await laundryRoom();
    };
    let data = laundryRoomSelected();

    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>{data}</Text>
        <Text>Testing text</Text>
        <Picker
          selectedValue={this.state.laundryRoom}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ laundryRoom: itemValue })
          }
        >
          <Picker.Item label="Bridgman" value="bridgman" />
          <Picker.Item label="Chancellors" value="chancellors" />
          <Picker.Item label="Governors" value="governors" />
          <Picker.Item label="Horan" value="horan" />
          <Picker.Item label="Karlgaard Towers" value="Towers" />
          <Picker.Item label="Katharine Thomas" value="kt" />
          <Picker.Item label="Murray" value="murray" />
          <Picker.Item label="Oak Ridge" value="oak ridge" />
          <Picker.Item label="Putnam" value="putnam" />
          <Picker.Item label="The Suites" value="the suites" />
          <Picker.Item label="Sutherland" value="sutherland" />
        </Picker>
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
