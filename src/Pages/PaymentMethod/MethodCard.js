import React, { Component } from 'react';
import { StyleSheet,ScrollView,Text,TouchableOpacity,Image, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"

const MethodCard = ({item}) =>{

  return (

      <TouchableOpacity  activeOpacity={0.6} style={[styles.card,item.item.status==="sucess"&&styles.activecCard ]} underlayColor="#DDDDDD">
        <View style={styles.info}>
           <Image style={[styles.imageMaster]} source={images[item.item.image]}/> 
           <Text style={styles.titlePayment}>{item.item.title}</Text>
        </View>
        {item.item.status==="sucess"&&<View>
          <View style={styles.correctShap}>
           <Image style={[styles.imageCorrect]} source={images["correctPayment"]}/> 
          </View>
        </View>}
      </TouchableOpacity>
  );

}

export default MethodCard;