import React, {useState, useEffect} from 'react';
import { StyleSheet,Text,TouchableOpacity,Image, View } from 'react-native';
import HeaderResultPage from '@components/HeaderResultPage';
import images from "@assets/imags-m";
import ViewSearch from "./ViewSearch"
import SortModal from "./SortModal"
import FilterModal from "./FilterModal"
import Map from "./Map"
import styles from "./style"
import {i18n} from 'react-native-i18n-localize'

const SearchResults =({ navigation }) =>{

    const[modalVisible,setModalVisible]=useState(false)
    const[modalVisibleFilter,setModalVisibleFilter]=useState(false)
    const[visibleMap,setVisibleMap]=useState(false)

    return (
      <> 

        <HeaderResultPage style={{zIndex:1000000}} navigation={navigation}/>
        <View style={styles.secondSection} >
          <View style={styles.secondSectionBody} >
            <Text style={styles.titleSearch}>28 Sep, 2020</Text>
             <Image  style={[styles.imageSearch]} source={images["search-icon"]}/> 
          </View>
        </View>
        <View style={styles.actionBar}>
           <TouchableOpacity style={[styles.sort,styles.Row]} onPress={()=>setModalVisible(true)}>
              <Image style={[styles.imageSort]} source={images["sort"]}/> 
              <Text style={[styles.title]}>{i18n.t("Sort")}</Text>
           </TouchableOpacity>
           <TouchableOpacity style={[styles.filter,styles.Row]}onPress={()=>setModalVisibleFilter(true)} >
              <Image style={[styles.imageFilter]} source={images["filter"]}/> 
              <Text style={[styles.title]}>{i18n.t("Filter")}</Text>
           </TouchableOpacity>
           <TouchableOpacity style={[styles.map,styles.Row]} onPress={()=>setVisibleMap(!visibleMap)}>
              <Image style={[styles.imageMap]} source={images["gps"]}/> 
              <Text style={[styles.title]}>{i18n.t("Map")}</Text>
           </TouchableOpacity>
        </View>
        <View style={styles.body}> 
          {!visibleMap && <ViewSearch navigation={navigation}/>}
          {modalVisible && <SortModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>}
          {modalVisibleFilter && <FilterModal modalVisibleFilter={modalVisibleFilter} setModalVisibleFilter={setModalVisibleFilter}/>}
          {visibleMap && <Map />}
        </View>
       

      </>
    );
  }

export default SearchResults;