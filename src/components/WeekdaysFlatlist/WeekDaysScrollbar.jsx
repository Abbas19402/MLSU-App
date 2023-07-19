import { View, Text, FlatList } from 'react-native'
import React from 'react'

const WeekDaysScrollbar = () => {
    const Weekdays = [
        {
            id: 'monday',
            label: 'Monday'
        },
        {
            id: 'tuesday',
            label: 'Tuesday'
        },
        {
            id: 'wednusday',
            label: 'Wednusday'
        },
        {
            id: 'thursday',
            label: 'Thursday'
        },
        {
            id: 'friday',
            label: 'Friday'
        },
        {
            id: 'saturday',
            label: 'Saturday'
        }
    ]
  return (
    <View style={{ alignSelf: 'stretch', height: 40}}>
      <FlatList 
        horizontal
        data={Weekdays}
        renderItem={({ item }) => {
            return <View key={item.id} style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' , alignItems: 'center', backgroundColor: 'darkblue' }}>
                <Text style={{ color: 'white', fontWeight: '500', letterSpacing: 2}}>{item.label}</Text>
            </View>
        }}  
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default WeekDaysScrollbar