import React, { useState } from 'react';
import { StyleSheet,Text,TouchableOpacity,Image, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import Switch from 'react-native-customisable-switch';
import {i18n} from 'react-native-i18n-localize'

const Settings = ({navigation }) =>{

const [isEnabled, setIsEnabled] = useState(false);
 const toggleSwitch = () => setIsEnabled(previousState => !previousState); 
    return (
      <View style={styles.body}>
        <View style={styles.sectionImageBack}>
          <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
              <Image style={[styles.imageBack]} source={images["back"]}/> 
          </TouchableOpacity>
        </View>

        <Text style={styles.baseTitle}>{i18n.t("Settings")}</Text>
        <View> 
           <View style={styles.row}>
              <Text style={styles.text}>{i18n.t("Terms_Condition")}</Text> 
              <TouchableOpacity style={styles.containerImage} onPress={()=>navigation.navigate('TermsConditions')}>
                  <Image style={[styles.imageArrow]} source={images["arrowSetting"]}/> 
              </TouchableOpacity >
           </View >
           <View style={styles.row}>
              <Text style={styles.text}>{i18n.t("Privacy_Policy")}</Text> 
              <TouchableOpacity style={styles.containerImage} onPress={()=>navigation.navigate('PrivacyPolicy')}>
                  <Image style={[styles.imageArrow]} source={images["arrowSetting"]}/> 
              </TouchableOpacity >
           </View >
           <View style={styles.row}>
              <Text style={styles.text}>{i18n.t("Change_Language")}</Text> 
              <TouchableOpacity style={styles.containerImage} onPress={()=>navigation.navigate('languageSelection')}>
                  <Image style={[styles.imageArrow]} source={images["arrowSetting"]}/> 
              </TouchableOpacity >
           </View >
           <View style={styles.row}>
              <Text style={styles.text}>{i18n.t("Receive_Notifications")}</Text> 
              <View style={styles.containerImage}>
               <Switch
                  value={isEnabled}
                  onChangeValue={toggleSwitch}
                  fontSize={16}
                   switchWidth={59}
                  activeBackgroundColor={'#90D12F'}
                  inactiveBackgroundColor={'#CFCFCF'}
                  switchHeight={24}
                  switchBorderRadius={12}
                  switchBorderWidth={0}
                  buttonWidth={17}
                  buttonHeight={17}
                  buttonBorderRadius={10}
                  buttonBorderColor={'rgba(0, 0, 0, 1)'}
                  buttonBorderWidth={0}
                  
                  padding={true}
                />
          
                  
              </View >
           </View >
        </View>
      </View>
    );

}

export default Settings;