import React, { Component } from 'react';
import { StyleSheet,Text,TouchableOpacity,Image, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import BasicTitle from '@components/BasicTitle';
import {i18n} from 'react-native-i18n-localize'

const Checkout = ({navigation }) =>{
    return (
      <View style={styles.body}>
        <View style={styles.sectionImageBack}>
          <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
              <Image style={[styles.imageBack]} source={images["back"]}/> 
          </TouchableOpacity>
        </View>

        <Text style={styles.baseTitle}>{i18n.t("Checkout")}</Text>




      <View style={styles.container}>
        <View style={styles.firstSection}>

          <View style={[styles.section,styles.sectionFarms,styles.row]}>
              <View style={styles.row}> 
                <Image style={[styles.imageFarms]} source={images["farms-details"]}/>
                <View>
                  <BasicTitle title={i18n.t("Infinity_Farm")}/>
                  <View style={styles.textSection} >
                     <Text style={styles.textBase}>{i18n.t("From:")} </Text>
                     <Text style={styles.textValue}>28 Sep, 2020</Text>
                     <Text style={styles.textValue}> -</Text>
                     <Text style={styles.textBase}>{i18n.t("To:")} </Text>
                     <Text style={styles.textValue}>30 Sep, 2020</Text>
                  </View>
                  <View style={styles.textSection} >
                     <Text style={styles.textBase}>{i18n.t("Number_of_Guests")}</Text>
                     <Text style={styles.textValue}>15 {i18n.t("Guests")}</Text>
                  </View>
                </View>
              </View>
              
          </View>

          <View style={[styles.section,styles.row]}>
              <Text style={styles.textTotal}>{i18n.t("Sub_Total")}</Text>
              <Text style={styles.price}>30<Text style={styles.currency}>{i18n.t("jod")}</Text></Text>
          </View>
        </View>
        <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnDone} underlayColor="#DDDDDD" 
          onPress={()=> navigation.navigate('SuccessfulConfirmation' ,{})}>
          <Text style={styles.textBtn}>{i18n.t("Place_Order")}<Text style={[styles.price,styles.priceBtn]}>30<Text style={[styles.currency,styles.currencyBtn]}>{i18n.t("jod")}</Text></Text> </Text>
        </TouchableOpacity>
      </View>

      </View>
    );

}

export default Checkout;