import { StyleSheet,I18nManager} from 'react-native'


export default StyleSheet.create({
  body:{
    flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row",backgroundColor:"#fff"
  },
  scrollView:{
    justifyContent:"center",paddingVertical:20,
  },
  sectionLogo:{
    alignItems:"center",marginVertical:10
  },
  sectionImageUpIn:{
    alignItems:"center",marginVertical:10
  },
  sectionForm:{
    marginTop:20,
    paddingRight:15
  },
  sectionSocial:{
    paddingHorizontal:15,
    marginTop:10
  },
  socialIcon:{
    flexDirection:"row",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
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
    paddingHorizontal:20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:"white",
    width:"100%",
    flexDirection:"row",
    marginBottom:20
  },
  sectionForth:{
   alignItems:"flex-end",
  },
  textForgetPassword:{
    fontSize: 12,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
    color: "#acacac",
    paddingHorizontal:30
  },
  imageGo:{
    width:21,
    height:12,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
  },
   btnNext:{
    marginTop:20,
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
    paddingHorizontal:15,
    marginTop:20
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
    height:21
  },
  imageEyeIcon:{
    width:20,
    height:17
  },
  title:{
    fontSize:20,
    marginVertical:15,
    marginHorizontal:15,
    color: "#071e40",
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
    fontSize:20
  },
  input:{
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
    fontSize:12,
    flex:1
  }
})