import React, { Component } from 'react';
import {Text,ImageBackground,Image,TouchableOpacity, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import {i18n} from 'react-native-i18n-localize'

const ProductSearch = ({ navigation,item }) =>{
  const routeProduct = () => navigation.navigate('ProductDetails' ,{});
  const routeBooking = () => navigation.navigate('PaymentMethod' ,{});

  const handleCompleted=()=>{
    alert("completed")
  }
  const handleCanceled=()=>{
    alert("canceled")
  }

    return (
        <TouchableOpacity style={[styles.component,styles.row]} onPress={routeProduct}> 
            <View style={styles.sectionBackground}>
  		        <Image source={images["farms2"]} style={styles.image}/>
  		        {item.item.type===undefined&&  <View style={styles.favouriteSection}>
  		          <Image source={images["favourite"]} style={styles.imageFavourite}/>
  		        </View>}
            </View>
            <View style={styles.sectionInfo}> 
                <Text style={styles.name}>{i18n.t("The_View_Farm")}</Text>
                <View style={[styles.sectionReviews,styles.row]}>
                  <View style={[styles.sectionStars,styles.row]}>
                     <Image  style={[styles.imageStar]} source={images["star-on"]}/>
                     <Image  style={[styles.imageStar]} source={images["star-on"]}/>
                     <Image  style={[styles.imageStar]} source={images["star-on"]}/>
                     <Image  style={[styles.imageStar]} source={images["star-on"]}/>
                     <Image  style={[styles.imageStar]} source={images["star-on"]}/>
                  </View>
                  {item.item.type===undefined&& <Text style={styles.text}>35 {i18n.t("reviews")}</Text>}
                </View>
                <View style={[styles.sectionLocation ,styles.row]}>
                  <Image source={images["gps"]} style={styles.imageMap}/>
                  <Text style={styles.text}>{i18n.t("your_location")}</Text>
                </View>
                <View style={[styles.sectionPrice, item.item.type!== undefined&&styles.sectionPriceSpace]}>
                  <Text style={styles.price}>90<Text style={styles.currency}>{i18n.t("jod")}</Text></Text>
                  {  item.item.type!== undefined&& <Text style={styles.date}>29 Sep, 2020</Text>}
                </View>
            </View>

            <View style={styles.sectionBook}>
              {item.item.type===undefined&& <TouchableOpacity  activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.btnBook} onPress={routeBooking} >
                <Image  style={[styles.imageClick]} source={images["click"]}/> 
                <Text style={styles.textBook}>{i18n.t("Book_Now")}</Text>
                </TouchableOpacity>
              }
              {
                item.item.type!== undefined&& item.item.type==="Complete" &&
                <TouchableOpacity  activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.btnBook} onPress={handleCompleted} >
                  <Image  style={[styles.imageCompleted]} source={images["completed"]}/> 
                  <Text style={styles.textBook}>{i18n.t("Complete")}</Text>
                </TouchableOpacity>
              }
              {
                item.item.type!== undefined&& item.item.type==="Canceled" &&
                <TouchableOpacity  activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.btnBook,styles.canceled]} onPress={handleCanceled}>
                  <Image  style={[styles.imageCanceled]} source={images["canceled"]}/> 
                  <Text style={styles.textBook}>{i18n.t("canceled")}</Text>
                </TouchableOpacity>
              }
              
            </View>

        </TouchableOpacity>
    );
  
}

export default ProductSearch;
