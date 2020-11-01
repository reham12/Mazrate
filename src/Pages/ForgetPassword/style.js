import { StyleSheet,I18nManager} from 'react-native'


export default StyleSheet.create({
  sectionImageBack:{
    height:50,
    justifyContent:"center",
    backgroundColor:"#fff"
  },
  conatinerBtnBack:{
    paddingHorizontal:15,paddingVertical:5,width:50
  },
  imageBack:{
    width:9,
    height:14,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
  },
  containerScrollView:{
    flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row",backgroundColor:"#fff"
  },
  scrollView:{
    paddingVertical:20,
    justifyContent:"center"
  },
  sectionImage:{
    alignItems:"center",
    marginBottom:30
  },
  image:{
    width:61,
    height:74,
  },
  body:{
   alignItems:"center"
  },
  title:{
    fontSize:20,
    marginVertical:15,
    color: "#071e40",
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
    fontSize:20
  },
  text:{
    width: 310,
    fontSize: 16,
    color: "#777777",
    textAlign: "center",
    marginBottom:10,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Light",
  },
  sectionActions:{
   flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:15,
    marginTop:50,
    width:"100%",
  },
  imageGo:{
    width:21,
    height:12,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
  },
  containerPhoneInput:{
    flex:1,padding:0,

  },
  flag:{
    width:30,height:40,marginRight:5,
    transform: [{ rotateY:  I18nManager.isRTL ? '180deg' : '0deg'},{ scaleX: .8 }, { scaleY: .8 }] 
  },
  btnNext:{
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#90d12f",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
  },
  shadowBox:{
    borderTopRightRadius: 64/2,
    borderBottomRightRadius: 64/2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    shadowRadius: 2,
    height:64,
    paddingRight:15,
    marginTop:20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:"white",
    width:"90%",
    flexDirection:"row",
    marginBottom:10
  },
  imageUserIcon:{
    width:15,
    height:21
  },
  imagePhone:{
    width:15,
    height:26
  },
   phoneInputStyle:{
     
    textAlign: I18nManager.isRTL ? "right" :"left",
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",

  },
  dialCode:{
     fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
 
  }
})