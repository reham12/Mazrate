import { StyleSheet,I18nManager} from 'react-native'
export default StyleSheet.create({

	sectionImageBack:{
		height:50,
		justifyContent:"center",
	},
	conatinerBtnBack:{
		paddingHorizontal:15,
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
	imageFarms:{
       width:63,
       height:63,
       borderRadius:5,
       marginRight:10,
	   resizeMode:"contain"
	},
	sectionFarms:{
       borderBottomWidth:1,
       borderBottomColor:"#E8E9E9"
	},
	container:{
		flex:1,  
		backgroundColor:"#fff",
		flexDirection:"column",
		justifyContent:"space-between",
	}, 
	conatinerBtnDone:{
		backgroundColor: "#90d12f",
		textAlign:"center",
		height:50,
		justifyContent:"center",
		alignItems:"center",
	},
	textBtn:{
		color:"white",
		fontSize:18,
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium",
	},
	firstSection:{
        paddingHorizontal:15
	},
	section:{
		paddingTop:15,
		paddingBottom:30
	},
	textTotal:{
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
		fontSize:13,
		color:"#777777"
	},
	price:{
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold",
		fontSize:21,
		color:"#90D12F"
	},
	currency:{
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
		fontSize:14,
		textTransform: "uppercase"
	},
	row:{
       flexDirection:"row",
	   justifyContent:"space-between",
	   alignItems:"center"
	},
	textSection:{
       flexDirection:"row",
	},
	textBase:{
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold",
		color:"#90D12F",
		fontSize:12
	},
	textValue:{
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
		color:"#777777",
		fontSize:12
	},
	body:{
		backgroundColor:"white",
		flex:1
	},
	textNumber:{
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold",
		color:"#777777"
	},
	textExpires:{
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
		color:"#1A1824",
		fontSize:12
	},
	textChange:{
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold",
		color:"#90D12F"

	},
	priceBtn:{
	    color:"#fff",
	    fontSize:18
	},
	currencyBtn:{
		color:"#fff",
		fontSize:12
	}
})