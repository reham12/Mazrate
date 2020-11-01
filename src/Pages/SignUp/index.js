import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import images from "@assets/imags-m";
import SocialModal from "@components/SocialModal";
import styles from "./style"
import CheckBox from 'react-native-check-box'
import {i18n} from 'react-native-i18n-localize'

const SignUp = ({ navigation }) =>{

  const[modalVisible,setModalVisible]=useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const routeLogin = () => navigation.navigate('Login' ,{});
  const routeVerificationSign = () => navigation.navigate('VerificationSign' ,{});

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
            {modalVisible && <SocialModal modalVisible={modalVisible} title ={i18n.t("Registration")} setModalVisible={setModalVisible}/>}

            <View style={styles.body}>
     
              <View style={styles.sectionLogo}>
                <Image style={[styles.imagelogo]} source={images["logo"]}/>   
              </View>


              <View style = {styles.container}>
                <View style={styles.sectionImageUpIn}>
                  <Image style={[styles.imageUpIn]} source={images["login"]}/> 
                </View> 
                <View style={styles.sectionForm}>
                  <Text style={styles.title}>{i18n.t("sign_up")}</Text>
                  <View style={styles.shadowBox}>
         
                     <TextInput 
                         underlineColorAndroid = "transparent"
                         placeholder = {i18n.t("Full_Name")} 
                         placeholderTextColor = "#acacac"
                         autoCapitalize = "none"           
                         style={styles.input}
                         />
                      <Image style={[styles.imageUserIcon]} source={images["user-icon"]}/>

                  </View>

                   <View style={styles.shadowBox}>
         
                     <TextInput 
                         underlineColorAndroid = "transparent"
                         placeholder = {i18n.t("Mobile_Number")}
                         placeholderTextColor = "#acacac"
                         autoCapitalize = "none"
                         style={styles.input}
                         />
                      <Image style={[styles.imagePhone]} source={images["phone"]}/>

                  </View>
                  <View style={styles.shadowBox}>
         
                     <TextInput 
                         underlineColorAndroid = "transparent"
                         placeholder = {i18n.t("Password")}
                         placeholderTextColor = "#acacac"
                         autoCapitalize = "none"
                         style={styles.input}
                         />
                      <Image style={[styles.imageEyeIcon]} source={images["eye-view"]}/>
                       
                  </View>

                  <View style={styles.shadowBox}>
         
                     <TextInput 
                         underlineColorAndroid = "transparent"
                         placeholder = {i18n.t("Confirm_Password")}
                         placeholderTextColor = "#acacac"
                         autoCapitalize = "none"
                         style={styles.input}
                         />
                      <Image style={[styles.imageEyeIcon]} source={images["eye-view"]}/>
                       
                  </View>
                      
                  <View style={styles.sectionForth}>
                    <CheckBox
                      onClick={()=>{setIsChecked(!isChecked)}}
                      isChecked={isChecked}
                      rightTextView={
                        <Text style={styles.containerText}>
                           <Text style={styles.fisrtText}> {i18n.t("By_creating_account")} </Text>
                           <Text style={styles.secondText}> {i18n.t("Terms_Condition_Privacy_Policy")}</Text>
                        </Text>}
                      style={styles.checkBoxStyle}
                      uncheckedCheckBoxColor={"#acacac"}
                      checkedCheckBoxColor="#90d12f"
                      checkBoxColor="red"

                    />
                  </View>
                  <View style={styles.sectionActions}>
                    
                      <TouchableOpacity  activeOpacity={0.6} onPress={routeVerificationSign}  underlayColor="#DDDDDD" style={styles.btnNext}>
                           <Image style={[styles.imageGo]} source={images["go"]}/> 
                      </TouchableOpacity>
                  </View>


                </View>

               
                <View style={styles.sectionFifth}>
                    <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                       <Text style={styles.textSectionFifth}>{i18n.t("Social_Registration")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textRegister} onPress={routeLogin}>
                       <Text style={styles.textNew}>{i18n.t("Do_account")}</Text><Text style={styles.textSectionFifth}>{i18n.t("login")}</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
      </View>
    </>

  );
};

export default SignUp;
