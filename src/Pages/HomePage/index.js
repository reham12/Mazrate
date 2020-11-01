import * as React from 'react';
import { View, Text,Image ,SafeAreaView,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import images from "@assets/imags-m";
import drawerStyles from"./DrawerStyle"
import Home from"./Home"
import { i18n } from 'react-native-i18n-localize'

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={drawerStyles.container}>

      <View style={drawerStyles.containerUser}>
          <Text style={drawerStyles.nameUser}>Fadi saoudi</Text>
      </View>

      <DrawerContentScrollView {...props} style={drawerStyles.ScrollView}>
        <DrawerItemList 
        {...props} 
        labelStyle={drawerStyles.labelStyle}
        activeBackgroundColor="#071E40"
        style={drawerStyles.drawerItemList}/>
          <DrawerItem 
              label={i18n.t("My_Profile")}
              labelStyle={drawerStyles.labelItemStyle}
              icon={({ focused, color, size }) => <Image style={drawerStyles.userDrawer}  source={images["userDrawer"]}/> }
              onPress={() =>{ 
                props.navigation.navigate('MyProfile' , {title: i18n.t("My_Profile"),type: 'profile',light:"dark"});
                props.navigation.closeDrawer() 
              }}
          />
          <DrawerItem 
              label={i18n.t("My_Booking")}
              labelStyle={drawerStyles.labelItemStyle}
              icon={({ focused, color, size }) => <Image style={drawerStyles.myBooking} source={images["myBooking"]}/> }
              onPress={() =>{ props.navigation.navigate('MyBooking');props.navigation.closeDrawer() }}
          />
          <DrawerItem 
              label={i18n.t("Favorite")}
              labelStyle={drawerStyles.labelItemStyle}
              icon={({ focused, color, size }) => <Image style={drawerStyles.starDrawer} source={images["starDrawer"]}/> }
              onPress={() =>{ props.navigation.navigate('Favorite');props.navigation.closeDrawer() }}
          />
          <DrawerItem 
              label={i18n.t("Settings")}
              labelStyle={drawerStyles.labelItemStyle}
              icon={({ focused, color, size }) => <Image style={drawerStyles.starDrawer} source={images["setting"]}/> }
              onPress={() =>{ props.navigation.navigate('Settings');props.navigation.closeDrawer() }}
          />
          <DrawerItem 
              label={i18n.t("About_App")}
              labelStyle={drawerStyles.labelItemStyle}
              icon={({ focused, color, size }) => <Image style={drawerStyles.starDrawer} source={images["about"]}/> }
              onPress={() =>{ props.navigation.navigate('About');props.navigation.closeDrawer() }}
          />
         <TouchableOpacity style={drawerStyles.containerLogout}
         onPress={() =>{ props.navigation.navigate('SignLogin');props.navigation.closeDrawer() }}>
              <Image style={drawerStyles.logout} source={images["logout"]}/>
              <Text style={drawerStyles.logoutText}>{i18n.t("Logout")}</Text>
          </TouchableOpacity>

        
      </DrawerContentScrollView>


    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer(navigation) {
  return (
    <Drawer.Navigator
      overlayColor="#ffffff96"
      lazy={true}
      drawerType={'slide'}
       // drawerContentOptions={{
       //    gesturesEnabled: false,
       //    swipeEnabled: false,
       //    drawerLockMode: 'locked-closed'
       // }}
       drawerContent={props => <CustomDrawerContent  navigation={navigation} {...props}  />}>
      <Drawer.Screen 
        name={i18n.t("Home")}
        component={Home}
        options={{
            drawerIcon: config => <Image style={drawerStyles.userDrawer} source={images["userDrawer"]}/>,
            swipeEnabled:true,
            drawerBackgroundColor : 'red',
            drawerPosition: 'right',
        }}
      />

    </Drawer.Navigator>
  );
}

const DrawerApp =({ navigation }) =>{
  return (
      <MyDrawer navigation={navigation} />
  );
}

export default DrawerApp;
