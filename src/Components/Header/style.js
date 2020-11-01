import { StyleSheet,I18nManager} from 'react-native'
export default StyleSheet.create({
  firstSection:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    height:80,
  },
  headerSection:{
    backgroundColor:"#071E40",
    width:"100%",
    paddingHorizontal:15,
  },
  title:{
    fontSize:20,
    color:"#fff",
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400"
  },
  imageBack:{
    width:9,
    height:14,
    paddingLeft:20,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
  },
  sectionImageBack:{
    height:50,
    justifyContent:"center",
    paddingRight:20
  },
});