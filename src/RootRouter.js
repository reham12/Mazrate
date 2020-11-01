import React from "react";
import Navigation from '@navigation'
import {Platform ,SafeAreaView, StatusBar, StyleSheet} from 'react-native'


export default class App extends React.Component {
    render() {
        return <SafeAreaView style={styles.safe}>
          <StatusBar barStyle="dark-content"  backgroundColor="white"/>
          <Navigation />
        </SafeAreaView>
    }
}


const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#fff',
    },
})