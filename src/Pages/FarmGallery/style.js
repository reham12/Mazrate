import { StyleSheet,Dimensions,I18nManager} from 'react-native'
const {width: WIDTH} = Dimensions.get('window');
export default StyleSheet.create({
  allRow:{
    flexDirection:"row"
  },
  imageGallery1:{
    width:WIDTH,
    resizeMode:"cover",
    height:223,
  },
  helfRow:{
    flexDirection:"row"
  },
  imageGallery:{
    flex:1,
    width:"50%",
    height:123,
  },
  image:{
    width:"100%",height:"100%",resizeMode:"cover"
  },
  sectionImageBack:{
    height:50,
    justifyContent:"center",
    backgroundColor:"#fff"
  },
  conatinerBtnBack:{
    paddingHorizontal:15,paddingVertical:5,width:50
  },
  imageBack:{
    width:9,
    height:14,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
  },

})