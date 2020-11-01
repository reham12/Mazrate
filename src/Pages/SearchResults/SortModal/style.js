import { StyleSheet,I18nManager} from 'react-native'

export default StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  body:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container:{
    width: "100%",
    paddingTop:20,
    paddingBottom:20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor:"white",
    paddingHorizontal:15
  },
  containerClose:{
    marginBottom:10,
    justifyContent:"flex-start",
    flexDirection:"row",
    paddingVertical:5
  },
  imageClose:{
    height:20,
    width:20
  },
  title:{
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
    color:"#071E40",
    fontSize:20,
    textAlign:"center",
    paddingBottom:10
  },
  sortType:{
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium",
    color:"#071E40",
    borderBottomWidth:1,
    borderBottomColor:"#CFCFCF",
    paddingVertical:15
  }
})