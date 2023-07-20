import { View, Text } from 'react-native'
import React , { useState } from 'react'
import MonthCarouselBar from '../../../../../components/MonthSelector/MonthCarouselBar'
import Months from '../../../../../constants/Months'

const Attendance = () => {
  const date = new Date;
  const [ monthNumber , setMonthNumber ] = useState(date.getMonth())
  return (
    <View style={{ flex:1 }}>
      <MonthCarouselBar 
        year={'2023'}
        month={Months[monthNumber].label}
        setMonthNumber={setMonthNumber}
        monthNumber={monthNumber}
      />
      <Text>Attendance</Text>
    </View>
  )
}

export default Attendance