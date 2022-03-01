import React, { useState, useContext } from 'react';
import { Text, View, Alert,ScrollView, ToastAndroid, KeyboardAvoidingView } from 'react-native';

import auth from '@react-native-firebase/auth';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
// import { signUp } from '../firebase/auth';
import { addUser } from '../firebase/database';
import { COLORS } from '../theme/theme';
import { GlobalContext } from '../context/context';


const SignUpScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, seterrorText] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOnSubmit = async () => {
    if (email != '' && password != '' && confirmPassword != '') {
      if (password == confirmPassword) {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(async (data) => {
            let userId = data.user.uid;
            await addUser(userId, email)
            ToastAndroid.show('Signed up', ToastAndroid.SHORT);
          })
          .catch((error) => {
            let errorMessage = error.message;
            const indexOfFirst = errorMessage.indexOf("]")
            seterrorText(errorMessage.slice(indexOfFirst + 2))
          });
      } else {
        seterrorText('password did not match')
      }
    } else {
      seterrorText('Enter email and password')

    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
      }}>
        <ScrollView>

      <KeyboardAvoidingView behavior="padding"  >

        {/* Header */}
        <Text
          style={{
            fontSize: 24,
            color: COLORS.black,
            fontWeight: 'bold',
            marginVertical: 32,
            textAlign: "center"
          }}>
          Sign Up
        </Text>

        {/* Email */}
        <FormInput
          labelText="Name"
          placeholderText="enter your Name"
          onChangeText={value => setuserName(value)}
          value={userName}
        />
        <FormInput
          labelText="Email"
          placeholderText="enter your email"
          onChangeText={value => setEmail(value)}
          value={email}
        />

        {/* Password */}
        <FormInput
          labelText="Password"
          placeholderText="enter your password"
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry={true}
        />

        {/* Confirm Password */}
        <FormInput
          labelText="Confirm Password"
          placeholderText="enter your password again"
          onChangeText={value => setConfirmPassword(value)}
          value={confirmPassword}
          secureTextEntry={true}
        />
        {
          errorText ? (
            <View style={{ paddingBottom: 20 }}>
              <Text style={{ color: COLORS.error, textTransform: "capitalize", textAlign: "center" }}>
                {errorText}
              </Text>
            </View>
          ) : null
        }



        {/* Submit button */}
        <FormButton
          labelText="Sign up"
          handleOnPress={handleOnSubmit}
          style={{ width: '100%' }}
          fontsize={{ fontSize: 18 }}
        />

        {/* Footer */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'center', }}>
          <Text>Already have an account?</Text>
          <Text
            style={{ marginLeft: 4, color: COLORS.primary }}
            onPress={() => navigation.navigate('SignInScreen')}>
            Sign in
          </Text>
        </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </View>

  );
};

export default SignUpScreen;
