import { StyleSheet,I18nManager} from 'react-native'


export default StyleSheet.create({
  body:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  container:{ 
    width: "100%",
    padding:20,
    // paddingBottom:20,
    backgroundColor:"white",
    
  },
  containerClose:{
    marginBottom:10,
    justifyContent:"flex-end",
    flexDirection:"row",
  },
  imageClose:{
    height:20,
    width:20
  },
  text:{
    paddingVertical:10,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
  },
})