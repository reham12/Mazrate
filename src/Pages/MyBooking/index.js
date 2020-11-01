import React, {useState} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import styles from "./style"
import images from "@assets/imags-m";
import Tabs from "./Tabs"
import {i18n} from 'react-native-i18n-localize'
const MyBooking = ({navigation}) =>{
	return (
		<>
	      <View style={styles.sectionImageBack}>
	        <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
	            <Image style={[styles.imageBack]} source={images["back"]}/> 
	        </TouchableOpacity>
	      </View>

	      <View>
	        <Text style={styles.baseTitle}>{i18n.t("My_Booking")}</Text>
	      </View>
	      <View style={{flex:1}}>
	      <Tabs/>
	      </View>

		</>
	)
}


export default MyBooking;