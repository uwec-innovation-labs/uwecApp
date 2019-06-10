import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  }
})
