import React, {useState, useEffect,useRef  } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,

} from 'react-native';
import images from "../../assets/imags-m";
import styles from "./style"
import {i18n} from 'react-native-i18n-localize'

const ChangePassword= ({ navigation }) =>{

  const routeHome = () => navigation.navigate('HomePage' ,{});
 
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
                <Image style={[styles.image]} source={images["varification-image"]}/> 
              </View>

              {/* body verification*/} 
              <View style={styles.body}>
                <Text style={styles.title}>
                    {i18n.t("Change_Password")}
                </Text>
              </View>
              {/* section for input code*/}
              <View style={styles.containerForm} >

               <View style={styles.shadowBox}>
       
                   <TextInput 
                       underlineColorAndroid = "transparent"
                       placeholder = {i18n.t("New_Password")}
                       placeholderTextColor = "#acacac"
                       autoCapitalize = "none"
                       style={styles.input}
                       />
                    <Image style={[styles.imageEyeIcon]} source={images["eye-view"]}/>
                     
                </View>
                <View style={styles.shadowBox}>
       
                   <TextInput 
                       underlineColorAndroid = "transparent"
                       placeholder = {i18n.t("Confirm_New_Password")}
                       placeholderTextColor = "#acacac"
                       autoCapitalize = "none"
                       style={styles.input}
                       />
                    <Image style={[styles.imageEyeIcon]} source={images["eye-view"]}/>
                     
                </View>
              </View>


              {/* section for buttons*/}
              <View style={styles.sectionActions}>

                <Text style={styles.title}>{i18n.t("Confirm")}</Text>
                <TouchableOpacity  activeOpacity={0.6}
                  underlayColor="#DDDDDD" style={styles.btnNext} onPress={routeHome}>
                  <Image style={[styles.imageGo]} source={images["go"]}/> 
                </TouchableOpacity>
              </View>
          </ScrollView>
        </View>

      </>

   

  );
};


export default ChangePassword;
