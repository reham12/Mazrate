import React, {useRef} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  I18nManager
} from 'react-native';
import images from "@assets/imags-m";
import Swiper from 'react-native-swiper';
import styles from './style'
import {i18n} from 'react-native-i18n-localize'

let idxActive=0

const Introduction= ({ navigation }) => {

  const swiperRef = useRef(null)

  const routeLoginSingUp = () => navigation.navigate('SignLogin' ,{});
  const onPressPrev = () => {
    if (idxActive > 0) {
      swiperRef.scrollBy(-1)
    }
  }
  const onPressNext = () => {
    let indexActive=idxActive+1
    if (indexActive < 3) {
      swiperRef.current.scrollBy(1);
    }
    if (indexActive == 3) {
      routeLoginSingUp()
    }
  }
  const changeIndex=(index)=>{
    idxActive=index
  }

  return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" 
       showsHorizontalScrollIndicator={false} 
       contentContainerStyle={styles.ScrollView} 
      >
            
        <View style={styles.sectionLogo}>
          <Image style={[styles.imagelogo]} source={images["logo"]}/>   
        </View>

        <View style={styles.containerSwiper}>
          <Swiper  
              dotStyle={styles.dot}
              activeDotStyle={styles.activeDot} 
              showsButtons={false}
              paginationStyle={styles.pagination}
              containerStyle={styles.containerStyle}
              style={styles.swiperStyle}
              onIndexChanged={(index)=>changeIndex(index)}
              ref={swiperRef}
            >

            <View style={styles.slide1}>
              <Image style={[styles.imageSlidr1]} source={images["slider1"]}/> 
              <Text style={styles.title}>{i18n.t('WELCOME_TO_MAZR3TE') }</Text>  
              <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nostrud exercitation
              </Text>
            </View>

            <View style={styles.slide1}>
              <Image style={[styles.imageSlidr2]} source={images["slider2"]}/> 
              <Text style={styles.title}>{ i18n.t('WELCOME_TO_MAZR3TE') }</Text>  
              <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nostrud exercitation
              </Text>
            </View>

            <View style={styles.slide1}>
              <Image style={[styles.imageSlidr3]} source={images["slider3"]}/> 
              <Text style={styles.title}>{ i18n.t('WELCOME_TO_MAZR3TE') }</Text>  
              <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nostrud exercitation
              </Text>
            </View>

          </Swiper>
        </View>
        <View style={styles.sectionFooter}>
          <View>
            <TouchableOpacity  activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.btnSkip}  onPress={routeLoginSingUp}>
              <Text style={styles.textSkip}>{ i18n.t('Skip') }</Text> 
            </TouchableOpacity>
          </View>
          <TouchableOpacity  activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.btnNext} onPress={onPressNext}>
             <Image style={[styles.imageGo]} source={images["go"]}/>
          </TouchableOpacity>
        </View>
        
      </ScrollView>


  );
};


export default Introduction;
