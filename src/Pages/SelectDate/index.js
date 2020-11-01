import React, { Component } from 'react';
import { StyleSheet,Text,TouchableOpacity,Image, View,I18nManager} from 'react-native';
import DateRangePicker from '@components/DateRangePicker';
import images from "@assets/imags-m";
import {i18n} from 'react-native-i18n-localize'

const SelectDate = ({ route,navigation }) =>{
    const { title , type} = route.params;
    return (
      <>
      <View style={styles.sectionImageBack}>
        <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
            <Image style={[styles.imageBack]} source={images["back"]}/> 
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.baseTitle}>{title}</Text>
      </View>


    
      <View style={styles.containerDatePicker}>

        <View style={styles.section}>
         
          <View style={styles.sectionFirst}> 
          <DateRangePicker
            markingType={type}
            initialRange={['2018-04-01', '2018-04-10']}
            onSuccess={(s, e) => alert(s + '||' + e)}
            theme={{ markColor: 'red', markTextColor: 'white' }}/>
            </View>
        </View>

        <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnDone} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
          <Text style={styles.textBtn}>{i18n.t("Done")}</Text>
        </TouchableOpacity>
      </View>

      </>
    );

}

const styles = StyleSheet.create({
  sectionImageBack:{
    height:50,
    justifyContent:"center",
    backgroundColor:"#fff"
  },
  conatinerBtnBack:{
    paddingHorizontal:15,paddingVertical:5,width:50
  },
  baseTitle:{
    color:"#071E40",
    fontSize:20,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
    textAlign:"center",
    textTransform: "uppercase",
    backgroundColor:"#fff",
    paddingBottom:40
  },
  imageBack:{
    width:9,
    height:14,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
  },
  containerDatePicker:{
    flex:1,  
    flexDirection:"column",backgroundColor:"#fff", shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    shadowRadius: 2,
  }, 
  section:{
    flex:1,
  },
  sectionFirst:{
    flex:1,
    flexDirection:"column",
  },
  title:{
    fontSize:20,
    textAlign:"center",
  },
  conatinerBtnDone:{
    backgroundColor: "#90d12f",
    textAlign:"center",
    height:50,
    justifyContent:"center",
    alignItems:"center",
  },
  textBtn:{
    color:"white",
    fontSize:18,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium"
  }
});
export default SelectDate;