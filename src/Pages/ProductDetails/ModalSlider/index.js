import React, {useState,useRef} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity ,
  Modal,
  Text
} from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import Swiper from 'react-native-swiper';
import { BlurView } from "@react-native-community/blur";

const ModalSlider= (props) => {
  const swiperRef = useRef(null)
 const renderPagination = (index, total, context) => {
  return (
    <TouchableOpacity style={styles.paginationStyle} >
      <Text style={styles.paginationText}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </TouchableOpacity>
  )
}

  return (

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
                    <TouchableOpacity style={styles.slide1}  onPress={ ()=>props.navigation.navigate('FarmGallery') }>
                      <Image style={[styles.imageSlidr1]} resizeMode="contain" source={images["farms-details"]}/>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.slide1}  onPress={ ()=>props.navigation.navigate('FarmGallery') }>
                      <Image style={[styles.imageSlidr1]} resizeMode="contain" source={images["farms-details"]}/>  
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.slide1}  onPress={ ()=>props.navigation.navigate('FarmGallery') }>
                      <Image style={[styles.imageSlidr1]} resizeMode="contain" source={images["farms-details"]}/>  
                    </TouchableOpacity>

                  </Swiper>
             

  );
};

export default ModalSlider;
