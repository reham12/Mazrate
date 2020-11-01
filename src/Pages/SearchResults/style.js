import { StyleSheet,I18nManager} from 'react-native'

export default StyleSheet.create({

  actionBar:{
    flexDirection:"row",
    backgroundColor:"#fff",
  },
  Row:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:5,
    marginVertical:15,
  },
  title:{
    color:"#777777",
    marginLeft:10,
    fontSize:12,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular"
  },
  imageSort:{
    width:15,
    height:14
  },
  imageMap:{
    width:12,
    height:15
  },
  imageFilter:{
    width:12,
    height:14
  },
  filter:{
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:"#CFCFCF"
  },
  body:{
 
    flex:1,

  },
  secondSection:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#071E40"
   
  },
  secondSectionBody:{
    backgroundColor:"white",
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:30,
    paddingVertical:5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  titleSearch:{
    color:"#777777",
    paddingRight:10,
    fontSize:10,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium"
  },
  imageSearch:{
    width:18,
    height:18
  }
})