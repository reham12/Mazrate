import React, {useState} from 'react';
import { StyleSheet,Text,I18nManager } from 'react-native';

const SettingText = (props) =>{
	return (
		<Text style={styles.title}>
		  {props.title}
		</Text>
	)
}

const styles = StyleSheet.create({
    title:{
    	fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Light",
    	color:"#777777",
    	textAlign:"center",
    	paddingVertical:8
    }
	})
export default SettingText;