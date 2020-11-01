import React, { Component } from 'react';
import { StyleSheet,Text,TouchableOpacity,Image, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"

const HeaderResultPage = ({navigation}) => (
    <View style={styles.headerSection} >
      <View  style={styles.firstSection} >
        <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
          <Image style={[styles.imageBack]} source={images["back"]}/>
        </TouchableOpacity>

        <View>
          <Image style={[styles.imageLogo]} source={images["logo-white"]}/> 
        </View>

        <TouchableOpacity  activeOpacity={0.6}  underlayColor="#DDDDDD" onPress={()=>navigation.navigate('Notification' ,{})}>
          <Image style={[styles.imageNotification]} source={images["notification-white-icon"]}/> 
        </TouchableOpacity>

      </View>

    </View>


    );



export default HeaderResultPage;