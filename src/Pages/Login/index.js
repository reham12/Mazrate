import React, {useState, useEffect } from 'react';
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
import styles from "./style"
import SocialModal from "@components/SocialModal";
import {i18n} from 'react-native-i18n-localize'

const Login =({ navigation }) =>{

  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[modalVisible,setModalVisible]=useState(false)

  const handleEmail = (text) => {
      setEmail(text)
   }
  const handlePassword = (text) => {
      setPassword(text)
   }
  const login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
  }

  const routeSignUp = () => navigation.navigate('SignUp' ,{});
  const routeForgetPassword = () => navigation.navigate('ForgetPassword' ,{});

  return (
      <View style={styles.body}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" 
           showsHorizontalScrollIndicator={false} 
           contentContainerStyle={styles.scrollView}
          >
            {modalVisible && <SocialModal modalVisible={modalVisible} title ={i18n.t('login')} setModalVisible={setModalVisible}/>}
            <View>
     
              <View style={styles.sectionLogo}>
                <Image style={[styles.imagelogo]} source={images["logo"]}/>   
              </View>

              <View style = {styles.container}>
                <View style={styles.sectionImageUpIn}>
                  <Image style={[styles.imageUpIn]} source={images["login"]}/> 
                </View>  
                <View style={styles.sectionForm}>
                  <Text style={styles.title}>{i18n.t('login')}</Text>
                  <View style={styles.shadowBox}>
         
                      <TextInput 
                         underlineColorAndroid = "transparent"
                         placeholder = {i18n.t('Mobile_Number')}
                         inlineImageLeft='search_icon'
                         placeholderTextColor = "#acacac"
                         autoCapitalize = "none"
                         onChangeText = {handleEmail}
                         style={styles.input}
                         />
                      <Image style={[styles.imageUserIcon]} source={images["user-icon"]}/>

                  </View>
                  <View style={styles.shadowBox}>
         
                      <TextInput 
                         underlineColorAndroid = "transparent"
                         placeholder = {i18n.t('Password')}
                         inlineImageLeft='search_icon'
                         placeholderTextColor = "#acacac"
                         autoCapitalize = "none"
                         onChangeText = {handlePassword}
                         style={styles.input}
                         />
                      <Image style={[styles.imageEyeIcon]} source={images["eye-view"]}/>
                       
                  </View>
                    

                      
                  <View style={styles.sectionForth}>
                    <TouchableOpacity onPress={routeForgetPassword} style={styles.textRegister}>
                      <Text style={styles.textForgetPassword}>{i18n.t('Forget_Password')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  activeOpacity={0.6}
                        underlayColor="#DDDDDD" style={styles.btnNext} >
                       <Image style={[styles.imageGo]} source={images["go"]}/> 
                    </TouchableOpacity>
                  </View>

                </View>

                <View style={styles.sectionFifth}>
                    <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                       <Text style={styles.textSectionFifth}>{i18n.t('Social_Login')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={routeSignUp} style={styles.textRegister}>
                    <Text style={styles.textNew}>{i18n.t('I_new')}</Text><Text style={styles.textSectionFifth}>{i18n.t('Register_now')}</Text></TouchableOpacity>
                </View>

              </View>

            </View>
        </ScrollView> 
      </View>
  );
};


export default Login;
