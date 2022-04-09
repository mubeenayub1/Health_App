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
  },

  mainheader: {
    height: (height / 100) * 10,
    width: '90%',
    flexDirection: 'row',
    marginHorizontal: '5%',
    alignItems: 'flex-end',
    marginVertical: '18%',
    // backgroundColor: 'red',
  },

  headertext: {
    fontSize: 24,
    marginHorizontal: '5%',
    fontWeight: 'bold',
    paddingBottom: '5%',
    color: 'black',
  },
  midcontainer: {
    borderRadius: 100,
    marginVertical: '5%',
  },
  midcon: {
    height: (height / 100) * 30,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  training: {
    height: '30%',
    // backgroundColor: 'red',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  trainingText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: '5%',
  },
  excontainer: {
    height: '70%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // bottom: '6%',
  },
  minicontainer: {
    height: '80%',
    backgroundColor: 'red',
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirections: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  conText: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'black',
    // marginTop: '10%',
  },
  water_record: {
    height: '15%',
    width: '95%',
    alignItems: 'center',
    backgroundColor: '#2453ed',
    borderRadius: 10,
  },
  water_con: {
    height: '100%',
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden',
  },
});
export default styles;
