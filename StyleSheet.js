import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  navigationContainer: {
    flexDirection: 'row'
  },
  navigationBox: {
    flex: 1,
    backgroundColor: 'rgba(122, 122, 122, 0.11)',
    height: 200,
    width: 200,
    margin: 10,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(122, 122, 122, 0.11)'
  },
  informationText: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center'
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
  laundryContainer: {
    // flex: 1,
    // backgroundColor: '#fff',
    // marginTop: '5%',
    // alignItems: 'center',
    // justifyContent: 'space-between'
  },
  containerLaundryText: {},
  title: {
    fontSize: 25,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginTop: 40
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
    height: '100%',
    //width: undefined,
    alignSelf: 'stretch',
    transform: [{ scale: 0.7 }],
    marginTop: 0
  },
  navigationImageLogo: {
    flex: 1,
    height: '100%',
    //width: undefined,
    alignSelf: 'stretch',
    transform: [{ scale: 1.6 }],
    marginTop: 0
  },
  logoImage: {
    height: '100%',
    //width: "100%",
    borderRadius: 10,
    resizeMode: 'center'
  },
  aboutText: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  laundryView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%', //30
    width: '100%',
    paddingBottom: '5%'
  },
  newsAndCarText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  newsText: {
    justifyContent: 'flex-start'
  },
  BluGoldIdText: {
    justifyContent: 'flex-start'
  },
  newsAndCarView: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
    //backgroundColor:"red"
  },
  newsImage: {
    height: '100%',
    //width: "40%",
    borderRadius: 10,
    resizeMode: 'contain',
    left: 0
    //position: "relative"
  },
  cardImage: {
    height: '100%',
    width: '40%',
    borderRadius: 10
  }
});
