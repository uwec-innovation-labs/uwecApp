import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  FlatList
} from 'react-native'
import styles from '../assets/styles/SpectatorStyles.js'
import { ScrollView } from 'react-native-gesture-handler'
const axios = require('axios')

class SpectatorScreen extends Component {
  static navigationOptions = {
    title: 'Spectator'
  }
  state = {
    titleArray: [],
    imageLinkArray: [],
    newsLinkArray: []
  }
  news = () => {
    axios({
      url: 'http://35.247.62.2:4000/graphql',
      method: 'post',
      data: {
        query: `
        {
          news {
            title
            image
            link
          }
        }
        `
      }
    }).then(result => {
      tempArr1 = []
      tempArr2 = []
      tempArr3 = []
      for (i = 0; i < 5; i++) {
        tempArr1.push(result.data.data.news[i].title)
        tempArr2.push(result.data.data.news[i].image)
        tempArr3.push(result.data.data.news[i].link)
      }
      this.setState({
        titleArray: tempArr1,
        imageLinkArray: tempArr2,
        newsLinkArray: tempArr3
      })
    })
  }
  render() {
    this.news()
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>The latest from The Spectator</Text>

        <ScrollView contentContainerStyle={styles.container}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`${this.state.newsLinkArray[0]}`)}
            style={styles.newsStoryContainer}
          >
            <Text style={styles.newsTitleText}>{this.state.titleArray[0]}</Text>

            <Image
              style={styles.newsImage}
              source={{ uri: `${this.state.imageLinkArray[0]}` }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(`${this.state.newsLinkArray[1]}`)}
            style={styles.newsStoryContainer}
          >
            <Text style={styles.newsTitleText}>{this.state.titleArray[1]}</Text>

            <Image
              style={styles.newsImage}
              source={{ uri: `${this.state.imageLinkArray[1]}` }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(`${this.state.newsLinkArray[2]}`)}
            style={styles.newsStoryContainer}
          >
            <Text style={styles.newsTitleText}>{this.state.titleArray[2]}</Text>

            <Image
              style={styles.newsImage}
              source={{ uri: `${this.state.imageLinkArray[2]}` }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(`${this.state.newsLinkArray[3]}`)}
            style={styles.newsStoryContainer}
          >
            <Text style={styles.newsTitleText}>{this.state.titleArray[3]}</Text>

            <Image
              style={styles.newsImage}
              source={{ uri: `${this.state.imageLinkArray[3]}` }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(`${this.state.newsLinkArray[4]}`)}
            style={styles.newsStoryContainer}
          >
            <Text style={styles.newsTitleText}>{this.state.titleArray[4]}</Text>

            <Image
              style={styles.newsImage}
              source={{ uri: `${this.state.imageLinkArray[4]}` }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

export default SpectatorScreen
