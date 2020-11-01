import React from 'react';
import { Text,TouchableOpacity,Modal,Image,ScrollView, I18nManager,View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import Guest from "./Guest"
import {i18n} from 'react-native-i18n-localize'

const ModalGuests =(props) =>{

    return (
 
      <Modal
        animated
        animationType="fade"
        visible={props.modalVisible}
        transparent
       >
          <View style={styles.body}>
            <View style={styles.container}>
              <ScrollView contentInsetAdjustmentBehavior="automatic" 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.scrollView}
                >  

                  <View style={styles.bodyModal}>
                    <View style={styles.sectionImageBack}>
                      <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" 
                      onPress={()=>{props.setModalVisible(false)}}>
                          <Image style={[styles.imageBack]} source={images["back"]}/> 
                      </TouchableOpacity>

                    </View>

                    <Text style={styles.title}>{i18n.t("Add_Guests")}</Text>
                    <Guest title={i18n.t("Adults")} text={i18n.t("Ages_13_above")}/>
                    <Guest title={i18n.t("Children")} text={i18n.t("Ages_12")}/>
                    <Guest title={i18n.t("Infants")} text={i18n.t("under_2")}/>
                  </View>

                  <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnDone} underlayColor="#DDDDDD">
                    <Text style={styles.textBtn}>{i18n.t("Confirm")}</Text>
                  </TouchableOpacity>

              </ScrollView>
            </View>
          </View>
      </Modal>


    );
  }



export default ModalGuests;