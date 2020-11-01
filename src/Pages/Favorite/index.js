import React, { Component } from 'react';
import { Text,FlatList,TouchableOpacity,Image, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import Product from "@components/Product";
import {i18n} from 'react-native-i18n-localize'

const products=[
    { title: 'Title Text', key: 'item1' },
    { title: 'Title Text', key: 'item2' },
    { title: 'Title Text', key: 'item3' },
    { title: 'Title Text', key: 'item4' },
    { title: 'Title Text', key: 'item5' },
    { title: 'Title Text', key: 'item6' }
]

const Favorite = ({navigation }) =>{
    return (
      <View style={styles.body}>

	        <View style={styles.sectionImageBack}>
	          <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
	              <Image style={[styles.imageBack]} source={images["back"]}/> 
	          </TouchableOpacity>
	        </View>

	        <Text style={styles.baseTitle}>{i18n.t("Favorite")}</Text>
            <FlatList     
                data={products}
                renderItem={(item, index, separators ) => (<Product statusBookNowButton={true}/>)}
                keyExtractor={item => item.key}
                onEndReachedThreshold={0.001}
                numColumns={2}
                showsVerticalScrollIndicator={false}
              />
 
      </View>
    );

}

export default Favorite;