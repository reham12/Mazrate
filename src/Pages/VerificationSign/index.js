import React, {useState,useRef} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  I18nManager
} from 'react-native';
import images from "@assets/imags-m";
import IntlPhoneInput from 'react-native-intl-phone-input';
import styles from "./style"
import {i18n} from 'react-native-i18n-localize'

const VerificationSign= ({ navigation }) =>{

  const inputRef = useRef(null);
  const phoneInput= useRef(null)
  const onChangeText = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}) => {
    console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);
  };
  const routeVerification = () => navigation.navigate('Verification' ,{});

  return (
     <>
      <View style={styles.sectionImageBack}>
        <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
            <Image style={[styles.imageBack]} source={images["back"]}/> 
        </TouchableOpacity>
      </View>

      <View style={styles.containerScrollView}>

         
            <ScrollView 
              contentInsetAdjustmentBehavior="automatic" 
              showsHorizontalScrollIndicator={false} 
              contentContainerStyle={styles.scrollView}
            >

              <View style={styles.sectionImage}>
                 <Image style={[styles.image]} source={images["forget-password"]}/> 
              </View>

              {/* body verification*/} 
              <View style={styles.body}>
                <Text style={styles.title}>
                    {i18n.t("Verification")}
                </Text>
                <Text style={styles.text}>
                    {i18n.t("Please_enter_your_Mobile_number")}
                </Text>
              </View>
              {/* section for input code*/}
              <View style={{   marginRight:15}}>
                <View style={styles.shadowBox}>

                    <IntlPhoneInput 
                      onChangeText={onChangeText}
                      defaultCountry="JO" 
                      phoneInputStyle={styles.phoneInputStyle}
                      containerStyle={styles.containerStyle}
                      dialCodeTextStyle={styles.dialCode}
                      flagStyle={styles.flagStyle} />
                    <Image style={[styles.imagePhone]} source={images["phone"]}/>

                </View>
              </View>


              {/* section for buttons*/}
              <View style={styles.sectionActions}>

                <TouchableOpacity onPress={routeVerification} activeOpacity={0.6} underlayColor="#DDDDDD">
                   <Text style={styles.title}>{i18n.t("Next")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={routeVerification}  activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.btnNext}>
                  <Image style={[styles.imageGo]} source={images["go"]}/> 
                </TouchableOpacity>
                
              </View>
            </ScrollView>
     
           </View>
           </>
  );
};


export default VerificationSign;
