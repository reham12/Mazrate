
import * as React from 'react';
import { StyleSheet, View,Text,TouchableOpacity,I18nManager,Image,FlatList } from 'react-native';
import images from "@assets/imags-m";
import ProductSearch from "@components/ProductSearch";

const products=[
    { title: 'Title Text',type:'Complete', key: 'item1' },
    { title: 'Title Text',type:'Canceled', key: 'item2' },
    { title: 'Title Text',type:'Complete', key: 'item3' },
    { title: 'Title Text',type:'Canceled', key: 'item4' },
    { title: 'Title Text',type:'Complete', key: 'item5' },
    { title: 'Title Text',type:'Canceled', key: 'item6' }
  ]

const FirstPage = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity style={[styles.row,styles.sectionCheck]} >
        <Text style={styles.textCheck}>Check-In</Text>
        <Image  style={[styles.imageArrowIcon]} source={images["arrow-icon"]}/>
      </TouchableOpacity>
      <View style={styles.containerFlatList}> 
        
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
          renderItem={(item, index, separators ) => (<ProductSearch item={item}  navigation={navigation}/>)}
          keyExtractor={item => item.key}
          onEndReachedThreshold={0.001}
          style={styles.list}
           showsVerticalScrollIndicator={false}

        /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
body:{
    backgroundColor:"#fff",
    paddingHorizontal:15,
},
row:{
    flexDirection:"row",
    alignItems:"center"
},
sectionCheck:{
    borderRadius:21,
    height:42,
    width:"100%",
    borderWidth:1,
    borderColor:"#E6E6E6",
    justifyContent:"space-between",
    paddingHorizontal:15,
    marginVertical:15,

},
textCheck:{
    color:"#CFCFCF",
    fontSize:12,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' : 'Roboto-Regular',
},
imageArrowIcon:{
    width:10,
    height:6
},
separator:{
    height:1,
    marginVertical:10,
    backgroundColor:"#D8D8D8"
},
list:{
    marginBottom:50
},
});
export default FirstPage;