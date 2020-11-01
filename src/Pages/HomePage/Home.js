
              
import React, {useState, useEffect} from 'react';
import { StyleSheet,Image,FlatList, View,Text,I18nManager,TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import images from "@assets/imags-m";
import styles from "./style"
import DropDownList from "@components/DropDownList";
import Product from "@components/Product";
import ModalGuests from "./ModalGuests"
import {i18n} from 'react-native-i18n-localize'

const products=[{ title: 'Title Text', key: 'item1' },{ title: 'Title Text', key: 'item2' },
{ title: 'Title Text', key: 'item3' },{ title: 'Title Text', key: 'item4' },{ title: 'Title Text', key: 'item5' },{ title: 'Title Text', key: 'item6' }]

const placeholderDestination={
  label:I18nManager.isRTL ? "المكان المقصود" : "Destination",
  color:"#CFCFCF"
}

const HomePage =({ navigation }) =>{
  const[modalVisible,setModalVisible]=useState(false)
  const routeResult= () => navigation.navigate('SearchResults' ,{});
  const routeDate= () => navigation.navigate('SelectDate' , {title: i18n.t("Select_Date"),type: 'period'});
  const openDrawer=()=>{navigation.openDrawer()}

  return (
    <View style={styles.homePage}>

      <View  style={styles.headerSection} >
        <TouchableOpacity onPress={()=>openDrawer()}>
          <Image style={[styles.imageMenu]} source={images["menu-icon"]}/> 
        </TouchableOpacity>

        <View>
          <Image style={[styles.imageLogo]} source={images["logo"]}/> 
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Notification' ,{})}>
          <Image style={[styles.imageNotification]} source={images["notification-icon"]}/> 
        </TouchableOpacity>

      </View> 

 
      <View style={styles.dropDownSection}>

        <DropDownList placeholder={placeholderDestination}/>
       

        <View style={styles.secondRow}>
          <TouchableOpacity style={[styles.row,styles.sectionCheck]} onPress={()=> routeDate()}>
            <Text style={styles.textCheck}>{i18n.t("Select_Dates")}</Text>
            <Image  style={[styles.imageArrowIcon]} source={images["arrow-icon"]}/> 
          </TouchableOpacity>
          <TouchableOpacity style={[styles.row,styles.sectionCheck]} onPress={()=> setModalVisible(!modalVisible)}>
            <Text style={styles.textCheck}>{i18n.t("Number_of_Guests")}</Text>
            <Image  style={[styles.imageArrowIcon]} source={images["arrow-icon"]}/> 
          </TouchableOpacity>
         
        </View >

        <TouchableOpacity  activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.btnSearch} onPress={routeResult} >
          <Text style={styles.textSearch}>{i18n.t("Search")}</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.featuredSection} >
          <Text style={styles.textFarms}>{i18n.t("Featured_FARMS")}</Text>

      </View>

      <FlatList     
            data={products}
            renderItem={(item, index, separators ) => (<Product navigation={navigation} statusBookNowButton={false}/> )}
            keyExtractor={item => item.key}
            onEndReachedThreshold={0.001}
            numColumns={2}
            style={{paddingHorizontal:10,backgroundColor:"#FAFAF9",marginBottom:300}}
          />

    {modalVisible && <ModalGuests modalVisible={modalVisible} setModalVisible={setModalVisible}/>}

      
    </View>
  );
}

export default HomePage;


