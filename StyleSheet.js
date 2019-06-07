import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  laundryContainer: {
    // flex: 1,
    // backgroundColor: '#fff',
    // marginTop: '5%',
    // alignItems: 'center',
    // justifyContent: 'space-between'
  },
  containerLaundryText: {
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    margin: 20,
    marginTop: 40
  },
  laundryImage: {
    height: '100%',
    //width: "100%",
    borderRadius: 10,
    resizeMode: 'center',
    flex: 1
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
