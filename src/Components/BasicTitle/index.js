import React, {useState} from 'react';
import { StyleSheet,Text,I18nManager } from 'react-native';

const BasicTitle = (props) =>{
	return (
		<Text style={styles.title}>
		  {props.title}
		</Text>
	)
}

const styles = StyleSheet.create({
    title:{
    	fontSize:16,
    	fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold",
    	color:"#071E40"
    }
	})
export default BasicTitle;