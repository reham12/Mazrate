import React, { Component } from 'react';
import { StyleSheet,Text,TouchableOpacity,ScrollView,Image, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import SettingTitle from '@components/SettingTitle';
import SettingText from '@components/SettingText';
import {i18n} from 'react-native-i18n-localize'
const PrivacyPolicy = ({navigation }) =>{
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

	        <Text style={styles.baseTitle}>{i18n.t("Privacy_Policy")}</Text>

            <Image style={[styles.imageTerms]} source={images["privcy"]}/> 
            <SettingTitle title="Lorem iptdfsum dolor sit amet, consectetur adipisc"/>
            <SettingText title="Lorem iptdfsum dolor sit amet, consectetur adipiscing elit, sed do  nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  nostrud exe rcitation Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do  rcitation Lorem ipsum dolor sit amet, consectetur adi"/>
            <SettingTitle title="Lorem iptdfsum dolor sit amet"/>
            <SettingText title="Lwrorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  nostrud exe rcitation Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do  "/>
            <SettingTitle title="Lorem iptdfsum dolor sit amet, consectetur"/>
            <SettingText title="Lorem ipspoium dolor sit amet, consectetur adipiscing elit, sed do  nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  nostrud exe tur adi  nostrudercitation"/>
	    </ScrollView>
      </View>
    );

}

export default PrivacyPolicy;