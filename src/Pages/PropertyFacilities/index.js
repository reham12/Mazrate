import React, {useState} from 'react';
import { StyleSheet,Text,ScrollView,View,TouchableOpacity,I18nManager,Image} from 'react-native';
import Header from '@components/Header';
import BasicTitle from '@components/BasicTitle';
import SubText from '@components/SubText';
import {i18n} from 'react-native-i18n-localize'
import images from "@assets/imags-m";

const PropertyFacilities = ({ navigation }) =>{ 
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
	            <BasicTitle title={i18n.t("Pets")}/>
	            <SubText text={i18n.t("Pets_allowed")}/>
            </View>
            <View style={styles.section}>
	            <BasicTitle title={i18n.t("Internet")}/>
	            <SubText text={i18n.t("internet_access_available")}/>
            </View>
            <View style={styles.section}>
	            <BasicTitle title={i18n.t("General")}/>
	            <SubText text={i18n.t("Elevator")}/>
	            <SubText text={i18n.t("Soundproof_rooms")}/>
	            <SubText text={i18n.t("Heating")}/>
	            <SubText text={i18n.t("Air_conditioning")}/>
	            <SubText text={i18n.t("Smoke_property")}/>
            </View>
            <View style={styles.section}>
	            <BasicTitle title={i18n.t("Parking")}/>
	            <SubText text={i18n.t("Lorem_ipsum_helf")}/>
            </View>
            <View style={styles.section}>
	            <BasicTitle title={i18n.t("Services")}/>
	            <SubText text={"Lorem ipsum dolor"}/>
	            <SubText text={"Lorem ipsum"}/>
	            <SubText text={"Nostruem ipsum"}/>
	            <SubText text={"Consectetur adipiscing"}/>
            </View>
             <View style={styles.section}>
	            <BasicTitle title={i18n.t("Internet")}/>
	            <SubText text={i18n.t("internet_access_available")}/>
            </View>
            <View style={styles.section}>
	            <BasicTitle title={i18n.t("Outdoors")}/>
	            <SubText text={i18n.t("Terrace")}/>
            </View>
            <View style={styles.section}>
	            <BasicTitle title={i18n.t("Miscellaneous")}/>
	            <SubText text={"Lorem ipsum dolor"}/>
	            <SubText text={"Lorem ipsum"}/>
	            <SubText text={"Nostruem ipsum"}/>
	            <SubText text={"Consectetur adipiscing"}/>
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
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400"
  },
})

export default PropertyFacilities;