import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItems,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import StartQuiz from '../screens/StartQuiz';
import { signOut } from '../firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShowAnswer from '../screens/ShowAnswer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerWithLogoutButton(props) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
      <TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/zeeshan.png')} style={styles.icon}></Image>
          </View>
          <Text style={styles.label}>Logout</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
};




function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always", horizontal: "never" }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <DrawerItem label="Log Out" icon={() => (
          <Icon
            name="exit-to-app"
            size={30}
          />
        )} style={{ borderRadius: 5, fontSize: 40, }} onPress={() => signOut()} />
      </View>
    </SafeAreaView>

  );
}
const DrawerHome = () => (
  <Drawer.Navigator initialRouteName="HomeScreen" drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Answer" component={ShowAnswer} />
  </Drawer.Navigator>
);

const AppNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="DrawerHome" 
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StartQuiz" component={StartQuiz} />
      <Stack.Screen name="ShowAnswer" component={ShowAnswer} />
      <Stack.Screen
        name="DrawerHome"
        component={DrawerHome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;


const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
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
