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
    height: (height / 100) * 40,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    marginBottom: '5%',
  },
  mid1: {
    height: (height / 100) * 20,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    marginBottom: '15%',
  },
  pic: {
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  pic_1: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginHorizontal: '20%',
  },
  pic_text: {
    fontSize: 18,
    color: 'white',
    marginVertical: '5%',
    fontWeight: 'bold',
  },
  pic_text1: {
    fontSize: 18,
    color: 'white',
    marginVertical: '5%',
    marginLeft: '2%',
    // fontWeight: 'bold',
  },
  form: {
    height: '40%',
    width: '100%',

    justifyContent: 'space-evenly',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  water_record: {
    height: (height / 100) * 10,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#2453ed',
    borderRadius: 10,
    marginBottom: '5%',
    justifyContent: 'space-between',
  },
  step_con: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: '5%',
    // justifyContent: 'space-around',
    width: '50%',
  },
  picker: {
    height: '80%',
    width: '100%',
    // backgroundColor: 'red',
    // backgroundColor: 'transparent',
    paddingHorizontal: '10%',
    color: 'white',
    // justifyContent: 'center',
  },
  step_goal: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    padding: '4%',
    // paddingBottom: '4%',
  },
  step_goal1: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    padding: '3%',
  },
  goal_text: {
    fontSize: 20,
    color: 'white',
  },
  goal_text1: {
    fontSize: 20,
    color: 'white',
    // marginRight: '10%',
  },
});
export default styles;
