import { StyleSheet,I18nManager} from 'react-native'
export default StyleSheet.create({
    container:{
   	    flex: 1,backgroundColor:"#071E40"
    },
    containerUser:{
   	    height: 150,alignItems: 'center', justifyContent: 'center'
    },
    ScrollView:{
   	    backgroundColor:"#071E40"
    },
    labelStyle:{
   	   color:"#fff",fontSize:16,fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",marginLeft:-10
    },
    drawerItemList:{
   	   flexDirection:"row",textAlign:"left"
    },
    labelItemStyle:{
       color:"#fff",fontSize:16,fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",marginLeft:-10
    },
    containerLogout:{
   	   height: 50, width:168,borderTopRightRadius:25,borderBottomRightRadius:25,backgroundColor: '#90D12F', 
       alignItems: 'center',flexDirection:"row",paddingLeft:20,marginTop:50
    },
    starDrawer:{
	    width:22,
	    height:22     
	},
	nameUser:{
	    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
	    fontSize:22,
	    color:"white"
	},
	logout:{
	    width:22,
	    height:22,
	    marginRight:20    
	},
	userDrawer:{
	    width:19,
	    height:24
	},
	myBooking:{
	    width:20,
	    height:23  
	},
  logoutText:{
    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
    color:"white"
  }
})