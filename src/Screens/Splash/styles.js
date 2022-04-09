import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: null,
    width: null,
  },
  container: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    margin: 10,
    color: 'white',
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
  },
  photo: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
});
export default styles;
