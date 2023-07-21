import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Weekdays from '../../constants/Weekdays'

const WeekDaysScrollbar = ({ currentlyActiveDay , setCurrentlyActiveDay }) => {
  return (
    <View style={{ alignSelf: 'stretch', height: 40, backgroundColor: '#002154'}}>
      <FlatList 
        horizontal
        data={Weekdays}
        renderItem={({ item }) => {
            return item.id !== 'sunday' && <TouchableOpacity key={item.id} style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' , alignItems: 'center', backgroundColor:  currentlyActiveDay == item.id ? 'lightcyan' : '#002154' }} onPress={()=> setCurrentlyActiveDay(item.id)}>
                <Text style={{ color: currentlyActiveDay == item.id ? 'darkblue' : 'white', fontWeight: '500', letterSpacing: 2}}>{item.label}</Text>
            </TouchableOpacity>
        }}  
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default WeekDaysScrollbar