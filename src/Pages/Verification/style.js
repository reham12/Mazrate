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
  body:{
   alignItems:"center"
  },
  sectionImage:{
    alignItems:"center",
    marginBottom:30
  },
  image:{
    width:126,
    height:73,
  },
  title:{
   fontSize:20,
   marginVertical:15,
   color: "#071e40",
   fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
    fontSize:20
  },
  text:{
    width: 295,
    fontSize: 16,
    color: "#777777",
    textAlign: "center",
    marginBottom:10,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Light",
  },
  inputCode:{
    fontSize:35,textAlign:"center",color: "#071e40",fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
  },
  containerInputCode:{
    borderBottomColor: '#cfcfcf',
    flex:1,
    borderBottomWidth: 2,
    marginHorizontal:10,
    
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
  textTime:{
    fontSize:16,
    color:"#90d12f",
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
  },
  inputs:{
    flexDirection:"row",
    paddingHorizontal:20,
    paddingBottom:20,
    textDecorationLine: 'underline'
  },
  imageBorderBottomImage:{
    position:"absolute",
    bottom:0,
    width:"100%",
  },
  dottedBorder:{
    flex:1,
    marginHorizontal:10,
    position:"relative"
  },
})