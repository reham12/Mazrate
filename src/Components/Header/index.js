import React, { Component } from 'react';
import { Text,Image, View,TouchableOpacity } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import {i18n} from 'react-native-i18n-localize'

const Header = (props) => (
    <View style={styles.headerSection} >
      <View  style={styles.firstSection} >
        <View style={styles.sectionImageBack}>
          <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>props.navigation.goBack()}>
            <Image style={[styles.imageBack]} source={images["back"]} onPress={()=>navigation.goBack()}/>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.title} >{i18n.t("Infinity_Farm")}</Text>
        </View>

        <View/>
      </View>
    </View>


    );



export default Header;