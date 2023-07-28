import { View, Text } from 'react-native'
import React , { useState } from 'react'
import MonthCarouselBar from '../../../../components/MonthSelector/MonthCarouselBar'
import Months from '../../../../constants/Months'

const Attendance = () => {
  const date = new Date;
  const [ monthNumber , setMonthNumber ] = useState(date.getMonth())
  return (
    <View style={{ flex:1 }}>
      <MonthCarouselBar 
        year={date.getFullYear().toString()}
        month={Months[monthNumber].label}
        setMonthNumber={setMonthNumber}
        monthNumber={monthNumber}
      />
     <View style={{ alignSelf: 'stretch', flexDirection: 'column', paddingHorizontal: 10, borderColor: 'gray', gap: 15, paddingVertical: 20 }}>
        <View style={{ borderWidth: 1, alignSelf: 'stretch', height: 90, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 28, color: 'black', fontWeight: '500', letterSpacing: 1 }}>25</Text>
          <Text style={{ fontSize: 17, color: 'darkgray' }}>Total Working Days</Text>
        </View>
        <View style={{ alignSelf: 'stretch', height: 90, flexDirection: 'row', justifyContent:'space-between' }}>
          <View style={{ borderWidth: 1, height: 90, width: 180, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, color: 'black', fontWeight: '500', letterSpacing: 1 }}>20</Text>
            <Text style={{ fontSize: 16, color: 'darkgray' }}>Present Days</Text>
          </View>
          <View style={{ borderWidth: 1, height: 90, width: 180, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, color: 'black', fontWeight: '500', letterSpacing: 1 }}>5</Text>
            <Text style={{ fontSize: 16, color: 'darkgray' }}>Total Leaves Taken</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Attendance