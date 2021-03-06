import { StyleSheet,I18nManager} from 'react-native'


export default StyleSheet.create({
	body:{
		backgroundColor:"white",
		flex:1,
		paddingHorizontal:15,
	},
	sectionImageBack:{
		height:50,
		justifyContent:"space-between",
		alignItems:"center",
		flexDirection:"row"
	},
	textClear:{
       color:"#FF0000",
       fontSize:11,
       fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Poppins SemiBold 600"
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


})