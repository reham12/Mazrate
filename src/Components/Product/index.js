import React from "react";
import { ImageBackground,Image,TouchableOpacity,I18nManager, StyleSheet, Text, View } from "react-native";
import images from "@assets/imags-m";
import styles from "./style"
import {I18nLocalize,i18n} from 'react-native-i18n-localize'

const Product = ({navigation,statusBookNowButton}) => {
  const routeBooking = () => navigation.navigate('PaymentMethod' ,{});
  const routeProduct = () => navigation.navigate('ProductDetails' ,{});
  return (

  <TouchableOpacity style={styles.container} onPress={routeProduct}>
     <Image  source={images["farms2"]} style={styles.image}/> 
     <ImageBackground source={images["background-linear"]} style={styles.imageLinear}>
        <View style={styles.favouriteSection}>
           <Image source={images["favourite"]} style={styles.imageFavourite}/>
        </View>
        <View style={styles.productSection}>
          {statusBookNowButton && <View style={styles.bookSection}>
              <TouchableOpacity  activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.btnBook} onPress={routeBooking}>
                <Image  style={[styles.imageClick]} source={images["click"]}/> 
                <Text style={styles.textBook}>{i18n.t("Book_Now")}</Text>
              </TouchableOpacity>
          </View>}
          <View style={[styles.infoSection,statusBookNowButton && styles.paddingInfoSection]}>
              <Text style={styles.name}>{i18n.t("Infinity_Farm")}</Text>
              <Text style={styles.company}>{i18n.t("Seddo_Nostrud")} </Text>
              <View style={[styles.footerSection]}> 
                <Text style={styles.price}>90<Text style={styles.currency}>{i18n.t("jod")}</Text></Text>
                <View style={styles.starSection}>
                  <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                  <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                  <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                  <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                  <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                </View>
              </View>
              
          </View>

        </View>
      </ImageBackground>
  
  </TouchableOpacity>
);
}


export default Product;