import { StyleSheet,I18nManager} from 'react-native'


export default StyleSheet.create({
  sectionImage:{
    alignItems:"center",
    marginBottom:30
  },
  conatinerBtnBack:{
    paddingHorizontal:15,paddingVertical:5,width:50
  },
  sectionImageBack:{
    height:50,
    justifyContent:"center",
    backgroundColor:"white"
  },
  containerScrollView:{
    flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row",backgroundColor:"#fff"
  },
  scrollView:{
    paddingVertical:20,
    justifyContent:"center"
  },
  image:{
    width:126,
    height:73,
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
  containerForm:{
    marginTop:30,
    paddingRight:15
  },
  sectionActions:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:15,
    width:"100%",
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
  shadowBox:{
    borderTopRightRadius: 64/2,
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
  imageEyeIcon:{
    width:20,
    height:17
  },
  imageBack:{
    width:9,
    height:14,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
  },
  input:{
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
    fontSize:12,
    flex:1
  }
})