import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    height: (height / 100) * 20,
    width: '100%',
    alignItems: 'center',
  },

  mainheader: {
    height: (height / 100) * 10,
    width: '90%',
    flexDirection: 'row',
    marginHorizontal: '5%',
    alignItems: 'flex-start',
    marginVertical: '18%',
    // backgroundColor: 'red',
  },
  image: {
    height: 60,
    width: 60,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
  headertext: {
    fontSize: 20,
    marginHorizontal: '5%',
    fontWeight: 'bold',
    paddingBottom: 10,
    color: 'black',
    marginTop: '6%',
    fontFamily: 'Roboto-Bold',
  },
  midcontainer: {
    // borderRadius: 100,
    // marginVertical: '5%',
  },
  mid: {
    height: (height / 100) * 80,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  excontainer: {
    height: '35%',
    width: '90%',
    // backgroundColor: 'red',
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  minicontainer: {
    height: '50%',
    width: '31%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  conText_container: {
    flexDirection: 'row',
  },
  conText: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'black',
    // marginTop: '10%',
    fontFamily: 'Roboto-Medium',
  },
  conText1: {
    fontSize: 14,
    // fontWeight: 'bold',
    color: 'black',
    marginTop: '8%',
    fontFamily: 'Roboto-Medium',
  },
  endcontainer: {
    backgroundColor: 'white',
    height: '47%',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  map: {
    height: '10%',
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // borderBottomWidth: 1,
    // borderEndColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: '5%',
  },
  map_icon: {marginLeft: '3%'},
  maptext: {
    fontSize: 22,
    color: 'black',
    // fontWeight: 'bold',

    fontFamily: 'Roboto-Bold',
  },
  button: {
    height: '15%',
    width: '40%',
    backgroundColor: '#2453ed',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    bottom: 40,
    position: 'absolute',
  },
  buttonText: {
    fontSize: 22,
    // fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto-Bold',
  },
});
export default styles;
