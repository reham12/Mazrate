import React from 'react';
import { Text,TouchableOpacity,Modal,Image, View } from 'react-native';
import images from "@assets/imags-m";
import { BlurView } from "@react-native-community/blur";
import styles from "./style"
import {i18n} from 'react-native-i18n-localize'

const SortModal =(props) =>{

    return (
 
      <Modal
        animated
        animationType="fade"
        visible={true}
        transparent
       >
          <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={1}
            reducedTransparencyFallbackColor="black"
          />
          <View style={styles.body}>
           <View style={styles.container}>
              <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.containerClose} onPress={()=>props.setModalVisible(false)}>
                  <Image style={[styles.imageClose]} source={images["close"]}/> 
              </TouchableOpacity>

              <Text style={styles.title}>{i18n.t("sort_by")}</Text>
              <View>
                <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD">
                  <Text style={styles.sortType}>{i18n.t("Distance_Place")}</Text>
                  <Text style={styles.sortType}>{i18n.t("Star_Rating_Highest")}</Text>
                  <Text style={styles.sortType}>{i18n.t("Star_Rating_Lowest")}</Text>
                  <Text style={styles.sortType}>{i18n.t("Price_Lowest")}</Text>
                  <Text style={styles.sortType}>{i18n.t("Price_Highest")}</Text>
              </TouchableOpacity>
              </View>

            
            </View>

         </View>
      </Modal>


    );
  }



export default SortModal;