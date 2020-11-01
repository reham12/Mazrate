import { StyleSheet,I18nManager} from 'react-native'

export default StyleSheet.create({
  body:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  container:{ 
    width: "100%",
    paddingTop:20,
    // paddingBottom:20,
    backgroundColor:"white",
    
  },
   
  bodyModal:{
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
  type:{
   marginTop:30
  },
  typeTitle:{
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold",
    color:"#071E40",
    fontSize:16
  },
  section:{ 
    flexDirection:"row",
    // justifyContent:"space-between",

  },
  typeSection:{
    borderWidth:1,
    borderColor:"#E5E5E5",
    borderRadius:4,
    height:40,
    width:"48%",
    alignItems:"center",
    justifyContent:"center",
    marginVertical:5,
    marginRight:"3%",
    paddingHorizontal:3
  },
  typeSectionStar:{
    width:"31%",
  },
  typeText:{
    fontSize:12,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
    color:"#777777"
  },
  typeTextActive:{
    color:"#fff"
  },
  typeSectionActive:{
    backgroundColor:"#90D12F"
  },
  typeSectionMore:{
    borderColor:"#90D12F",
  },
  typeTextMore:{
    color:"#90D12F"
  },
  conatinerBtnDone:{
    backgroundColor: "#90d12f",
    textAlign:"center",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },
  textBtn:{
    color:"white",
    fontSize:18,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium"
  }
})