import React from 'react';

import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import styles from './styles';

const Records = () => {
  return (
    <View style={styles.maincontainer}>
      <View>
        <ImageBackground
          source={require('../../../assets/header.jpg')}
          style={styles.container}>
          <View style={styles.mainheader}>
            <Text style={styles.headertext}> Records</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{width: '95%', alignItems: 'center'}}>
          <ImageBackground
            style={styles.midcon}
            source={require('../../../assets/splashimg1.jpg')}>
            <View style={styles.training}>
              <Text style={styles.trainingText}>Training Records</Text>
            </View>
            <View style={styles.excontainer}>
              <View style={styles.minicontainer}>
                <Text style={styles.conText}>Walking</Text>
                <Text style={styles.conText}>6000</Text>
              </View>
              <View style={styles.minicontainer}>
                <Text style={styles.conText}>Running</Text>
                <Text style={styles.conText}>0.00(km)</Text>
              </View>
              <View style={styles.minicontainer}>
                <Text style={styles.conText}>Cycling</Text>
                <Text style={styles.conText}>0.00(km)</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.water_record}></View>
        <View style={styles.water_record}></View>
        <View style={styles.water_record}></View>
      </View>
    </View>
  );
};

export default Records;
