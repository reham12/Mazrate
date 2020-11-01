import * as React from 'react';
import { StyleSheet,Image,I18nManager, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import images from "@assets/imags-m";
import styles from "./style"


const DropDownList =({ placeholder ,flexStatus,RightDrop,LeftDrop }) =>{
  return (

        <View style={[flexStatus&& styles.felxRow,LeftDrop&& styles.LeftDrop,RightDrop&& styles.RightDrop]}>

          <RNPickerSelect
              placeholder={placeholder}
              onValueChange={(value) => console.log(value)}
              items={[
                  { label: 'Football', value: 'football' },
                  { label: 'Baseball', value: 'baseball' },
                  { label: 'Hockey', value: 'hockey' },
              ]}
              style={ pickerSelectStyles}
              Icon={() => {
                  return <Image style={[styles.imageBack]} source={images["arrow-icon"]}/> ;
              }}

              // InputAccessoryView={() => null}
               useNativeAndroidPickerStyle={false}
             
          />
        </View>

  );
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 4,
    height:40,
    fontSize:12,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
    paddingHorizontal:10
  },
  iconContainer: {
    top: 18,
    height:'50%',
    right:10,
  },
  inputAndroid: {  
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 8,
    position:"relative",
    color: 'black',
    width:"100%",
    height:40,
    fontSize:12,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
    paddingHorizontal:10,
    textAlign:I18nManager.isRTL?"right":"left"
  },
  placeholder:{
    color:"#CFCFCF"
  }
});
export default DropDownList;


