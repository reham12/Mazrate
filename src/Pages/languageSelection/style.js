import { StyleSheet,I18nManager} from 'react-native'


export default StyleSheet.create({
	body:{
		backgroundColor:"white",
		flex:1,
		paddingHorizontal:15,
	},
	sectionImageBack:{
		height:50,
		justifyContent:"center",
	},
	conatinerBtnBack:{
		
		paddingVertical:5,
		width:50
	},
	baseTitle:{
		color:"#071E40",
		fontSize:20,
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
		textAlign:"center",
		textTransform: "uppercase",
		paddingBottom:40
	},
	imageBack:{
		width:9,
		height:14,
		transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
	},
	imageFlag:{
		width:50,
		height:50,
		marginRight:20
	},
	row:{
		flexDirection:"row",
		alignItems:"center",
		marginBottom:30
	},
	enLang:{
		fontSize:16,
		color:"#071E40"
	},
	arLang:{
		fontSize:16,
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Hacen-Tunisia",
		color:"#071E40"
	},
	 absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex:1,
     zIndex:99999
  },

})