import React, {useState,useRef} from 'react';
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

import Swiper from 'react-native-swiper';

const ModalDescription= (props) => {
  const swiperRef = useRef(null)
 const renderPagination = (index, total, context) => {
  return (
    <TouchableOpacity style={styles.paginationStyle} >
      <Text style={styles.paginationText}>
        <Text style={styles.paginationText}>{index +1}</Text>/{total}
      </Text>
    </TouchableOpacity>
  )
}

  return (
      <Modal
       transparent={true}
       visible={props.modalVisibleGallery}
       animationType="fade"
       >
  
          <View style={styles.body}>
            <View style={styles.container}>
              <View style={styles.sectionImageBack}>
                <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>{props.setModalVisibleGallery(false)}}>
                    <Image style={[styles.imageBack]} source={images["back"]}/> 
                </TouchableOpacity>

              </View>
        
               <Swiper  
                     dotStyle={styles.dot}
                     activeDotStyle={styles.activeDot} 
                     showsButtons={false}
                     loop={false}
                     renderPagination={renderPagination}
                     paginationStyle={styles.pagination}
                     containerStyle={styles.containerStyle}
                      ref={swiperRef}
                  >
                    <View style={styles.slide1}  >
                      <Image style={[styles.imageSlidr1]} resizeMode="contain" source={images["farms-details"]}/>  
                    </View>
                    <View style={styles.slide1}>
                    <Image style={[styles.imageSlidr1]} resizeMode="contain" source={images["farms-details"]}/>  
                     
                    </View>

                    <View style={styles.slide1}>
                     <Image style={[styles.imageSlidr1]} resizeMode="contain" source={images["farms-details"]}/>  
                     
                    </View>

                  </Swiper>
            </View>

          </View>
      </Modal>

  );
};

export default ModalDescription;
