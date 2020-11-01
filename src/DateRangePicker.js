import React, { Component } from 'react'
import { StyleSheet, View,Image } from 'react-native'
import { Calendar, defaultStyle } from 'react-native-calendars'
import images from "@assets/imags-m";
const XDate = require('xdate');

type Props = {
  initialRange: React.PropTypes.array.isRequired,
  onSuccess: React.PropTypes.func.isRequired,
};
export default class DateRangePicker extends Component<Props> {

  state = {isFromDatePicked: false, isToDatePicked: false, markedDates: {}}

  componentDidMount() { this.setupInitialRange() }

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
        markedDates = {[toDate]: {color:"#C6E795", textColor: this.props.theme.markTextColor}}
      } else {
        for (var i = 1; i <= range; i++) {
          let tempDate = mFromDate.addDays(1).toString('yyyy-MM-dd')
          if (i < range) {
            markedDates[tempDate] = {color:"#C6E795", textColor: this.props.theme.markTextColor}
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

  render() {
    return (
      <Calendar {...this.props}
                markingType={'period'}
                current={this.state.fromDate}
                markedDates={this.state.markedDates}
                monthFormat={'MMMM-yyyy'}
               maxDate="2020-12-10"

               renderArrow={(direction) => direction === 'left' ? <Image style={{width:10,
    height:13}} source={images["left-arrow-icon"]}/>  :<Image style={{width:10,
    height:13}} source={images["right-arrow-icon"]}/> }
                theme={{

         'stylesheet.day.period': {
            wrapper: {
                alignItems: 'center',
                justifyContent:"center",
                alignSelf: 'stretch',
                height:32,
                width:32,
                overflow: 'hidden'
            },
           
        }

                }}
                onDayPress={(day) => {this.onDayPress(day)}}/>
    )
  }
}

DateRangePicker.defaultProps = {
  theme: { markColor: '#90D12F', markTextColor: '#ffffff' }
};