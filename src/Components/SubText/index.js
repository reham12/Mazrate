import React, {useState} from 'react';
import { StyleSheet,Text,I18nManager } from 'react-native';

const SubText = (props) =>{
	return (
		<Text style={styles.title}>
		  {props.text}
		</Text>
	)
}

const styles = StyleSheet.create({
    title:{
    	fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
    	color:"#777777",
    	paddingVertical:2
    }
})
export default SubText;