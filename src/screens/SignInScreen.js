import React, {useState} from 'react';
import {View, Text, SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {COLORS} from '../theme/theme';
import {signIn} from '../firebase/auth';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, seterrorText] = useState('');




  const handleOnSubmit = () => {
    if (email != '' && password != '') {
      signIn(email, password);
    }
    else
    {
      seterrorText("empty");
  }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
      }}>
      {/* Header */}
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: 'bold',
          marginVertical: 32,
          width: '100%'
        }}>
        Sign In
      </Text>

      {/* Email */}
      <FormInput
        labelText="Email"
        placeholderText="enter your email"
        onChangeText={value => setEmail(value)}
        autoFocus={true}
        value={email}
        // keyboardType={'email-address'}
        
      />

      {/* Password */}
      <FormInput
        labelText="Password"
        placeholderText="enter your password"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />
      {
          errorText?(
            <View style={{ paddingBottom: 20 }}>
            <Text style={{ color: COLORS.error, textTransform: "capitalize",  textAlign:"center" }}>
              {errorText}
            </Text>
          </View>
          ):null
        }
       

      {/* Submit button */}
      <FormButton
        labelText="Sign In"
        handleOnPress={handleOnSubmit}
        fontsize={{ fontSize: 18 }}
        style={{width: '100%'}}
      />

      {/* Footer */}
      
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Text>Don't have an account?</Text>
        <Text
          style={{marginLeft: 4, color: COLORS.error}}
          onPress={() => navigation.navigate('SignUpScreen')}>
          Create account
        </Text>
      </View>

      <TouchableOpacity  activeOpacity={0.2}>

<View style={{ marginTop: 20}}>
  <Text 
  style={{ textDecorationLine:"underline", color: COLORS.primary}}>Forgotten Password?</Text>
</View>
</TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignInScreen;
