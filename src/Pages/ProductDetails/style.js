import { StyleSheet,I18nManager} from 'react-native'
export default StyleSheet.create({
  page:{
    backgroundColor:"white"
  },
sliderSection:{
   	flexDirection:"row",
   	justifyContent:"space-between",
   	paddingHorizontal:15,
   	paddingVertical:10,
},
imageBack:{
    width:9,
   	height:14,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
},
sectionImageBack:{
    position:"absolute",
    top:5,
    height:50,
    paddingHorizontal:15,
    justifyContent:"center",
 },
image4:{
   	width:79,
   	height:80
},
moreImage:{
    position:"absolute",
    width:"100%",
    height:"100%",
    flex:1,justifyContent:"center",alignItems:"center"
},
numberImage:{
    fontSize:18,
    color:"white",
    fontFamily: 'Roboto-Regular',
},
row:{
  	flexDirection:"row",
   	alignItems:"center"
},
imageFavourite:{
  	width:18,
  	height:15
},
sectionNameFarms:{
    justifyContent:"space-between",
    paddingHorizontal:15,
    paddingVertical:10
},
name:{
  	color:"#071E40",
  	fontSize:20,
  	fontFamily: I18nManager.isRTL ? 'ABDALDEM-ALARABI' :'Roboto-Bold',
},
text:{
  	color:"#B4B4B4",
  	fontSize:10,
    fontFamily: I18nManager.isRTL ? 'ABDALDEM-ALARABI' :'Roboto-Regular',
},
imageStar:{
    width:13,
    height:12,
    marginHorizontal:1
},
imageShare:{
    width:16,
    height:18,
    marginRight:10,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
},
sectionCheck:{
   borderRadius:6,
   height:40,
   width:"45%",
   borderWidth:1,
   borderColor:"#E6E6E6",
   justifyContent:"space-between",
   paddingHorizontal:15,
   marginVertical:5
},
imageArrowIcon:{
  	width:10,
  	height:6
},
textCheck:{
  	color:"#CFCFCF",
    fontSize:12,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' : 'Roboto-Regular',
},
baseText:{
  	color:"#071E40",
  	fontSize:16,
  	fontFamily: I18nManager.isRTL ? 'ABDALDEM-ALARABI' :'Roboto-Bold',
},
price:{
  	color:"#90D12F",
  	fontSize:16,
  	fontFamily: I18nManager.isRTL ? 'ABDALDEM-ALARABI' :'Roboto-Bold',
},
currency:{
  	fontSize:11,
  	fontFamily: I18nManager.isRTL ? 'ABDALDEM-ALARABI' :'Roboto-Regular',
},
separtor:{
  	backgroundColor:"#CFCFCF",
  	height:1,
  	marginHorizontal:10,
},
sectionLocation:{
     paddingHorizontal:15,
     paddingTop:10
},
imageMap:{
  	width:16,
  	height:20
},
imageMaps:{
    width:20,
    height:25
},
location:{
  	fontSize:12,
  	fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Light",
  	color:"#777777",
},
descriptionSection:{
  	padding:15,
	
},
mapSection:{
  	height:133,marginVertical:5
},
readText:{
  	color:"#90D12F",
  	fontSize:11,
  	fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
  	textDecorationLine: 'underline',
},
paddingRow:{
  	paddingLeft:10
},
imageArrowRight:{
  	width:7,
  	height:10,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
},
stickySection:{
    // marginTop:15,
    position: 'absolute',
    bottom: 0,
    width:"100%",
    flexDirection:"row",
},
conatinerBtnDone:{
    backgroundColor: "#90d12f",
    textAlign:"center",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    flexDirection:"row"
},
stickyPrice:{
    height:50,
    justifyContent:"center",
    alignItems:"center",
    width:"50%",
    flexDirection:"row",
    backgroundColor:"white",
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 10,
    shadowRadius: 2,
},
stickyText:{
    color:"#071E40",
    fontSize:16,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold"
},
stickyValue:{
    color:"#90D12F",
    fontSize:16,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold"
},
stickyCurrency:{
    color:"#90D12F",
    fontSize:11,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
    marginTop:5
},
textBtn:{
    color:"white",
    fontSize:18,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium"
},
imageClick:{
  	height:25,
  	width:21
},
imageMapGps:{
    width:20,
    height:25
}
})