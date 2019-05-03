import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import Laundry from "./Laundry.js";
import { ApolloProvider, createNetworkInterface } from "react-apollo";
import styles from "./StyleSheet";
import Spectator from "./Spectator.js";
import ApolloClient from "apollo-boost";
import {
  createStackNavigator,
  createAppContainer
} from "react-native-navigation";

export default class App extends Component {
  constructor(props) {
    super(props);
    const networkInterface = () =>
      createNetworkInterface("http://localhost:4000/");
    this.client = new ApolloClient({
      networkInterface,
      dataIdFromObject: r => r.id
    });

    this.state = {};
  }

  static navigationOptions = {
    title: "UWEC",
    headerStyle: {},
    headerTitleStyle: {
      position: "absolute",
      left: 0
    }
  };

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <ApolloProvider client={this.client}>
        <View style={styles.container}>
          <View style={styles.laundryView}>
            <Text>Laundry Notifier</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Laundry")}
            >
              <Image
                style={styles.laundryImage}
                source={"./src/assets/laundry.png"}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.newsAndCarText}>
            <Text style={styles.newsText}> Spectator</Text>
            <Text style={styles.BluGoldIdText}> BluGold ID</Text>
          </View>
          <View style={styles.newsAndCarView}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("Spectator")}
            >
              <Image
                style={styles.newsImage}
                source={"./src/assets/news.jpg"}
              />
            </TouchableHighlight>

            <Image
              style={styles.cardImage}
              source={"./src/assets/credit-card.jpg"}
            />
          </View>
        </View>
      </ApolloProvider>
    );
  }
}

const HomePageNavigator = () =>
  createStackNavigator({
    Home: {
      screen: App
    },
    Laundry: {
      screen: Laundry
    },
    Spectator: {
      screen: Spectator
    }
  });
