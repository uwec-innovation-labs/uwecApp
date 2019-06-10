import React from 'react'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

export default StyleSheet.create({
  navigationContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%'
  },
  navigationBox: {
    margin: 2,
    padding: 2,
    backgroundColor: 'rgba(122, 122, 122, 0.11)',
    alignItems: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width / 2 - 4,
    height: Dimensions.get('window').height / 2
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 8,
    marginBottom: 8
  },
  horizontalLineThin: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 6,
    marginBottom: 6
  },
  navigationText: {
    marginTop: 2,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    marginBottom: 0
  },
  navigationImage: {
    flex: 1,
    height: 50
  },
  navigationImageLogo: {
    flex: 1,
    height: '100%',
    //width: undefined,
    alignSelf: 'stretch',
    transform: [{ scale: 1.6 }],
    marginTop: 0
  }
})
