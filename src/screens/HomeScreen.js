import React, { useState, useEffect,useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FormButton from '../components/FormButton';
import { signOut } from '../firebase/auth';
import Model from '../components/Model';
import DropDown from '../components/DropDown';
import { GlobalContext } from '../context/context';

import {Picker} from '@react-native-picker/picker';
const HomeScreen = ({ navigation }) => {


  const { state, dispatch } = useContext(GlobalContext);
  
  const [selectedLevel, setselectedLevel] = useState();
  return (
    <View style={styles.container}>
      <FormButton
        labelText="start quiz"
        handleOnPress={() => {
          navigation.navigate('StartQuiz')

        }
        }
        style={{ width: '40%' }}
        fontsize={{ fontSize: 25 }}
      />
        {/* <View style={styles.main}>


<Picker
    selectedValue={selectedLevel}
    onValueChange={(itemValue, itemIndex) =>{
        setselectedLevel(itemValue)
    }
        
      }
      style={styles.picker}
>
    <Picker.Item label="Level 1" value={1} />
    <Picker.Item label="Level 2" value={2} />
</Picker>
</View> */}
      <DropDown 
       labelText1 = 'Level 1'
       labelText2 = 'Level 2'
       labelValue1 = {1}
       labelValue2 = {2}
      //  handleOnPress={handleOnPress}
      />
      {/* <Model />  */}
    </View>
  )
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  main: {
    width: "80%",
    borderWidth: 4,
    borderColor: "black",
},
  label: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  }
});
