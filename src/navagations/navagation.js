import SplashScreen from  "react-native-splash-screen";
import auth from '@react-native-firebase/auth';
import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import AppNavigator from './AppNavigator';
const Navagation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const onAuthStateChanged = async user => {
    await setCurrentUser(user);
    console.log(user," inuser");
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    console.log("in subscriber");
    SplashScreen.hide();
    return subscriber;
  }, []);
  
  return (

      <NavigationContainer>
        {currentUser ? <AppNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>

  )
}
export default Navagation;