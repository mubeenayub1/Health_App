import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import styles from './styles';

const Reminder = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [toDayDate, setTodayDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    setTodayDate();
    hideDatePicker();
    console.log(date);
  };
  return (
    <View style={styles.maincontainer}>
      <View>
        <ImageBackground
          source={require('../../../assets/header.jpg')}
          style={styles.container}>
          <View style={styles.mainheader}>
            <Text>{text}</Text>
            <Icon
              name="arrowleft"
              type="antdesign"
              size={30}
              color="black"
              // onPress={() => {
              //   navigation.goback();
              // }}
            />
            <Text style={styles.headertext}>Reminder</Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <ImageBackground
          source={require('../../../assets/splashimg1.jpg')}
          style={styles.mid}>
          <View style={styles.top_container}>
            <Text style={styles.top_text}>Daily Report Reminder</Text>
            <View>
              <Text style={styles.top_text}>{toDayDate}</Text>
              <Icon
                name="caretdown"
                type="antdesign"
                size={15}
                color="white"
                onPress={() => {
                  showDatePicker();
                }}
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Reminder;
