import React, {useState} from 'react';
import { StyleSheet,Text,ScrollView,View,TouchableOpacity,I18nManager,Image} from 'react-native';
import Header from '@components/Header';
import BasicTitle from '@components/BasicTitle';
import SubText from '@components/SubText';
import {i18n} from 'react-native-i18n-localize'
import images from "@assets/imags-m";
const PropertyPolicies = ({ navigation }) =>{ 
	return (

        <ScrollView
	          contentInsetAdjustmentBehavior="automatic" 
	          showsHorizontalScrollIndicator={false} 
	         >

	        <View style={styles.headerSection} >
		        <View  style={styles.firstSection} >
			        <View style={styles.sectionImageBack}>
			          <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
			              <Image style={[styles.imageBack]} source={images["back"]}/> 
			          </TouchableOpacity>
			        </View>

			        <View>
			          <Text style={styles.title} >{i18n.t("Infinity_Farm")}</Text>
			        </View>

			        <View/>

		        </View>
            </View>

            <View style={styles.section}>
	            <BasicTitle title={i18n.t("Accepted_Credit_Cards")}/>
	            <SubText text={i18n.t("MasterCard_Visa_PayPal")}/>
            </View>
            <View style={styles.section}>
	            <BasicTitle title={i18n.t("Card_Validation")}/>
	            <SubText text={i18n.t("Lorem_ipsum_all")}/>
            </View>
            <View style={styles.section}>
	            <BasicTitle title={i18n.t("Check_Times")}/>
	            <SubText text={i18n.t("Check_in_from")+" 28 Sep, 2020 "}/>
	            <SubText text={i18n.t("Check_out_from")+" 30 Sep, 2020"}/>
            </View>

            <View style={styles.section}>
	            <BasicTitle title={i18n.t("Children_Extra_Beds")}/>
	            <SubText text={i18n.t("Lorem_ipsum_helf")}/>
	            <SubText text={i18n.t("Lorem_ipsum_helf")}/>

            </View>
             <View style={styles.section}>
	            <BasicTitle title={i18n.t("Internet")}/>
	            <SubText text={i18n.t("internet_access_available")}/>
            </View>
            <View style={styles.section}>
	            <BasicTitle title={i18n.t("Parking")}/>
	            <SubText text={i18n.t("Lorem_ipsum_helf")}/>
            </View>
             <View style={styles.section}>
	            <BasicTitle title={i18n.t("Pets")}/>
	            <SubText text={i18n.t("Pets_allowed")}/>
            </View>

        </ScrollView>

	
	)
}
const styles = StyleSheet.create({
    section:{
    	padding:15
    },
    sectionImageBack:{
		height:50,
		justifyContent:"center",
	},
	conatinerBtnBack:{
		paddingHorizontal:15,
		paddingVertical:5,
		width:50
	},
	imageBack:{
		width:9,
		height:14,
		transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
	},
	headerSection:{
	    backgroundColor:"#071E40",
	    width:"100%",

	},
	firstSection:{
	    flexDirection:"row",
	    justifyContent:"space-between",
	    alignItems:"center",
	    height:80,
	},
	  title:{
    fontSize:20,
    color:"#fff",
    fontFamily:"ADAM.CGPRO 400"
  },
})

export default PropertyPolicies;