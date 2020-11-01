import { StyleSheet,I18nManager} from 'react-native'


export default StyleSheet.create({
	  body:{
        flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row",backgroundColor:"#fff"
      },
	  ScrollView:{
		justifyContent:"space-between",paddingVertical:30
	  },
	  sectionLogo:{
	    alignItems:"center",
	    // marginVertical:10
	  },
	  imagelogo:{
	    width:151,
        height:62
	  },
	  sectionImageUpIn:{
	    alignItems:"center",marginVertical:20
	  },
	  sectionSocial:{
	    paddingHorizontal:15,
	  },
	  containerButtons:{
        marginVertical:20,
        paddingRight:15
	  },
	  socialIcon:{
	    flexDirection:"row",
	  },
	  imageUpIn:{
	  	width:296,
	  	height:217,
	  },
	  imageLogin:{
	    width:20,
	    height:18
	  },
	  imageSing:{
	    width:20,
	    height:21
	  },
	  image:{
	    width:50,
	    height:50,
	    marginRight:10
	  },
	  boxLogin:{
	    backgroundColor:"#90d12f",
	  },
	  shadowBox:{
	    borderTopRightRadius: 64/2,
	    borderBottomRightRadius: 64/2,
	    shadowColor: '#000',
	    shadowOffset: {width: 0, height: 2},
	    shadowOpacity: 0.8,
	    elevation: 2,
	    shadowRadius: 2,
	    height:64,
	    paddingHorizontal:15,
	    justifyContent: "space-between",
	    alignItems: "center",
	    backgroundColor:"white",
	    width:"100%",
	  	flexDirection:"row",
	    marginBottom:20
	  },
	  textLogin:{
	    color:"white",
	    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
	    fontSize:15
	  },
	  textSign:{
        color:"#071E40",
	    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
	    fontSize:15
	  },
	  textContinue:{
	    paddingBottom:10,
	    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
	    fontSize:14,
	     color:"#071E40",
	  }
});