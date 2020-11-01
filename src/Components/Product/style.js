import { StyleSheet,I18nManager} from 'react-native'
import { I18nLocalize } from 'react-native-i18n-localize'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",  
    borderRadius:5,
    margin:5
  },
  favouriteSection:{
    alignItems:"flex-end",
    margin:10,
  },
  image: {
    resizeMode: "cover",
    justifyContent: "flex-end",
    borderRadius:5,
    height:238,
    width:"100%",
    flex:1
  },
  imageLinear:{
    position:"absolute",
    flex:1,
    height:"100%",
    width:"99.7%",
    justifyContent: "space-between",
    margin:"0.2%",
    bottom:0
  },
  name: {
    color:"#071E40",
    fontSize:10,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold"
  },
  company:{
    fontSize:9,
    color:"#B4B4B4",
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Light"
  },
  price:{
    fontSize:15,
    color:"#90D12F",
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular"
  },
  currency:{
    fontSize:8,
  },
  productSection:{
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:10,
    paddingBottom:10
  },
  imageClick:{
    width:20,
    height:23
  },
  infoSection:{
    
    flexDirection:"column",
    flex:1
  },
  paddingInfoSection:{
    paddingLeft:10,
  },
  btnBook:{
    backgroundColor:"#90D12F",
    height:70,
    width:28,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 6,
    paddingHorizontal:5
  },
  textBook:{
    color:"white",
    fontSize:6,
    textAlign:"center",
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium"
  },
  starSection:{
    flexDirection:"row"
  },
  imageStar:{
    width:7.05,
    height:6.8,
    marginHorizontal:1
  },
  imageFavourite:{
    width:20,
    height:15
  },
  footerSection:{
   flexDirection:  'row' ,
    justifyContent:"space-between",
    alignItems:"center"
  },

})