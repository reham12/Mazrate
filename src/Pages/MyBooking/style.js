import { StyleSheet,I18nManager} from 'react-native'
export default StyleSheet.create({
	sectionImageBack:{
	    height:50,
	    justifyContent:"center",
	    backgroundColor:"#fff"
	},
	conatinerBtnBack:{
	    paddingHorizontal:15,paddingVertical:5,width:50
	},
	baseTitle:{
	    color:"#071E40",
	    fontSize:20,
	    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
	    textAlign:"center",
	    backgroundColor:"#fff",
	    paddingBottom:20
	},
	imageBack:{
		width:9,
		height:14, 
		transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]

    },
})