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
		paddingBottom:20
	},
	imageBack:{
		width:9,
		height:14,
		transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
	},
	imageWrite:{
		width:12,
		height:14
	},
	public:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10,
        alignItems:"center"
	},
	containerReview:{
		backgroundColor:"#90D12F",
		borderRadius:4,
		flexDirection:"row",
		justifyContent:"center",
		alignItems:"center",
		height:28,
		width:150
	},
	textReview:{
		color:"#071E40",
		fontSize:12,
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold"
	},
	textBtn:{
		color:"#fff",
		fontSize:12,
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium",
		marginLeft:10
	}

})