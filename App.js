import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import LaundryScreen from "./Laundry.js";
import styles from "./StyleSheet";
import SpectatorScreen from "./Spectator.js";
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
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

  render = () =>{
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          <View style={styles.laundryView}>
            <Text>Laundry Notifier</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Laundry')}>
              <Image
                style={styles.laundryImage}
                source={require('./assets/laundry.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.newsAndCarText}>
            <Text style={styles.newsText}> Spectator</Text>
            <Text style={styles.BluGoldIdText}> BluGold ID</Text>
          </View>
          <View style={styles.newsAndCarView}>
              <TouchableHighlight
               onPress={() => this.props.navigation.navigate('Spectator')}> 
             <Image
               style={styles.cardImage}
                source={require('./assets/news.jpg')}
            />
            </TouchableHighlight>
          </View>
        </View>
    );
  }
}

const HomePageNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Laundry: { screen: LaundryScreen },
    Spectator: { screen: SpectatorScreen }
  });

  const App = createAppContainer(HomePageNavigator);
  export default App;