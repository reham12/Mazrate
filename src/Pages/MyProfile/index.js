import React, {useState,useRef} from 'react';
import { StyleSheet,ImageBackground,ScrollView,Text,TouchableOpacity,TextInput,Image, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import IntlPhoneInput from 'react-native-intl-phone-input';
import {i18n} from 'react-native-i18n-localize'
const MyProfile = ({route,navigation }) =>{
    const inputRef = useRef(null);
    const phoneInput= useRef(null)
    const onChangeText = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}) => {
      console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);
    };
    const routeEditProfile= () => navigation.navigate("MyProfile", {title: i18n.t("Edit_Profile"),type: 'edit',light:"dark"});
    const { title , type,light} = route.params;
    return (
      <View style={styles.body}>
            <ImageBackground style={styles.imageBackground} source={images["background-profile"]}>
                <Image style={[styles.imageBackground,styles.imageBackground2]} source={images["background-profile2"]}/>
    	        <View style={styles.sectionImageBack}>
        	       <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" 
                        onPress={()=>{
                            if(type!=="edit"){
                                navigation.goBack()
                            }else{
                                navigation.navigate('MyProfile' , {title: i18n.t("My_Profile"),type: 'profile',light:"dark"})
                            }
                        }}>
        	           <Image style={[styles.imageBack]} source={images["back"]}/> 
        	       </TouchableOpacity>
    	        </View>
                
                <ScrollView contentInsetAdjustmentBehavior="automatic" 
                    showsHorizontalScrollIndicator={false} 
                    style={{width:"100%"}}
                    contentContainerStyle={styles.container}
                    >
                    <View style={[styles.containerForm,light==="dark"? styles.containerFormDark :styles.containerFormLight]}>
                        <Text style={[styles.baseTitle,light==="dark"? styles.baseTitleDark :styles.baseTitleLight]}>
                            {title}
                        </Text>

                        <View style={styles.shadowBox}>
                          
                            <TextInput 
                                underlineColorAndroid = "transparent"
                                placeholder = {i18n.t("Full_Name")}
                                placeholderTextColor = "#CFCFCF"
                                autoCapitalize = "none"           
                                style={[styles.input,light==="dark"? styles.inputDark :styles.inputLight]}
                                />
                            <Image style={[styles.imageUserIcon]} source={images["user-icon"]}/>
                              

                        </View>
                    
                        <View style={styles.shadowBox}>
                            <IntlPhoneInput onChangeText={onChangeText} defaultCountry="JO" 
                               containerStyle={light==="dark"? styles.phoneInputDark :styles.phoneInputLight}
                               phoneInputStyle={light==="dark"? styles.inputDark :styles.inputLight}
                               dialCodeTextStyle={light==="dark"? styles.inputDark :styles.inputLight}
                               flagStyle={styles.flagStyle}
                               flagStyle={styles.flagStyle} />
                           
                            <Image style={[styles.imagePhone]} source={images["phone"]}/>

                        </View>
                        <View style={styles.shadowBox}>
         
                            <TextInput 
                                underlineColorAndroid = "transparent"
                                placeholder = {i18n.t("Password")}
                                placeholderTextColor = "#CFCFCF"
                                autoCapitalize = "none"
                                autoCompleteType="password"
                                textContentType="newPassword"
                                secureTextEntry={true}
                                style={[styles.input,light==="dark"? styles.inputDark :styles.inputLight]}
                                />
                            <Image style={[styles.imageEyeIcon]} source={images["eye-view"]}/>
                           
                        </View>

                        <View style={styles.shadowBox}>
                 
                            <TextInput 
                                underlineColorAndroid = "transparent"
                                placeholder = {i18n.t("Confirm_Password")}
                                placeholderTextColor = "#CFCFCF"
                                autoCapitalize = "none"
                                autoCompleteType="password"
                                textContentType="password"
                                secureTextEntry={true}
                                style={[styles.input,light==="dark"? styles.inputDark :styles.inputLight]}
                                />
                            <Image style={[styles.imageEyeIcon]} source={images["eye-view"]}/>
                               
                        </View>

                       {type==="profile" && 
                            <View style={styles.containerBtn}>
                                <TouchableOpacity  activeOpacity={0.6}   underlayColor="#DDDDDD" style={styles.btn} onPress={()=>routeEditProfile()}>
                                       <Image style={[styles.imageEditIcon]} source={images["editIcon"]}/> 
                                </TouchableOpacity>
                            </View>
                        }
                        {type==="edit" && 
                           <View style={styles.containerBtns}>
                                <TouchableOpacity  activeOpacity={0.6}   underlayColor="#DDDDDD" style={[styles.btn,styles.canceledBtn]} onPress={()=>routeEditProfile}>
                                       <Image style={[styles.imageCanceledIcon]} source={images["canceled"]}/> 
                                </TouchableOpacity>
                                 <TouchableOpacity  activeOpacity={0.6}   underlayColor="#DDDDDD" style={[styles.btn]} onPress={()=>routeEditProfile}>
                                       <Image style={[styles.imageCorrectIcon]} source={images["corretProfile"]}/> 
                                </TouchableOpacity>
                            </View>
                        }
                  
                       
                    </View>
                </ScrollView>
            </ImageBackground>
      </View>
    );

}

export default MyProfile;