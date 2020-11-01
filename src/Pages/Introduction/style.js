import { StyleSheet,I18nManager} from 'react-native'

export default StyleSheet.create({
  ScrollView:{
    justifyContent:"space-between",
    backgroundColor: '#fff',
    flex:1,
    paddingTop:30,
    paddingBottom:10,
  },
  sectionLogo:{
    alignItems:"center",
  },
  swiperStyle:{
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row'
  },
  imagelogo:{
    width:151,
    height:62 
  },
  containerSwiper:{
    height:410,alignItems:"center",justifyContent:"center",marginTop:20
  },
  dot:{
    backgroundColor:"#90d12f",opacity:0.5,width:12,height:12,borderRadius:100
  },
  activeDot:{
    backgroundColor:"#90d12f",width:20,height:20,borderRadius:100
  },
  pagination:{
    bottom:0
  },
  containerStyle:{
    alignItems:"center",justifyContent:"center"
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    marginTop:30,
    marginBottom:20,
    fontSize:18,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' : "ADAM.CGPRO 400",
  },
  text: {
    width: 295,
    height: 76,
    fontSize: 16,
    lineHeight: 21,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Light",
    color: "#cfcfcf",
    textAlign: "center",
    marginBottom:20
  },
  sectionFooter:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:15,
  },
  imageSlidr1:{
    width:310,
    height:239
  },
  imageSlidr2:{
    width:310,
    height:238
  },
  imageSlidr3:{
    width:310,
    height:259
  },
  textSkip:{
    fontSize: 16,
    color: "#acacac",
    textDecorationLine: 'underline',
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Poppins Regular 400"
  },
  btnNext:{
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#90d12f",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center"
  },
  imageGo:{
    width:21,
    height:12,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
  },
  btnSkip:{
    paddingVertical:10,
    paddingRight:12,
  }

});