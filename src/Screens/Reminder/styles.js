import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
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
    alignItems: 'center',
    marginVertical: '18%',
    // backgroundColor: 'red',
  },
  image: {
    height: '100%',
    width: '20%',
    backgroundColor: 'blue',
    borderRadius: 100,
  },
  headertext: {
    fontSize: 24,
    marginHorizontal: '5%',
    fontWeight: 'bold',
    paddingBottom: 5,
    color: 'black',
  },
  mid: {
    height: (height / 100) * 80,
    width: '100%',
    borderRadius: 25,

    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: '10%',
  },
  top_container: {
    width: '80%',
    height: '25%',
    backgroundColor: 'red',
    marginVertical: '5%',
  },
  top_text: {
    height: '50%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default styles;
