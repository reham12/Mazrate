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
		justifyContent:"space-between",
		marginBottom:10,
		
		paddingVertical:10
	},
    imageArrow:{
    	width:6,
    	height:10,
    	transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
    },
    containerImage:{
    	
    	width:"8%",
    	height:"100%",
    	flexDirection:"row",
    	justifyContent:"flex-end",
    	alignItems:"center",
    	paddingVertical:10
    },
    text:{
    	color:"#777777",
    	fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
    },
    imageSwitch:{
    	width:90,
    	resizeMode:"contain"
    }
})