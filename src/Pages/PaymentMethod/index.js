import React, { Component } from 'react';
import { StyleSheet,FlatList,Text,TouchableOpacity,Image, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import MethodCard from "./MethodCard"
import BasicTitle from '@components/BasicTitle';
import {i18n} from 'react-native-i18n-localize'

const methods=[
    { title: 'Mastercard', key: 'item1',image:"master" ,status:"sucess" },
    { title: 'Visarcard', key: 'item2',image:"visa" },
    { title: 'PayPal', key: 'item3',image:"pay" },

  ]

const PaymentMethod = ({navigation }) =>{
  const  footer= () => {
    return(
    <TouchableOpacity  activeOpacity={0.6} style={styles.footer} underlayColor="#DDDDDD">
       <Image style={[styles.imageaddPayment]} source={images["addPayment"]}/> 
       <Text style={styles.textAdd}>  {i18n.t("Add")}</Text>
    </TouchableOpacity>
    );
  }

    return (
      <>
      <View style={styles.sectionImageBack}>
        <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
            <Image style={[styles.imageBack]} source={images["back"]}/> 
        </TouchableOpacity>
      </View>

      <Text style={styles.baseTitle}>{i18n.t("Payment")}</Text>
  
      <View style={styles.sectionTotal}>
        <View style={styles.sectionBody}>
        <Text style={styles.textTotal}>{i18n.t("Sub_Total")}</Text>
        <Text style={styles.price}>30<Text style={styles.currency}>{i18n.t("jod")}</Text></Text>
        </View>
      </View>

      <View style={styles.textMethod}>
         <BasicTitle title={i18n.t("Payment_Methods")} />
      </View>

      <View style={styles.containerDatePicker}>

        <FlatList
          data={methods}
          renderItem={(item, index, separators ) => (<MethodCard item={item}/>)}
          keyExtractor={item => item.key}
          onEndReachedThreshold={0.001}
          ListFooterComponent={footer}
          style={styles.list}

        />


        <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnDone} underlayColor="#DDDDDD" onPress={()=> navigation.navigate('CreditCard' ,{})}>
          <Text style={styles.textBtn}>{i18n.t("Done")}</Text>
        </TouchableOpacity>
      </View>

      </>
    );

}

export default PaymentMethod;