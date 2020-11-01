import React, { Component } from 'react';
import { StyleSheet,FlatList,Platform,Image, View } from 'react-native';
import images from "@assets/imags-m";
import ProductSearch from "@components/ProductSearch";

const products=[
    { title: 'Title Text', key: 'item1' },
    { title: 'Title Text', key: 'item2' },
    { title: 'Title Text', key: 'item3' },
    { title: 'Title Text', key: 'item4' },
    { title: 'Title Text', key: 'item5' },
    { title: 'Title Text', key: 'item6' }
  ]

const ViewSearch = ({ navigation }) =>{

    return (
      <View style={styles.body}> 
        
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
          data={products}
          renderItem={(item, index, separators ) => (<ProductSearch item={item} navigation={navigation}/>)}
          keyExtractor={item => item.key}
          onEndReachedThreshold={0.001}
          style={styles.list}

        />
        <Image style={[styles.backgroundBottom]} source={images["backgroundBottom"]}/> 
        
      </View>
    );

}

const styles = StyleSheet.create({
  body:{
    backgroundColor:"#fff"
  },
  separator:{
    height:1,
    marginVertical:10,
    backgroundColor:"#D8D8D8"
  },
  list:{
    marginBottom:50,paddingHorizontal:15
  },
  backgroundBottom:{
    position:"absolute",
    bottom:-20
  },
  backgroundTop:{
     position:"absolute",
    top:0
  }
});

export default ViewSearch;