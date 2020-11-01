import { StyleSheet,I18nManager} from 'react-native'


export default StyleSheet.create({
	body:{
		flex:1,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"#071E40"
	},
	image:{
		width:200,
		height:158
	},
	conatinerBtnClose:{
		position:"absolute",
		bottom:20,
		padding:20,
	},
	imageClose:{
		width:18,
		height:18
	},
	textThank:{
		color:"#fff",
		fontSize:18,
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
		marginVertical:20
	},
	textConfirm:{
		color:"#C1C1C1",
		fontSize:16,
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Light",
		width:"80%",
		textAlign:"center"
	}
})