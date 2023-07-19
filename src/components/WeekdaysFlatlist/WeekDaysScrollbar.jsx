import { View, Text, FlatList } from 'react-native'
import React , { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Weekdays from '../../constants/Weekdays'

const WeekDaysScrollbar = ({ currentlyActiveDay , setCurrentlyActiveDay }) => {
  return (
    <View style={{ alignSelf: 'stretch', height: 40}}>
      <FlatList 
        horizontal
        data={Weekdays}
        renderItem={({ item }) => {
            return <TouchableOpacity key={item.id} style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' , alignItems: 'center', backgroundColor:  currentlyActiveDay == item.id ? 'lightcyan' : 'white' }} onPress={()=> setCurrentlyActiveDay(item.id)}>
                <Text style={{ color: 'darkblue', fontWeight: '500', letterSpacing: 2}}>{item.label}</Text>
            </TouchableOpacity>
        }}  
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default WeekDaysScrollbar