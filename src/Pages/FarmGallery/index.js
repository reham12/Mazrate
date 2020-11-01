import React, {useState,useRef} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity ,
  ScrollView,
  Text
} from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import ModaleGallery from "./ModaleGallery"

const FarmGallery= ({navigation}) => {
  const[modalVisibleGallery,setModalVisibleGallery]=useState(false)
  return (

   <ScrollView
          contentInsetAdjustmentBehavior="automatic" 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.ScrollView}
         > 
          <View style={styles.sectionImageBack}>
        <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
            <Image style={[styles.imageBack]} source={images["back"]}/> 
        </TouchableOpacity>

      </View>
        <TouchableOpacity style={styles.allRow} onPress={()=>{ 
            setModalVisibleGallery(!modalVisibleGallery);
          }} >
          <Image style={[styles.imageGallery1]}  source={images["farms-details"]} />  
        </TouchableOpacity>

        <View style={styles.helfRow}>
            <TouchableOpacity style={[styles.imageGallery]} onPress={()=>{ 
              setModalVisibleGallery(!modalVisibleGallery);
            }} >
               <Image style={styles.image} source={images["gallery2"]} /> 
            </TouchableOpacity>
            <TouchableOpacity style={[styles.imageGallery]} onPress={()=>{ 
              setModalVisibleGallery(!modalVisibleGallery);
            }} >
                <Image style={[styles.image]} source={images["gallery3"]}/> 
            </TouchableOpacity>  
        </View>
         <TouchableOpacity style={styles.allRow} onPress={()=>{ 
            setModalVisibleGallery(!modalVisibleGallery);
          }} >
          <Image style={[styles.imageGallery1]}  source={images["farms-details"]} />  
        </TouchableOpacity>
        <View style={styles.helfRow}>
            <TouchableOpacity style={[styles.imageGallery]} onPress={()=>{ 
              setModalVisibleGallery(!modalVisibleGallery);
            }} >
               <Image style={styles.image} source={images["gallery2"]} /> 
            </TouchableOpacity>
            <TouchableOpacity style={[styles.imageGallery]} onPress={()=>{ 
              setModalVisibleGallery(!modalVisibleGallery);
            }} >
                <Image style={[styles.image]} source={images["gallery3"]}/> 
            </TouchableOpacity>  
        </View>
      {modalVisibleGallery && <ModaleGallery modalVisibleGallery={modalVisibleGallery} setModalVisibleGallery={setModalVisibleGallery}/>}

    </ScrollView>


  );
};

export default FarmGallery;
