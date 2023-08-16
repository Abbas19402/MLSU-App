import { View , FlatList } from 'react-native'
import React , { useState } from 'react'

import WeekDaysScrollbar from '../../../../components/WeekdaysFlatlist/WeekDaysScrollbar'
import Card from '../../../../components/Cards'
import Weekdays from '../../../../constants/Weekdays'
import Subjects from '../../../../constants/Subjects'

const Timetable = () => {
  const date = new Date();
  const [ currentlyActiveDay , setCurrentlyActiveDay ] = useState(Weekdays[date.getDay()].id)
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <WeekDaysScrollbar 
        setCurrentlyActiveDay={setCurrentlyActiveDay}
        currentlyActiveDay={currentlyActiveDay}
      />
      <View style={{ alignSelf: 'stretch', flex:1, alignItems: 'center' }}>
        <FlatList
          data={Subjects}
          renderItem={({ item }) => {
            return <Card.SubjectCard 
              subject={item.label}
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