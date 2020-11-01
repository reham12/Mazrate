import React, {useState, useEffect} from 'react';
import { Text,TouchableOpacity,Modal,Image,ScrollView, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"

const Guest =(props) =>{
   const[counter,setCounter]=useState(0)
    return (

            <View style={[styles.row,styles.guestRow]}>
              <View style={styles.type}>
                <Text style={styles.typeTitle}>{props.title}</Text>
                <Text style={styles.typeText}>{props.text}</Text>
              </View>
              <View style={[styles.row]}>
                <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.containerCirclue} 
                onPress={()=>{
                  if(counter>0){setCounter(counter-1)}
                }
                }>
                   <Image style={[styles.imageIncrease]} source={images["increase"]}/> 
                </TouchableOpacity>
                   <Text style={styles.text}>{counter}</Text>
                <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.containerCirclue} 
                onPress={()=>{
                  setCounter(counter+1)
                }
                }>
                    <Image style={[styles.imageAdd]} source={images["addPayment"]}/> 
                </TouchableOpacity>
              </View>
            </View>
 
    );
  }



export default Guest;