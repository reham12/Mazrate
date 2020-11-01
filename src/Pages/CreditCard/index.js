import React, { useState } from 'react';
import { StyleSheet,FlatList,Text,TouchableOpacity,TextInput,Image, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import {i18n} from 'react-native-i18n-localize'
import BasicTitle from '@components/BasicTitle';


const CreditCard = ({navigation }) =>{
  const [valueName, setValueName ] = useState('');
  const [valueCardNumber, setValueCardNumber ] = useState('');
  const [valueExpiry , setValueExpiry] = useState('');
  const [valueCvv , setValueCvv] = useState('');
  const [isFocused1 , setIsFocused1] = useState(false);
  const [isFocused2 , setIsFocused2] = useState(false);
  const [isFocused3 , setIsFocused3] = useState(false);
  const [isFocused4 , setIsFocused4] = useState(false);

  const _handleCardNumber=(number) =>{
     let res=number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()
     setValueCardNumber(res)
  }

  const  handleExpiry = (text) => {
   if (text.indexOf('.') >= 0 || text.length > 10) {
        // Since the keyboard will have a decimal and we don't want
        // to let the user use decimals, just exit if they add a decimal
        // Also, we only want 'MM/YY' so if they try to add more than
        // 5 characters, we want to exit as well
        return;
    }

    if (text.length === 2 && valueExpiry.length === 1) {
        // This is where the user has typed 2 numbers so far
        // We can manually add a slash onto the end
        // We check to make sure the current value was only 1 character
        // long so that if they are backspacing, we don't add on the slash again
        text += '/'
    }
    if (text.length ===5 && valueExpiry.length === 4) {
        // This is where the user has typed 2 numbers so far
        // We can manually add a slash onto the end
        // We check to make sure the current value was only 1 character
        // long so that if they are backspacing, we don't add on the slash again
        text += '/'
    }

    setValueExpiry(text)
  }

  const _handleCvv = (text) => {
    setValueCvv(text)
  }

    return (
      <View style={styles.body}>
        <View style={styles.sectionImageBack}>
          <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnBack} underlayColor="#DDDDDD" onPress={()=>navigation.goBack()}>
              <Image style={[styles.imageBack]} source={images["back"]}/> 
          </TouchableOpacity>
        </View>

        <Text style={styles.baseTitle}>{i18n.t("Add_credit_card")}</Text>
  
        <View style={styles.container}>
        
          <View style={styles.containerInputs}>
            <View>
              <BasicTitle title={i18n.t("Card_Holder_Name")}/>
              <View style={styles.sectionName}>
                <TextInput
                  onChangeText={(text) => setValueName(text)}
                  onFocus={()=>setIsFocused1(true)}
                  onBlur={()=>setIsFocused1(false)}
                  placeholder={i18n.t("Fadi_zoubi")}
                  value={valueName}
                  style={[styles.input, isFocused1 && styles.focusInput]}
                  placeholderTextColor = "#CFCFCF"
                />
                {isFocused1 && <TouchableOpacity activeOpacity={0.6} style={styles.ContainerImageRemove} underlayColor="#DDDDDD" onPress={()=>setValueName('')}>
                   <Image style={[styles.imageRemove]} source={images["removePaymednt"]}/>
                </TouchableOpacity>}
              </View>
            </View>
            <View>
              <BasicTitle title={i18n.t("Credit_Card_Number")}/>
              <View style={styles.sectionName}>
                <TextInput
                  onChangeText={(text) => _handleCardNumber(text)}
                  onFocus={()=>setIsFocused2(true)}
                  onBlur={()=>setIsFocused2(false)}
                  placeholder='**** - **** -  **** - **85'
                  value={valueCardNumber}
                  maxLength={19}
                  keyboardType={'numeric'}
                  style={[styles.input, isFocused2 && styles.focusInput]}
                  placeholderTextColor = "#CFCFCF"
                />
                {isFocused2 && <TouchableOpacity activeOpacity={0.6} style={styles.ContainerImageRemove} underlayColor="#DDDDDD" onPress={()=>setValueCardNumber('')}>
                    <Image style={[styles.imageRemove]} source={images["removePaymednt"]}/>
                </TouchableOpacity>}
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.column}>
                <BasicTitle title={i18n.t("Expires")}/>
                <View style={styles.sectionName}>
                  <TextInput
                    onChangeText={(text) => handleExpiry(text)}
                    onFocus={()=>setIsFocused3(true)}
                    onBlur={()=>setIsFocused3(false)}
                    placeholder='10/27/2030'
                    value={valueExpiry}
                    maxLength={19}
                    keyboardType={'numeric'}
                    style={[styles.input, isFocused3 && styles.focusInput]}
                    placeholderTextColor = "#CFCFCF"
                  />
                  {isFocused3 && <TouchableOpacity activeOpacity={0.6} style={styles.ContainerImageRemove} underlayColor="#DDDDDD" onPress={()=>setValueExpiry('')}>
                      <Image style={[styles.imageRemove]} source={images["removePaymednt"]}/>
                  </TouchableOpacity>}
                </View>
              </View>
              <View style={styles.column}>
                <BasicTitle title="CVV"/>
                <View style={styles.sectionName}>
                  <TextInput
                    onChangeText={(text) => _handleCvv(text)}
                    onFocus={()=>setIsFocused4(true)}
                    onBlur={()=>setIsFocused4(false)}
                    placeholder='* * * *'
                    value={valueCvv}
                    maxLength={4}
                    keyboardType={'numeric'}
                    style={[styles.input, isFocused4 && styles.focusInput]}
                    placeholderTextColor = "#CFCFCF"
                  />
                  {isFocused4 && <TouchableOpacity activeOpacity={0.6} style={styles.ContainerImageRemove} underlayColor="#DDDDDD" onPress={()=>setValueCvv('')}>
                        <Image style={[styles.imageRemove]} source={images["removePaymednt"]}/>
                    </TouchableOpacity>}
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnDone} underlayColor="#DDDDDD" onPress={()=>navigation.navigate('Checkout' ,{})}>
            <Text style={styles.textBtn}>{i18n.t("Confirm_Details")}</Text>
          </TouchableOpacity>

        </View>

      </View>
    );

}

export default CreditCard;