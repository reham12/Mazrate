import React, { Component } from 'react';
import { StyleSheet,Text,TouchableOpacity,ScrollView,Image, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import SettingTitle from '@components/SettingTitle';
import SettingText from '@components/SettingText';
import {i18n} from 'react-native-i18n-localize'

const About = ({navigation }) =>{
    return (
      <View style={styles.body}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" 
	        contentContainerStyle={styles.scrollView}
	        showsVerticalScrollIndicator={false}
	        >
	        <View style={styles.sectionImageBack}>
	          <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
	              <Image style={[styles.imageBack]} source={images["back"]}/> 
	          </TouchableOpacity>
	        </View>

	        <Text style={styles.baseTitle}>{i18n.t("About_App")}</Text>

            <Image style={[styles.imageTerms]} source={images["aboutBackground"]}/> 
            
            <SettingText title={i18n.t("Lorem_ipsum_all")}/>
            
            <SettingText title={i18n.t("Lorem_ipsum_all")}/>
           
            <SettingText title={i18n.t("Lorem_ipsum_all")}/>
	        
        </ScrollView>
      </View>
    );

}

export default About;