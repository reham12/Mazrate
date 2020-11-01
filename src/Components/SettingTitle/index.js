import React, {useState} from 'react';
import { StyleSheet,Text,I18nManager} from 'react-native';

const SettingTitle = (props) =>{
	return (
		<Text style={styles.title}>
		  {props.title}
		</Text>
	)
}

const styles = StyleSheet.create({
    title:{
    	fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium",
    	color:"#90D12F",
    	textAlign:"center",
    	paddingTop:12
    }
})
export default SettingTitle;