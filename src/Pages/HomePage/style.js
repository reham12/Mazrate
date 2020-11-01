import { StyleSheet,I18nManager} from 'react-native'
export default StyleSheet.create({
  homePage:{
    backgroundColor:"#FCFCFC"
  },
	headerSection:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:15,
    height:80,
    // marginVertical:20
	},
  imageMenu:{
   width:21,
   height:20,
   transform: [{ rotateY:  I18nManager.isRTL ? '180deg' : '0deg'}]
  }, 
  imageLogo:{
    width:88,
    height:37
  },
  imageNotification:{
    width:17,
    height:21
  },
  dropDownSection:{
    marginTop:10,
    paddingHorizontal:15,
  },
  secondRow:{
    flexDirection:"row",paddingVertical:10,justifyContent:"space-between"
  },
  btnSearch:{
    backgroundColor:"#90D12F",
    textAlign:"center",
    marginVertical:10,
    height:50,
    borderRadius: 6,
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"center"
  },
  textSearch:{
     color:"white",
    fontSize:14,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular"
  },
  featuredSection:{
    paddingHorizontal:15,
    paddingBottom:10
  },
  imageBackground:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  textFarms:{
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
    color:"#071E40",
    paddingTop:5
  },
  sectionCheck:{
   borderRadius:6,
   height:40,
   width:"48%",
   borderWidth:1,
   borderColor:"#E6E6E6",
   justifyContent:"space-between",
   paddingHorizontal:15,

},
imageArrowIcon:{
    width:11,
    height:6
},
textCheck:{
    color:"#CFCFCF",
    fontSize:12,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' : 'Roboto-Regular',
},

row:{
    flexDirection:"row",
    alignItems:"center"
},

})