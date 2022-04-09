import React, {useState, useRef} from 'react';
import {Picker} from '@react-native-picker/picker';
import ModalDropdown from 'react-native-modal-dropdown';
import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {color} from 'react-native-elements/dist/helpers';
import Reminder from '../Reminder/reminder';

const Profile = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();
  const {name} = useSelector(state => state);
  const {age} = useSelector(state => state);
  const {height} = useSelector(state => state);
  const {weight} = useSelector(state => state);
  const {targetweight} = useSelector(state => state);

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  // console.log(Icon);
  return (
    <View style={styles.maincontainer}>
      <View>
        <ImageBackground
          source={require('../../../assets/header.jpg')}
          style={styles.container}>
          <View style={styles.mainheader}>
            <Icon
              name="arrowleft"
              type="antdesign"
              size={30}
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
            />

            <Text style={styles.headertext}> Profile!</Text>
          </View>
        </ImageBackground>
      </View>

      <ScrollView
        contentContainerStyle={{
          width: '95%',
          alignItems: 'center',
          marginHorizontal: '2.5%',
          justifyContent: 'space-between',
        }}>
        <ImageBackground
          source={require('../../../assets/splashimg1.jpg')}
          style={styles.mid}>
          <View
            style={{
              height: '10%',
              width: '90%',
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: '5%',
            }}>
            <Text style={{color: 'white', fontSize: 18}}>
              Personal information
            </Text>
            <TouchableOpacity>
              <Icon
                name="form"
                type="antdesign"
                size={30}
                color="white"
                onPress={() => {
                  navigation.navigate('Form');
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.pic}>
            <View style={{flexDirection: 'row', width: '50%'}}>
              <Text style={styles.pic_text}>Name:</Text>
              <Text style={styles.pic_text1}>{name}</Text>
            </View>

            <Image
              source={require('../../../assets/dummyimage.png')}
              style={styles.pic_1}></Image>
          </View>
          <View style={styles.pic}>
            <View style={{flexDirection: 'row', width: '50%'}}>
              <Text style={styles.pic_text}>Age:</Text>
              <Text style={styles.pic_text1}>{age}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.pic_text}>Gender:</Text>
              <Text style={styles.pic_text}></Text>
            </View>
          </View>
          <View style={styles.pic}>
            <View style={{flexDirection: 'row', width: '50%'}}>
              <Text style={styles.pic_text}>Height:</Text>
              <Text style={styles.pic_text1}>{height}cm</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.pic_text}>Weight:</Text>
              <Text style={styles.pic_text1}>{weight}kg</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.water_record}>
          <Text style={styles.step_goal}>Target Weight: </Text>
          <View style={styles.step_con}>
            <Text style={styles.goal_text}>{targetweight}</Text>
            <Text style={styles.goal_text}>kg</Text>
          </View>
        </View>
        <View style={styles.water_record}>
          <Text style={styles.step_goal}>Reset Steps</Text>
          <View style={styles.step_con}>
            <Picker
              // itemStyle={{backgroundColor: 'red', width: '40%', color: 'red'}}
              style={styles.picker}
              dropdownIconColor="white"
              selectedValue={selectedLanguage}
              onValueChange={itemValue => setSelectedLanguage(itemValue)}>
              <Picker.Item
                label="12000"
                value="12000"
                // style={{color: 'white'}}
              />
              <Picker.Item label="13000 steps" value="13000" />
              <Picker.Item label="14000" value="14000" />
              <Picker.Item label="15000" value="15000" />
              {/* <View>
                <Text style={styles.goal_text1}>steps</Text>
              </View>
               */}
            </Picker>
            {/* <Text style={styles.goal_text1}>steps</Text> */}
          </View>
        </View>
        <View style={styles.water_record}>
          <View
            style={{flexDirection: 'column', width: '50%'}}
            onPress={() => {
              navigation.navigate('Reminder');
            }}>
            <Text style={styles.step_goal}>Reminder</Text>
            <Text
              style={{
                color: 'white',
                marginHorizontal: '10%',
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
              }}>
              Daily
            </Text>
          </View>
          <ModalDropdown
            options={['1200', '13000', '14000']}
            // style={{fontSize: 16, color: 'white'}}
            // dropdownTextStyle={{color: 'white'}}
          >
            {/* <Icon type="antdesign" name="caretdown" /> */}
          </ModalDropdown>
          <View style={styles.step_con}></View>
        </View>
        <View style={styles.water_record}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: '5%',
            }}>
            <Icon name="poweroff" type="antdesign" size={22} color="white" />
            <Text style={styles.step_goal1}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
