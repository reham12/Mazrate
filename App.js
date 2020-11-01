import React, {Component} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import RootRouter from "./src/RootRouter"
import SplashScreen from 'react-native-splash-screen'
import { I18nManager} from 'react-native';
import { I18nLocalize } from 'react-native-i18n-localize'
 import AsyncStorage from "@react-native-community/async-storage"
import en from './src/translation/en.json'
import ar from './src/translation/ar.json'
I18nLocalize.initialLanguage({ en, ar })

export default class App extends Component {
    constructor(props){
	   	super(props);
	   	this.state={
	   		refresh:true
	   	}
    }
    setRefresh() {
	    this.setState({refresh: false});
	 }

	async UNSAFE_componentWillMount(){
			
		const value = await AsyncStorage.getItem('lang');
		
		if(value===null){
			AsyncStorage.setItem('lang',"en");
			I18nManager.forceRTL(false);
			this.setRefresh()
		}else{
			I18nLocalize.setLanguage(value)
			if(value==="en"){
				I18nManager.forceRTL(false);
				this.setRefresh()

			}
			else{
				I18nManager.forceRTL(true);
				this.setRefresh()

			}
		}
		
		
	}
 
    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    
    }
	render() {
	    return (
	    	<>
		  {!this.state.refresh && 	<NavigationContainer>
		       <RootRouter/>
		    </NavigationContainer>}
		    </>
	    );
	}
}
