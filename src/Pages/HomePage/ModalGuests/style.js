import { StyleSheet,I18nManager} from 'react-native'

export default StyleSheet.create({
  body:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  container:{ 
    width: "100%",
    // paddingBottom:20,
    backgroundColor:"white",
    flex:1
    
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

  },
  typeTitle:{
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold",
    color:"#071E40",
    fontSize:16
  },

  typeSectionStar:{
    width:"31%",
  },
  typeText:{
    fontSize:14,
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
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  containerCirclue:{
    width:20,
    height:21,
    borderRadius:14,
    borderColor:"#C4C4C4",
    borderWidth:1,
    justifyContent:"center",
    alignItems:"center"
  },
  imageIncrease:{
    width:10,
    height:2
  },
  imageAdd:{
    width:9,
    height:9
  },
  text:{
    fontSize:12,
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
    color:"#071E40",
    width:30,
    textAlign:"center"
  },
  guestRow:{
    paddingVertical:20
  },
  sectionImageBack:{
    height:50,
    justifyContent:"center",
 
  },
  conatinerBtnBack:{
    paddingVertical:5,width:50
  },

  imageBack:{
    width:9,
    height:14,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
  },
  scrollView:{
    flexDirection:"column",
    justifyContent:"space-between",
    flex:1
  }
})