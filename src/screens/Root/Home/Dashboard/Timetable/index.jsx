import { View , FlatList } from 'react-native'
import React , { useState } from 'react'

import WeekDaysScrollbar from '../../../../../components/WeekdaysFlatlist/WeekDaysScrollbar'
import Card from '../../../../../components/Cards'
import Weekdays from '../../../../../constants/Weekdays'

const Timetable = () => {
  const date = new Date();
  console.log(Weekdays[date.getDay()].label);
  const [ currentlyActiveDay , setCurrentlyActiveDay ] = useState(Weekdays[date.getDay()].id)
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <WeekDaysScrollbar 
        setCurrentlyActiveDay={setCurrentlyActiveDay}
        currentlyActiveDay={currentlyActiveDay}
      />
      <View style={{ alignSelf: 'stretch', flex:1, alignItems: 'center' }}>
        <FlatList
          data={[...Array(5)]}
          renderItem={({ item }) => {
            return <Card.SubjectCard 
              subject={'Java Programming'}
              startTime={'8:30 AM'}
              endTime={'10:30 AM'}
              currentlyActiveDay={currentlyActiveDay}
            />
          }}
        />
      </View>
    </View>
  )
}

export default Timetable