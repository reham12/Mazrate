import React, {useState} from 'react';
import {

  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import {i18n} from 'react-native-i18n-localize'

const Verification= ({ navigation }) =>{

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const routeHome = () => navigation.navigate('HomePage' ,{});
  const routeChangePassword = () => navigation.navigate('ChangePassword' ,{});

  return (

    <>
      <View style={styles.sectionImageBack}>
        <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
            <Image style={[styles.imageBack]} source={images["back"]}/> 
        </TouchableOpacity>
      </View>

      <View style={styles.containerScrollView}>

        <ScrollView contentInsetAdjustmentBehavior="automatic" 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.scrollView}
          >
          <View style={styles.body}>

              <View style={styles.sectionImage}>
                <Image style={[styles.image]} source={images["varification-image"]}/> 
              </View>

              {/* body verification*/} 
              <Text style={styles.title}>
                  {i18n.t("Verification")}
              </Text>
              <Text style={styles.text}>
                  {i18n.t("Enter_OTP_code")}
              </Text>
              {/* section for input code*/}
           
              <View style={styles.inputs}>
                  <View style={styles.containerInputCode}>
                    <TextInput 
                      underlineColorAndroid = "transparent"
                      placeholderTextColor = "#acacac"
                      maxLength = {1}
                      numberOfLines={1}
                      keyboardType='numeric'
                      style={styles.inputCode}
                     />
                  </View>
                  <View style={styles.containerInputCode}>
                    <TextInput 
                      underlineColorAndroid = "transparent"
                      placeholderTextColor = "#acacac"
                      maxLength = {1}
                      numberOfLines={1}
                      keyboardType='numeric'
                      style={styles.inputCode}
                     
                     />
                  </View>
                  <View style={styles.containerInputCode}>
                    <TextInput 
                      underlineColorAndroid = "transparent"
                      placeholderTextColor = "#acacac"
                      maxLength = {1}
                      numberOfLines={1}
                      keyboardType='numeric'
                      style={styles.inputCode}
                      
                     />
                   </View>
                  <View style={[styles.dottedBorder]}>    
                     <Image style={[styles.imageBorderBottomImage]} source={images["borderBottomImage"]}/> 
                  </View>
              </View>

              {/* section for buttons*/}
              <View style={styles.sectionActions}>

                <TouchableOpacity  ><Text style={styles.title}>{i18n.t("Next")}</Text></TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.btnNext} onPress={routeChangePassword}>
                  <Image style={[styles.imageGo]} source={images["go"]}/> 
                </TouchableOpacity>

              </View>

              {/* section for dispaly remaind time on send code*/}
              <View >
                 <Text style={styles.textTime}>{i18n.t("Resend_In")} 00:15</Text>
              </View>




          </View>

        </ScrollView>
      </View>
    </>

  );
};



export default Verification;
