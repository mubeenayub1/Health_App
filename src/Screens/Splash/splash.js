import React, {useEffect} from 'react';

import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import splashimg1 from '../../../assets/splashimg1.jpg';
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 3000);
  });
  return (
    <>
      <ImageBackground source={splashimg1} style={styles.maincontainer}>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/splashimage.jpg')}
            style={styles.photo}
          />
          <Text style={styles.text}>Exercise change your life</Text>
        </View>
      </ImageBackground>
    </>
  );
};

export default Splash;
