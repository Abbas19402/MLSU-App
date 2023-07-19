import { View } from 'react-native'
import React from 'react'
import WeekDaysScrollbar from '../../../../../components/WeekdaysFlatlist/WeekDaysScrollbar'
import { FlatList } from 'react-native'
import Card from '../../../../../components/Cards'

const Timetable = () => {
  return (
    <View style={{ flex: 1, borderWidth: 1, borderColor: 'darkblue' }}>
      <WeekDaysScrollbar />
      <View style={{ alignSelf: 'stretch', flex:1, alignItems: 'center' }}>
        <FlatList
          data={[...Array(5)]}
          renderItem={({ item }) => {
            return <Card.SubjectCard 
              subject={'Java Programming'}
              startTime={'8:30 AM'}
              endTime={'10:30 AM'}
            />
          }}
        />
      </View>
    </View>
  )
}

export default Timetable