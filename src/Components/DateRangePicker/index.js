import React, { Component } from 'react'
import { StyleSheet, View,Image,Dimensions,I18nManager } from 'react-native'
import { Calendar, defaultStyle,LocaleConfig } from 'react-native-calendars'
import images from "@assets/imags-m";
const XDate = require('xdate');
const windowWidth = Dimensions.get('window').width;

LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort = ['S','M','T','W','T','F','S'];
type Props = {
  initialRange: React.PropTypes.array.isRequired,
  onSuccess: React.PropTypes.func.isRequired,
};

class DateRangePicker extends Component<Props> {

  state = {isFromDatePicked: false, isToDatePicked: false, markedDates: {}}

  componentDidMount() {  if(this.props.markingType !=="custom"){this.setupInitialRange()} }

  onDayPress = (day) => {
    if (!this.state.isFromDatePicked || (this.state.isFromDatePicked && this.state.isToDatePicked)) {
      this.setupStartMarker(day)
    } else if (!this.state.isToDatePicked) {
      let markedDates = {...this.state.markedDates}
      let [mMarkedDates, range] = this.setupMarkedDates(this.state.fromDate, day.dateString, markedDates)
      if (range >= 0) {
        this.setState({isFromDatePicked: true, isToDatePicked: true, markedDates: mMarkedDates})
        this.props.onSuccess(this.state.fromDate, day.dateString)
      } else {
        this.setupStartMarker(day)
      }
    }
  }

  setupStartMarker = (day) => {
    let markedDates = {[day.dateString]: {startingDay: true, color:"#90D12F", textColor: this.props.theme.markTextColor}}
    this.setState({isFromDatePicked: true, isToDatePicked: false, fromDate: day.dateString, markedDates: markedDates})
  }

  setupMarkedDates = (fromDate, toDate, markedDates) => {
    let mFromDate = new XDate(fromDate)
    let mToDate = new XDate(toDate)
    let range = mFromDate.diffDays(mToDate)
    if (range >= 0) {
      if (range == 0) {
        markedDates = {[toDate]: {color:"#C6E795", textColor: "black"}}
      } else {
        for (var i = 1; i <= range; i++) {
          let tempDate = mFromDate.addDays(1).toString('yyyy-MM-dd')
          if (i < range) {
            markedDates[tempDate] = {color:"#C6E795", textColor: "black"}
          } else {
            markedDates[tempDate] = {endingDay: true, color: "#90D12F" ,textColor: this.props.theme.markTextColor}
          }
        }
      }
    }
    return [markedDates, range]
  }

  setupInitialRange = () => {
    if (!this.props.initialRange) return
    let [fromDate, toDate] = this.props.initialRange
    let markedDates = {[fromDate]: {startingDay: true, color: "#90D12F", textColor: this.props.theme.markTextColor}}
    let [mMarkedDates, range] = this.setupMarkedDates(fromDate, toDate, markedDates)
    this.setState({markedDates: mMarkedDates, fromDate: fromDate})
  }

  onDayPressCustom= (day) => {
      this.setState({markedDates : { [day.dateString] :{customStyles: {
        container: {
          backgroundColor: '#90D12F',
          borderRadius: 25,
        },
        text: {
          color: 'white',
          fontWeight: 'bold'
        }
      }} } })
      console.log(this.state.markedDates)    
  }

  render() {
    return (
      <>
      {this.props.markingType ==="custom"?

        <Calendar
            {...this.props}
            markingType={this.props.markingType}
            current={this.state.fromDate}
            markedDates={this.state.markedDates}
            monthFormat={'MMMM-yyyy'}
            onDayPress={(day) =>{this.onDayPressCustom(day)}}

            theme={{

              'stylesheet.calendar.header': {
                header:{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginTop: 0,
                  alignItems: 'center',
                  paddingVertical:15,
                  borderBottomWidth:1,
                  borderBottomColor:"#E0E0E0",
                  marginBottom:15
                },
                dayHeader: {
                  color:"#90D12F",
                  fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
                },
              },
  
            }}
        
            renderArrow={(direction) => direction === 'left' ?
              <Image style={styles.imageArrow} source={images["left-arrow-icon"]}/>
              :<Image style={styles.imageArrow} source={images["right-arrow-icon"]}/> }
            />
      : 
        <Calendar {...this.props}
              markingType={'period'}
              current={this.state.fromDate}
              markedDates={this.state.markedDates}
              monthFormat={'MMMM-yyyy'}
        
              style={{width:"100%"}}
              renderArrow={(direction) => direction === 'left' ? 
                  <Image style={styles.imageArrow} source={images["left-arrow-icon"]}/>
                : <Image style={styles.imageArrow} source={images["right-arrow-icon"]}/> 
              }
              theme={{
                'stylesheet.day.period': {
                  wrapper: {
                      alignItems: 'center',
                      justifyContent:"center",
                      height:windowWidth/7,
                      width:windowWidth/7,
                      overflow: 'hidden'
                  },
               
                },
                'stylesheet.calendar.header': {
                  header:{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: 0,
                    alignItems: 'center',
                    paddingVertical:15,
                    borderBottomWidth:1,
                    borderBottomColor:"#E0E0E0",
                    marginBottom:15
                  },
                  dayHeader: {
                    color:"#90D12F",
                    fontFamily:I18nManager.isRTL ? 'ABDALDEM-ALARABI' :"ADAM.CGPRO 400",
                  },
                },
              }}
              onDayPress={(day) => {this.onDayPress(day)}}/>
      }
      </>
    )
  }
}

const styles = StyleSheet.create({
    imageArrow:{
      width:10,height:12,
      transform: [{ rotate:  I18nManager.isRTL ? '180deg' : '0deg'}]
    }
})

export default DateRangePicker;