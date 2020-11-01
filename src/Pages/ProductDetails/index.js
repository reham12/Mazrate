import React, {useState} from 'react';
import { Share,Linking,Image,ScrollView, View,Dimensions,Text,TouchableOpacity,ImageBackground, Button } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import MapView, {Marker,Callout,PROVIDER_GOOGLE  , AnimatedRegion} from 'react-native-maps';
import ModalSlider from "./ModalSlider"
import ModalDescription from "./ModalDescription"
import {i18n} from 'react-native-i18n-localize'

const {width: WIDTH} = Dimensions.get('window');

const ProductDetails = ({ navigation }) =>{

  const[favouriteAction,setFavouriteAction]=useState(true)
  const[modalVisibleSlider,setModalVisibleSlider]=useState(false)
  const[modalVisibleDescription,setModalVisibleDescription]=useState(false)
  
  const routeCheckOut = () => navigation.navigate('SelectDate' , {title: i18n.t("Check-Out"),type: 'custom'});
  const routeCheckIn= () => navigation.navigate('SelectDate' , {title: i18n.t("Check-In"),type: 'custom'});
  const routePolicies = () => navigation.navigate('PropertyPolicies' , {});
  const routeFacilities = () => navigation.navigate('PropertyFacilities' , {});
  const routeBooking = () => navigation.navigate('PaymentMethod' ,{});
  const routeReview = () => navigation.navigate('AddReview' ,{});

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <View style={styles.page}>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic" 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.ScrollView}
         > 
         <ModalSlider style={{width:WIDTH,height:WIDTH-60}} navigation={navigation}/>


            <TouchableOpacity  activeOpacity={0.6} style={styles.sectionImageBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
              <Image style={[styles.imageBack]} source={images["arrow-white-back"]}/> 
            </TouchableOpacity>
              
         {/* <View style={styles.sliderSection}>
              <Image source={images["farmsSlider1"]}/>
              <Image source={images["farmsSlider2"]}/>
              <Image source={images["farmsSlider3"]}/>
              <TouchableOpacity onPress={()=>setModalVisibleSlider(!modalVisibleSlider)}>
                <ImageBackground style={styles.image4} source={images["farmsSlider4"]}>
                   <Image source={images["farmsNois"]} style={{opacity:0.1}}/>
                   <View style={styles.moreImage}>
                     <Text style={styles.numberImage}>+21</Text>
                   </View>
                </ImageBackground>
              </TouchableOpacity>

          </View>*/}
          <View style={[styles.row,styles.sectionNameFarms]}>
            <View style={[styles.row]}>
                <Text style={styles.name}>{i18n.t("Infinity_Farm")}</Text>
                <TouchableOpacity  activeOpacity={0.6} style={[styles.row]} underlayColor="#DDDDDD"
                   onPress={routeReview}>
                  <View style={[styles.starSection,styles.row]}>
                    <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                    <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                    <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                    <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                    <Image  style={[styles.imageStar]} source={images["star-on"]}/> 
                  </View>
                  <Text style={styles.text}>(35 {i18n.t("reviews")})</Text>
                </TouchableOpacity >
            </View>
            <View style={[styles.row]}>
              <TouchableOpacity onPress={onShare}>
                <Image  style={[styles.imageShare]} source={images["share"]}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setFavouriteAction(!favouriteAction)}>
                {favouriteAction ?
                  <Image  style={[styles.imageFavourite]} source={images["favourite"]}/> 
                   : 
                  <Image  style={[styles.imageFavourite]} source={images["no-favourite"]}/>}
              </TouchableOpacity>
            </View>

          </View>
          <View style={[styles.row,styles.sectionNameFarms]}>
              <TouchableOpacity style={[styles.row,styles.sectionCheck]} onPress={()=> routeCheckIn()}>
                <Text style={styles.textCheck}>{i18n.t("Check-In")}</Text>
                <Image  style={[styles.imageArrowIcon]} source={images["arrow-icon"]}/>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.row,styles.sectionCheck]} onPress={()=> routeCheckOut()}>
                <Text style={styles.textCheck}>{i18n.t("Check-Out")}</Text>
                <Image  style={[styles.imageArrowIcon]} source={images["arrow-icon"]}/> 
              </TouchableOpacity>
          </View>

     

          <View style={[styles.row,styles.sectionNameFarms]} >
            <View style={[styles.row]}>
              <Text style={styles.baseText}>{i18n.t("Number_of_Guests")}</Text>
               <Text style={styles.price}> 15 {i18n.t("Guests")}</Text>
               </View>
              <Image  style={[styles.imageArrowRight]} source={images["right-arrow-icon"]}/>
          </View>


          

          <View>
            <View style={[styles.row,styles.sectionLocation]}>
              <Image  style={[styles.imageMap]} source={images["gps"]}/>
              <Text style={[styles.location,styles.paddingRow]}>{i18n.t("your_location")}</Text>
             
          </View>
            <MapView
              style={styles.mapSection}
              provider={PROVIDER_GOOGLE}

              initialRegion={{
                latitude: 31.963158, 
                longitude: 35.930359,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
              }}
             >
              <MapView.Marker
                coordinate={{ latitude: 31.963158, longitude:35.930359}}
                title='Amman'
                tracksViewChanges={false}
                onPress={()=> Linking.openURL(`google.navigation:q=31.963158,35.930359`)}>
                <Image source={require('@assets/imags-m/gps.png')} style={[styles.imageMaps]} />
              </MapView.Marker>
           

            </MapView>
          </View>

          <View style={styles.descriptionSection} >
             <Text style={styles.baseText}>{i18n.t("Description")}</Text>
             <Text style={styles.location}>
                {i18n.t("Lorem_ipsum_all")}
             </Text>
             <TouchableOpacity  activeOpacity={0.6} underlayColor="#DDDDDD" 
               onPress={()=>{setModalVisibleDescription(!modalVisibleDescription)}}>
              <Text style={styles.readText}>{i18n.t("Read_More")}</Text>
             </TouchableOpacity>
           
          </View> 

       
           <TouchableOpacity style={[styles.row,styles.sectionNameFarms]} onPress={routeFacilities}>
              <Text style={styles.baseText}>{i18n.t("Property_Facilities")}</Text>
              <Image  style={[styles.imageArrowRight]} source={images["right-arrow-icon"]}/>
          </TouchableOpacity>

        
          <TouchableOpacity style={[styles.row,styles.sectionNameFarms]} onPress={routePolicies}>
              <Text style={styles.baseText}>{i18n.t("Property_Policies")}</Text>
              <Image  style={[styles.imageArrowRight]} source={images["right-arrow-icon"]}/>
          </TouchableOpacity>
          <View style={{height:60}} />

          

          {modalVisibleSlider && <ModalSlider modalVisibleSlider={modalVisibleSlider}  setModalVisibleSlider={setModalVisibleSlider}/>}
          {modalVisibleDescription && <ModalDescription modalVisibleDescription={modalVisibleDescription} setModalVisibleDescription={setModalVisibleDescription}/>}

      </ScrollView>
      <View style={styles.stickySection}>
        <View style={styles.stickyPrice}>
           <Text style={styles.stickyText}>{i18n.t("Price")} </Text>
           <Text style={styles.stickyValue}>30</Text>
           <Text style={styles.stickyCurrency}>{i18n.t("jod")} / {i18n.t("Night")}</Text>
        </View>
        <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnDone} underlayColor="#DDDDDD" onPress={routeBooking}>
            <Image  style={[styles.imageClick]} source={images["click"]}/> 
            <Text style={styles.textBtn}>{i18n.t("Book_Now")}</Text>
        </TouchableOpacity>
      </View>
      </View>
    
  );
};

export default ProductDetails;