import { StyleSheet,Dimensions,I18nManager} from 'react-native'

const {width: WIDTH} = Dimensions.get('window');

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
    justifyContent: 'center',
  },
  container:{
    width: "100%",
    paddingTop:30,
    paddingBottom:50,
    paddingHorizontal:15
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
  dot:{
    backgroundColor:"#90d12f",opacity:0.5,width:0,height:0,borderRadius:100
  },
  activeDot:{
    backgroundColor:"#90d12f",width:0,height:0,borderRadius:100
  },
  pagination:{
    bottom:0
  },
  containerStyle:{
    alignItems:"center",justifyContent:"center",width:WIDTH,height:WIDTH-60
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSlidr1:{
    width:"100%",
    resizeMode:"cover"
  },
  containerSwiper:{
    height:200,alignItems:"center",justifyContent:"center",marginTop:20
  },
  paginationText:{
    color:"#fff",
    fontSize:18,
    fontFamily: I18nManager.isRTL ? 'ABDALDEM-ALARABI' :'Roboto-Regular',
    marginBottom:15,
  },
  paginationStyle:{
    position:"absolute",
    right:15,
    bottom:10,
    flexDirection:"row",
    alignItems:"flex-end",
    justifyContent:"flex-end"
  }
})