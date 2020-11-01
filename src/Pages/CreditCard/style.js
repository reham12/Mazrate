import { StyleSheet,I18nManager} from 'react-native'


export default StyleSheet.create({
	body:{
		backgroundColor:"white",
		flex:1
	},
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
	container:{
		flex:1,  
		flexDirection:"column",
		justifyContent:"space-between",	
	}, 
	containerInputs:{
      paddingHorizontal:15
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
	row:{
        justifyContent:"space-between",
        flexDirection:"row"
	},
	column:{
		width:"46%"
	},
	input:{
		height: 46, borderColor: '#E4E9F2', borderWidth: 1,borderRadius:12,  marginBottom: 20 ,paddingHorizontal:15,marginTop:5,
		        fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",

	},
	sectionName:{
       position:"relative"
	},
	ContainerImageRemove:{
	   position:"absolute",
       top:17,
       right:0,
        width:40,
       height:40,
       alignItems:"center"
	},
	imageRemove:{
       width:20,
       height:20,
      
	},
	focusInput:{
        borderColor: '#90D12F',

        	},
})