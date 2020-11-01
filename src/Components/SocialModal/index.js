import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  I18nManager
} from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import { BlurView } from "@react-native-community/blur";
import {i18n} from 'react-native-i18n-localize'

const SocialModal= (props) => {

  return (
      <Modal
       transparent={true}
       visible={props.modalVisible}
       animationType="fade"
       transparent
       >  
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={1}
            reducedTransparencyFallbackColor="black"
          />
 
          <View style={styles.body}>
           <View style={styles.container}>
              <TouchableOpacity
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  onPress={()=>props.setModalVisible(false)}
                  style={styles.containerClose}>
            
                     <Image style={[styles.imageClose]} source={images["close"]}/> 
              </TouchableOpacity>

              <Text style={styles.title}>{i18n.t('Choose_Preferable')}</Text>
              
              {I18nManager.isRTL ?
                <Text style={styles.title}>{i18n.t('Method')} {props.title}</Text>
               :
               <Text style={styles.title}>{props.title} {i18n.t('Method')}</Text>
              }

              <View style={styles.socialIcon}>
                <Image style={[styles.image]} source={images["facebook-icon"]}/> 
                <Image style={[styles.image,styles.marginImage]} source={images["gmail-icon"]}/> 
                <Image style={[styles.image]} source={images["apple-icon"]}/> 
              </View>
            
            </View>

         </View> 
      </Modal>

  );
};

export default SocialModal;
