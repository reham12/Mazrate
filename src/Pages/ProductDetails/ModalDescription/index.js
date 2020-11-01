import React from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  Image,
  ScrollView
} from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import {i18n} from 'react-native-i18n-localize'


const ModalDescription= (props) => {


  return (
      <Modal
       transparent={true}
       visible={props.modalVisibleDescription}
       animationType="fade"
       >
  
          <View style={styles.body}>
            <View style={styles.container}>
            <TouchableOpacity
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  onPress={()=>props.setModalVisibleDescription(false)}
                  style={styles.containerClose}>
            
                     <Image style={[styles.imageClose]} source={images["close"]}/> 
              </TouchableOpacity>
              <ScrollView contentInsetAdjustmentBehavior="automatic" 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.scrollView}
                >  
              
                <View style={styles.texts}>

                  <Text style={styles.text}>
                    {i18n.t("Lorem_ipsum_all")}
                  </Text>
                  <Text style={styles.text}>
                     {i18n.t("Lorem_ipsum_all")}
                  </Text>
                  <Text style={styles.text}>
                    {i18n.t("Lorem_ipsum_all")}
                  </Text>
                  <Text style={styles.text}>
                    {i18n.t("Lorem_ipsum_all")}
                  </Text>
                  <Text style={styles.text}>
                     {i18n.t("Lorem_ipsum_all")}
                  </Text>
                  <Text style={styles.text}>
                    {i18n.t("Lorem_ipsum_all")}
                  </Text>
                  
                </View>
              </ScrollView>
            </View>

          </View>
      </Modal>

  );
};

export default ModalDescription;
