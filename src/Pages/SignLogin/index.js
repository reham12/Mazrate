import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import {i18n} from 'react-native-i18n-localize'

const SignLogin = ({ navigation }) =>{

  const routeSignUp = () => navigation.navigate('SignUp' ,{});
  const routeLogin = () => navigation.navigate('Login' ,{});

  return (
    <View style={styles.body}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic" 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.ScrollView}
       >    
          <View style={styles.sectionLogo}>
  	        <Image style={[styles.imagelogo]} source={images["logo"]}/>   
    		  </View>

          <View style={styles.container}>

            <View style={styles.sectionImageUpIn}>
              <Image style={[styles.imageUpIn]} source={images["sign-up-in"]}/> 
            </View> 

            <View style={styles.containerButtons}>

      				<TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.shadowBox,styles.boxLogin]} onPress={routeLogin}>
      				    <Text style={styles.textLogin}>{i18n.t('login')}</Text>
      				    <Image style={[styles.imageLogin]} source={images["login-icon"]}/> 
      				</TouchableOpacity>

      				<TouchableOpacity activeOpacity={0.6}  underlayColor="#DDDDDD" style={styles.shadowBox}  onPress={routeSignUp}>
      				    <Text style={styles.textSign}>{i18n.t('sign_up')}</Text>
      				    <Image style={[styles.imageSing]} source={images["sing-up-icon"]}/> 
      				</TouchableOpacity>

            </View>

      

          </View>

          <View style={styles.sectionSocial}>
              <Text style={styles.textContinue}>{ i18n.t('continue_with') }</Text>
              <View style={styles.socialIcon}>
                <Image style={[styles.image]} source={images["facebook-icon"]}/> 
                <Image style={[styles.image]} source={images["gmail-icon"]}/> 
                <Image style={[styles.image]} source={images["apple-icon"]}/> 
              </View>
          </View>

      </ScrollView>
    </View>


  );
};

export default SignLogin;
