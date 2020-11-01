import React, {useState} from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity,I18nManager} from 'react-native';
import images from "@assets/imags-m";
import {i18n} from 'react-native-i18n-localize'
const BasicTitle = (props) =>{
	return (
		<View style={[styles.card,{borderColor:props.item.item.color}]}>
            <View style={styles.containerIcon}>
                <TouchableOpacity>
                   <Image style={[styles.imageTrash]} source={images["trash"]}/> 
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.columnDate}>
                   <Text style={[styles.day,styles.textDM]}>20</Text>
                   <Text style={[styles.month,styles.textDM]}>{i18n.t("APR")}</Text>
                </View>
                <View>
                   <View style={styles.row}>
                       <Text style={styles.title}>
                           Aipiscingamet, Eefsm
                       </Text>
                       <Text style={styles.time}>
                             {i18n.t("minutes_ago")}
                       </Text>
                   </View>
                   <View>
                       <Text style={styles.text}>
                           {i18n.t("Lorem_ipsum_helf")}
                           {i18n.t("Lorem_ipsum_helf")}
                       </Text>
                   </View>
                </View>
            </View>
		</View>
	) 
}

const styles = StyleSheet.create({
  card:{
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    borderLeftWidth:4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    shadowRadius: 2,
    marginTop:5,
    justifyContent: "space-between",
    backgroundColor:"white",
    width:"99%",
    marginBottom:20,
    padding:10

  },
  containerIcon:{
    justifyContent:"flex-end",
    flexDirection:"row",
    width:"100%",

  }, 
  imageTrash:{
    width:13,
    height:15
  },

  row:{
    flexDirection:"row",
    alignItems:"center",


  },
  textDM:{
    color:"#071E40",
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400"
  },
  day:{
    fontSize:18,
  },
  month:{
    fontSize:11,
  },
  title:{
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium",
    fontSize:13,
    color:"#071E40",
    marginRight:10
  },
  text:{
    color:"#777777",
    fontSize:10,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
    paddingTop:10,
    marginRight:20,
    paddingLeft: I18nManager.isRTL ?20 :0,
    paddingRight: I18nManager.isRTL ?0 :20

  },
  time:{
    color:"#CFCFCF",
    fontSize:7,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
  },
  columnDate:{
    borderRightWidth:1,
    borderColor:"#707070",
    paddingRight:10,
    marginRight:10
  }
})
export default BasicTitle;