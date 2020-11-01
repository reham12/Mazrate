import React, {useState, useEffect,useRef } from 'react';
import { StyleSheet,Text,TouchableOpacity,Image, View } from 'react-native';
import images from "@assets/imags-m";
import MapView, {Marker,Callout,PROVIDER_GOOGLE  , AnimatedRegion} from 'react-native-maps';


const Map =( ) =>{
    const  members=[
        {
          id:"0", // unique user ID assigned by Scaledrone
          authData: { // authData is created by the JWT sent from the authentication server
            name: "" // user is prompted to insert their name
          },
          location: {
            latitude:32.551445, 
            longitude:35.851479 
          } // react-native-maps marker location
        },
        {
          id: "1", // unique user ID assigned by Scaledrone
          authData: { // authData is created by the JWT sent from the authentication server
            name:"" // user is prompted to insert their name
          },
          location: {
             latitude: 31.963158, 
          longitude: 35.930359,
          } // react-native-maps marker location
        }
        ,
        {
          id: "2", // unique user ID assigned by Scaledrone
          authData: { // authData is created by the JWT sent from the authentication server
            name:"" // user is prompted to insert their name
          },
          location: {
             latitude: 30.194958, 
             longitude:  35.734241,
          } // react-native-maps marker location
        }
        ,
        {
          id: "3", // unique user ID assigned by Scaledrone
          authData: { // authData is created by the JWT sent from the authentication server
            name:"" // user is prompted to insert their name
          },
          location: {
             latitude: 31.844851, 
             longitude:36.045490,
          } // react-native-maps marker location
        }
         ,
        {
          id: "4", // unique user ID assigned by Scaledrone
          authData: { // authData is created by the JWT sent from the authentication server
            name:"" // user is prompted to insert their name
          },
          location: {
             latitude: 30.317547, 
             longitude:36.175076
          } // react-native-maps marker location
        }
      ]

    const mapRef = useRef(null)

    const fitToMarkersToMap = () => {
      setTimeout(()=> {
        if(mapRef.current!=null){
          mapRef.current.fitToSuppliedMarkers(members.map(m => m.id), true)
        }
      }, 1000)
    }

    const createMarkers = () => {
      const membersWithLocations = members.filter(m => !!m.location);
      return membersWithLocations.map(member => {
        const {id, location, authData} = member;
        const {name, color} = authData;
        return (
         
          <Marker.Animated
            draggable
            key={id}
            identifier={id}
            coordinate={location}
            tracksViewChanges={false}
            title={name}
            >
            <Image source={require('@assets/imags-m/gps.png')} style={{width:20,height:25}} />
          </Marker.Animated>

        );
      });
    }

    return (
      <>
        <MapView
            style={{flex:1}}
            provider={PROVIDER_GOOGLE}
            ref={mapRef}
            initialRegion={{
              latitude: 31.963158, 
              longitude: 35.930359,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
           >

            {createMarkers()}

        </MapView>
        {fitToMarkersToMap()}

      </>
    );
  }

export default Map;