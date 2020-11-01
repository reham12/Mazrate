import { StyleSheet,I18nManager} from 'react-native'

export default StyleSheet.create({
	body:{
		backgroundColor:"white",
		flex:1,
	
	},
	sectionImageBack:{
		height:50,
		justifyContent:"center",
		paddingHorizontal:15
	},
	conatinerBtnBack:{
		paddingVertical:5,
		paddingRight:10,
		width:50
	},
	baseTitle:{
		fontSize:20,
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
		textAlign:"center",
		textTransform: "uppercase",
		paddingVertical:40
	},
	baseTitleDark:{
        color:"#fff",
	},
	baseTitleLight:{
        color:"#CFCFCF",
	},
	imageBack:{
		width:9,
		height:14,
		transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
	},
	imageBackground:{
		resizeMode:"cover",
		flex:1
	},
	imageBackground2:{
		opacity:0.7,
		position:"absolute"
	},
	imageUserIcon:{
	    width:14,
	    height:17
	},
	imageEyeIcon:{
	    width:12,
	    height:10
	},
	imagePhone:{
	    width:9,
	    height:15
	},
	shadowBox:{
		borderBottomWidth:1,
		borderColor:"#CFCFCF",
		justifyContent: "space-between",
	    alignItems: "center",
	    flexDirection:"row",
	    marginBottom:20
	},
	container:{
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       width:"100%",
        paddingHorizontal:15,
	},
	containerForm:{
        
        borderRadius:6,
        paddingHorizontal:15,
        width:"100%"
	},
	containerFormDark:{
		backgroundColor:"#071E40",
	},
	containerFormLight:{
        backgroundColor:"#fff",
	},
	imageEditIcon:{
		width:26.5,
		height:25
	},
	btn:{
		backgroundColor:"#90d12f",
		width:70,
		height:70,
		borderRadius:70/2,
		justifyContent:"center",
		alignItems:"center"
	},
	containerBtn:{
		justifyContent:"center",
		alignItems:"center",
		marginVertical:30
	},
	containerBtns:{
       justifyContent:"space-between",
       flexDirection:"row",
       marginVertical:30
	},
	input:{
		fontSize:11,
		flex:1,
        height:40,
        padding:0,
        fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
	},
	inputDark:{
        color:"white",
        textAlign: I18nManager.isRTL ? "right" :"left",
        fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
	},
	inputLight:{
        color:"#CFCFCF",
        textAlign: I18nManager.isRTL ? "right" :"left",
        fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
	},
	phoneInputDark:{
		backgroundColor:"#071E40",
		fontSize:11,
		flex:1,
        color:"white",
        height:40,
        padding:0,

	},
	phoneInputLight:{
        backgroundColor:"#fff",
		fontSize:11,
		flex:1,
        color:"white",
        height:40,
        padding:0,

	},
	imageCanceledIcon:{
		width:18,
		height:18
	},
	imageCorrectIcon:{
		width:25,
		height:21
	},
	canceledBtn:{
		backgroundColor:"#FF0000"
	},
	flagStyle:{
		transform: [{ rotateY:  I18nManager.isRTL ? '180deg' : '0deg'},{ scaleX: .8 }, { scaleY: .8 }],marginLeft:-16
	}
})