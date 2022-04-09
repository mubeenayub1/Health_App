import React, {useState} from 'react';

import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import Home from '../Home/home';

import {
  setAge,
  setHeight,
  setName,
  setWeight,
  setTargetWeight,
} from '../../redux/actions';
import {Picker} from '@react-native-picker/picker';

import ImagePicker from 'react-native-image-crop-picker';
import {Icon} from 'react-native-elements';

const Form = ({navigation}) => {
  const dispatch = useDispatch();

  const [image, setImage] = useState(require('../../../assets/dummyimage.png'));
  const [surname, setSurname] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [userage, setUserage] = useState('');
  const [userheight, setUserheight] = useState('');
  const [userweight, setUserweight] = useState('');
  const [usertargetweight, setUsertargetweight] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const setFullName = () => {
    if (surname.length === 0) {
      Alert.alert('Warning!', 'Please write your name.');
    } else {
      dispatch(setName(surname));
      // navigation.goBack();
    }
  };
  const setFormAge = () => {
    dispatch(setAge(userage));
  };
  const setFormHeight = () => {
    dispatch(setHeight(userheight));
  };
  const setFormWeight = () => {
    dispatch(setWeight(userweight));
  };
  const setFormTargetWeight = () => {
    dispatch(setTargetWeight(usertargetweight));
  };

  return (
    <View style={styles.maincontainer}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.button_modal}
              onPress={() => {
                setModalVisible(!modalVisible);
                takePhotoFromCamera();
              }}>
              <Image
                source={require('../../../assets/camera1.jpg')}
                style={{height: '60%', width: '15%', borderRadius: 100}}
              />
              <Text style={styles.textStyle}>From Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button_modal}
              onPress={() => {
                setModalVisible(!modalVisible);
                choosePhotoFromLibrary();
              }}>
              <Image
                source={require('../../../assets/icon.jpg')}
                style={{height: '60%', width: '15%', borderRadius: 100}}
              />
              <Text style={styles.textStyle}>From Device</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button_modal1}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Icon
                name="circle-with-cross"
                type="entypo"
                size={28}
                color="white"
                style={{marginHorizontal: '7%'}}
              />
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
            <Text style={styles.headertext}> Set your profile</Text>
          </View>
        </ImageBackground>
      </View>

      <ScrollView style={{flex: 1}}>
        <ImageBackground
          source={require('../../../assets/splashimg1.jpg')}
          style={styles.mid}>
          <View style={styles.pic}>
            <TouchableOpacity
              style={styles.pic_1}
              onPress={() => setModalVisible(true)}>
              <Image
                style={{height: '100%', width: '100%', borderRadius: 100}}
                source={image}
              />
            </TouchableOpacity>
            <Text style={styles.pic_text}>Set your profile photo</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.form_text}> Full Name:</Text>
            <TextInput
              style={styles.form_input}
              maxLength={20}
              // placeholder="Name"
              onChangeText={value => {
                setSurname(value);
              }}
              value={surname}
            />
          </View>
          <View style={styles.form}>
            <View style={styles.form_profile}>
              <Text style={styles.form_text}> Age:</Text>
              <TextInput
                style={styles.form_input}
                onChangeText={value => {
                  setUserage(value);
                }}
                value={userage}
              />
              <Text style={styles.form_text2}> year</Text>
            </View>
            <View style={styles.form_profile}>
              <Text style={styles.form_text}> Gender:</Text>
              <Picker
                style={styles.picker}
                selectedValue={selectedLanguage}
                onValueChange={itemValue => setSelectedLanguage(itemValue)}>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Others" value="Others" />
              </Picker>
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.form_profile}>
              <Text style={styles.form_text}> Height:</Text>
              <TextInput
                style={styles.form_input}
                maxLength={3}
                keyboardType="numeric"
                onChangeText={value => {
                  setUserheight(value);
                }}
                value={userheight}
              />
              <Text style={styles.form_text2}>cm</Text>
            </View>
            <View style={styles.form_profile}>
              <Text style={styles.form_text}> Weight:</Text>
              <TextInput
                style={styles.form_input}
                maxLength={3}
                keyboardType="numeric"
                onChangeText={value => {
                  setUserweight(value);
                }}
                value={userweight}
              />
              <Text style={styles.form_text2}>kg</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.form}>
            <Text style={styles.form_text}> Target Weight:</Text>
            <TextInput
              style={styles.form_input}
              maxLength={3}
              keyboardType="numeric"
              onChangeText={value => {
                setUsertargetweight(value);
              }}
              value={usertargetweight}
            />
            <Text style={styles.form_text2}>kg</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.button_con}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.button_text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Home');
                setFullName();
                setFormAge();
                setFormHeight();
                setFormWeight();
                setFormTargetWeight();
              }}>
              <Text style={styles.button_text}>Save</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Form;
