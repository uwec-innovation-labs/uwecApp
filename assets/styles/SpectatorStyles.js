import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 8
  },
  titleText: {
    fontSize: 24
  },
  newsTitleText: {
    fontSize: 20,
    color: 'blue'
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 8,
    marginBottom: 10
  },
  horizontalLineThin: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 6,
    marginBottom: 6
  },
  newsStoryContainer: {
    margin: 2,
    padding: 2,
    backgroundColor: 'rgba(122, 122, 122, 0.11)',
    alignItems: 'center',
    width: Dimensions.get('window').width - 90,
    height: Dimensions.get('window').height / 2
  },
  newsImage: {
    width: 300,
    height: 350
  }
})
