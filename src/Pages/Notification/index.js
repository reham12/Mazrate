import React, { useState } from 'react';
import { StyleSheet,Text,FlatList,TouchableOpacity,Image, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import NotificationCard from "@components/NotificationCard";
import {i18n} from 'react-native-i18n-localize'

const notifications=[
    { title: 'Title Text', key: 'item1',color:"#90D12F" },
    { title: 'Title Text', key: 'item2',color:"#777777" },
    { title: 'Title Text', key: 'item3',color:"#F52439" },
    { title: 'Title Text', key: 'item4' ,color:"#6F4FF1"},
    { title: 'Title Text', key: 'item5' ,color:"#FBD24C"},
    { title: 'Title Text', key: 'item6',color:"#27CFC9" }
  ]

const Notification = ({navigation }) =>{

    return (
      <View style={styles.body}>
        <View style={styles.sectionImageBack}>
          <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
              <Image style={[styles.imageBack]} source={images["back"]}/> 
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textClear}>{i18n.t("Clear_All")}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.baseTitle}>{i18n.t("Notification")}</Text>
         <FlatList
          ItemSeparatorComponent={
              (({ highlighted }) => (
                <View
                  style={[
                    styles.separator
                  ]}
                />
              ))
            }      
             showsVerticalScrollIndicator={false}
          data={notifications}
          renderItem={(item, index, separators ) => (<NotificationCard item={item} navigation={navigation}/>)}
          keyExtractor={item => item.key}
          onEndReachedThreshold={0.001}
        
          contentContainerStyle={styles.list}
        />

      </View>
    );

}

export default Notification;