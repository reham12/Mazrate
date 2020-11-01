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
  imageLogo:{
    width:88,
    height:37
  },
  imageNotification:{
    width:17,
    height:20
  },
  imageBack:{
    width:9,
    height:14,
    transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
  },
  conatinerBtnBack:{
    paddingRight:10
  }
});