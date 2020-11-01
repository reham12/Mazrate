import React, { Component } from 'react';
import { StyleSheet,Text,TouchableOpacity,Image, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import {i18n} from 'react-native-i18n-localize'

const SuccessfulConfirmation = ({navigation }) =>{
  return(
  	   <View style={styles.body}>
  	      <Image style={styles.image} source={images["sucessPayment"]}/>
  	      <Text style={styles.textThank}>{i18n.t("Thank_you")}</Text>
  	      <Text  style={styles.textConfirm}>{i18n.t("Your_Booking_Number",{number:"#258746"})}</Text>
  	      <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnClose} underlayColor="#DDDDDD"
              onPress={()=> navigation.navigate('HomePage' ,{})}>
            <Image style={[styles.imageClose]} source={images["close"]}/> 
          </TouchableOpacity>
  	   </View>
  	)
}

export default SuccessfulConfirmation;