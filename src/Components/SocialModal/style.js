import { StyleSheet,I18nManager} from 'react-native'


export default StyleSheet.create({
   body:{
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
    absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container:{
    width: 300,
    paddingTop:30,
    paddingBottom:50,
    borderTopRightRadius: 25,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    shadowRadius: 5,
    backgroundColor:"white",
    paddingHorizontal:15
  },
  title:{
    fontSize:20,
    color: "#071e40",
    textAlign:"center",
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold"
  },
  socialIcon:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:20
  },
  image:{
    width:60,
    height:60,
   
  },
  marginImage:{
     marginHorizontal:20
  },
  containerClose:{
    marginBottom:10,
    justifyContent:"flex-end",
    flexDirection:"row",
    paddingVertical:10
  },
  imageClose:{
    height:20,
    width:20
  }
})