// React Native Tab
// https://aboutreact.com/react-native-tab/
import 'react-native-gesture-handler';

import * as React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
import images from "@assets/imags-m";

import FirstPage from './First';
import SecondPage from './First';
import { Image,I18nManager} from 'react-native';
import {i18n} from 'react-native-i18n-localize'

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor:'#90D12F',
        inactiveTintColor: '#CFCFCF',
        style: {
          backgroundColor: '#fff',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize:12,
          textTransform: "capitalize",
          paddingTop:10,
          fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium"
        },
        indicatorStyle: {
          borderBottomColor: '#90D12F',
          borderBottomWidth: 2,
        },
        showIcon :true
      }}>
      <Tab.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          tabBarLabel:i18n.t("Previous_Booking"),
          tabBarIcon: ({ focused}) => {
            let iconName;
            if(focused){
              iconName="prevActive"
            }else{
              iconName="prevOff"
            }
            return <Image style={{width:28,height:27}} source={images[iconName]}/> 
          },
           
        }}  />
      <Tab.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          tabBarLabel:i18n.t("Upcoming_Booking"),
          tabBarIcon: ({ focused}) => {
            let iconName;
            if(focused){
              iconName="activeBooking"
            }else{
              iconName="offBooking"
            }
            return <Image style={{width:26,height:31}} source={images[iconName]}/> 
          },
        }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
 
      <Stack.Navigator
        initialRouteName="MyBooking"
        >
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
   
  );
}

export default App;