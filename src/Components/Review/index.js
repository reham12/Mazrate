import React, {useState} from 'react';
import { StyleSheet,View,Image,Text,I18nManager } from 'react-native';
import images from "@assets/imags-m";
import {i18n} from 'react-native-i18n-localize'

const Review = (props) =>{
	return (
		<View style={styles.body}>
		   <Image style={[styles.imageProfile]} source={images["userProfile"]}/> 
		   <View> 
		      <View style={[styles.row]}>
		         <Text style={styles.name}>Rasha</Text>
		         <View style={[styles.starSection,styles.row]}>
                  <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                  <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                  <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                  <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                  <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                </View>
		      </View>
		      <Text style={styles.time}>2 hours ago</Text>
		      <Text style={styles.text}>{i18n.t("Lorem_ipsum_all")}</Text>
		   </View>
		 
		</View>
	)
}

const styles = StyleSheet.create({
    imageProfile:{
		width:40,
		height:40,
		marginRight:10
	},
	body:{
       flexDirection:"row",
       marginVertical:10
	},
	row:{
		flexDirection:"row",
		alignItems:"center"
	},
	imageStar:{
	    width:10.05,
	    height:9.8,
	    marginHorizontal:1
	},
	name:{
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Avenir Heavy",
		fontSize:14,
		color:"#071E40"
	},
	time:{
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Light",
		fontSize:10,
		color:"#CFCFCF",
		textAlign:"left"
	},
	text:{
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Light",
		fontSize:12,
		color:"#777777",
		marginTop:5
	}

})
export default Review;