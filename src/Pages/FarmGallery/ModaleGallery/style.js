import { StyleSheet,Dimensions,I18nManager} from 'react-native'

const {width: WIDTH} = Dimensions.get('window');

export default StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'flex-start',
  },
  container:{ 
    width: "100%",
    backgroundColor:"white",
    flex: 1,
  },
  sectionImageBack:{
    height:50,
    justifyContent:"center",
 
  },
  conatinerBtnBack:{
    paddingHorizontal:15,paddingVertical:5,width:50
  },

  imageClose:{
    height:20,
    width:20
  },
  dot:{
    backgroundColor:"#90d12f",opacity:0.5,width:0,height:0,borderRadius:100
  },
  activeDot:{
    backgroundColor:"#90d12f",width:0,height:0,borderRadius:100
  },
  containerStyle:{
    alignItems:"center",justifyContent:"center",width:"100%",

  },
  imageSlidr1:{
    width:"100%",

  },
  slide1:{
 
    flex:1,
    alignItems:"center",justifyContent:"center",
  },
  paginationText:{
    color:"#071E40",
    fontSize:18,
    fontFamily: I18nManager.isRTL ? 'ABDALDEM-ALARABI' :'Roboto-Regular',
    marginBottom:15,
  },
  paginationStyle:{
    position:"absolute",
    right:15,
    top:-38,
    flexDirection:"row",
    alignItems:"flex-start",
    justifyContent:"flex-end"
  },
  imageBack:{
    width:9,
    height:14,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
  },
})