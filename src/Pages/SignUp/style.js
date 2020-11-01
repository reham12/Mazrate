import { StyleSheet,I18nManager} from 'react-native'


export default StyleSheet.create({
  sectionLogo:{
    alignItems:"center",marginVertical:10
  },
  sectionImageUpIn:{
    alignItems:"center",marginBottom:10
  },
  containerScrollView:{
    flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row",backgroundColor:"#fff"
  },
  scrollView:{
    // paddingVertical:20,
    justifyContent:"center"
  },
  title:{
    fontSize:20,
    marginVertical:15,
    marginHorizontal:15,
    color: "#071e40",
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
    fontSize:20
  },
  sectionForm:{
    paddingRight:15
  },
  imagelogo:{
    width:151,
    height:62
  },
  imageUpIn:{
    width:300,
    height:223,
  },
  shadowBox:{
    borderTopRightRadius:64/2,
    borderBottomRightRadius: 64/2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    shadowRadius: 2,
    height:64,
    paddingLeft:10,
    paddingRight:15,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:"white",
    width:"100%",
    flexDirection:"row",
    marginBottom:20
  },
  sectionForth:{
    alignItems:"flex-end",
    paddingHorizontal:15,
  },
  textForgetPassword:{
    fontSize: 14,
    color: "#acacac",
    textAlign:"left",
    width:"80%"
  },
  imageGo:{
    width:21,
    height:12,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
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
  sectionFifth:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:15,
    marginVertical:10
  },
  sectionActions:{
   flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-end",
    marginVertical:10
  },
  textSectionFifth:{
    fontSize: 12,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium",
    color: "#90d12f",
    textDecorationLine: 'underline',
  },
  textRegister:{
    flexDirection:"row"
  },
  textNew:{
     textDecorationLine: 'underline',
      fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium",
      fontSize: 12,
  },
  imageUserIcon:{
    width:15,
    height:19
  },
  imageEyeIcon:{
    width:20,
    height:16
  },
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
  imagePhone:{
    width:15,
    height:26
  },
  imageCheckIcon:{
    width:15,
    height:12,
    marginRight:9
  },
  input:{
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
    fontSize:12,
    flex:1
  },
  containerText:{
    width:"90%",paddingHorizontal:10
  },
  fisrtText:{
    color:"#acacac",fontSize:12,fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular"
  },
  secondText:{
    flexDirection:"row",color:"#90d12f",fontSize:12,fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
  },
  checkBoxStyle:{
    flex: 1,width:"100%",padding: 0
  }
})