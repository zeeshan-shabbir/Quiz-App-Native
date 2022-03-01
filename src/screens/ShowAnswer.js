import React, { useState, useEffect,useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { GlobalContext } from '../context/context';



const ShowAnswer = ({navigation }) => {
    const { state, dispatch } = useContext(GlobalContext);
    console.log(state,"state");
  return (
    <View style={styles.container}>
         <FormButton
        labelText="Home"
        handleOnPress={() => navigation.replace('DrawerHome')}
        style={{ width: '40%' }}
        fontsize={{ fontSize: 25 }}
      />
     <Text>
         "coreect answer is "
     </Text>
     <Text>
         {
         state?.correctCount   
         }
     </Text>
    </View>
  )
}
export default ShowAnswer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
});
