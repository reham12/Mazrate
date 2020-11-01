import React, { Component ,useState} from 'react';
import { StyleSheet,Text,TouchableOpacity,Image,ActivityIndicator,I18nManager, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import AsyncStorage from "@react-native-community/async-storage"
import { I18nLocalize,i18n } from 'react-native-i18n-localize'
import RNRestart from 'react-native-restart';

const languageSelection = ({navigation }) =>{
    const [refresh, setRefresh] = useState(false);

    const handelLanguage= async  (lang)=>{
      setRefresh(true)
      I18nLocalize.setLanguage(lang)
      AsyncStorage.setItem('lang',lang); 
      if(I18nLocalize.getLocale()==="en"){
          I18nManager.forceRTL(false);
      
      }else{
        I18nManager.forceRTL(true);
        
      }
      setTimeout(() => {setRefresh(false)}, 1000)
      RNRestart.Restart();
    }
    return (
      <>
    {!refresh &&<View style={styles.body}>
      {refresh && <ActivityIndicator style={[styles.absolute]} size={50} color='#0A316B'/>}
        <View style={styles.sectionImageBack}>
          <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
              <Image style={[styles.imageBack]} source={images["back"]}/> 
          </TouchableOpacity>
        </View>

        <Text style={styles.baseTitle}>{i18n.t("Languages")}</Text>
        <View> 
           <TouchableOpacity style={styles.row} onPress={()=>handelLanguage("en")}>
              <Image style={[styles.imageFlag]} source={images["uk"]}/> 
              <Text style={styles.enLang}>English</Text> 
           </TouchableOpacity >
           <TouchableOpacity style={styles.row} onPress={()=>handelLanguage("ar")}>
              <Image style={[styles.imageFlag]} source={images["jordan"]}/> 
              <Text style={styles.arLang}>عربي</Text> 
           </TouchableOpacity >
        </View>

      </View>}
      </>
    );

}

export default languageSelection;