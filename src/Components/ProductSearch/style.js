import { StyleSheet,I18nManager} from 'react-native'
export default StyleSheet.create({
	component:{
		justifyContent:"space-between"
	},
	row:{
		flexDirection:"row",
		alignItems:"center",
	},
    image: {
	    width:90,
	    height:95,
	    borderRadius:4,
	},
    favouriteSection:{
		position:"absolute",
		top:5,
		left:5
    },
    imageFavourite:{
	  	width:18,
	  	height:15
    },
    imageStar:{
	    width:9.05,
	    height:8.8,
	    marginHorizontal:1
	},
	imageClick:{
	    width:20,
	    height:23
	},
	imageMap:{
	    width:12,
	    height:15
	},
	name:{
		color:"#071E40",
		fontSize:16,
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold"
	},
	text:{
		color:"#B4B4B4",
		fontSize:10,
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular",
		paddingHorizontal:3
	},
	price:{
	    fontSize:15,
	    color:"#90D12F",
	    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Bold"
	},
	currency:{
	    fontSize:10,
	    fontWeight:"300",
	    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular"
	},
    sectionReviews:{
        alignItems:"center",
        paddingTop:4
    },
	textBook:{
		color:"white",
		fontSize:6,
		textAlign:"center",
		fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Medium"
	},
	btnBook:{
		backgroundColor:"#90D12F",
		height:70,
		width:33,
		alignItems:"center",
		justifyContent:"center",
		borderRadius: 6,
		paddingHorizontal:3
	},
	imageCompleted:{
        height:11,
		width:12,
		marginBottom:5
	},
	imageCanceled:{
        height:9,
		width:9,
		marginBottom:5
	},
	sectionInfo:{
		paddingHorizontal:10,

	},
	canceled:{
		backgroundColor:"#FF0000"
	},
	date:{
		color:"#CFCFCF",
		fontSize:10,
	    fontWeight:"300",
	    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"Roboto-Regular"
	},
	sectionPriceSpace:{
		justifyContent:"space-between",
		flexDirection:"row",
		alignItems:"center"
	},
	sectionLocation:{
		paddingTop:4
	},
	sectionPrice:{
		// paddingTop:4
	}
});