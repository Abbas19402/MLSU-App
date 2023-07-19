import { View, Text } from 'react-native'
import React from 'react'

const EventCard = ({ title , date , hashTag }) => {
  return (
    <View style={{ marginVertical: 8, width: 400 , flex:1, flexDirection: 'column' , justifyContent: 'center', alignItems: 'center' , borderRadius: 10 }}>
      <View style={{ height: 60 , width: 400 ,  flex:1, justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'skyblue', borderTopRightRadius: 5, borderTopLeftRadius: 5, paddingHorizontal: 5, borderWidth: 0.5, borderBottomWidth: 0,borderColor: 'lightgray' }}>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: '300' }}>{title}</Text>
      </View>
      <View style={{ height: 25 , width: 400 , flex:1 ,flexDirection: 'row', justifyContent: 'flex-start' , alignItems: 'center' , backgroundColor: 'white' , borderBottomLeftRadius:5, borderBottomRightRadius:5, borderWidth: 0.5, borderTopWidth: 0,borderColor: 'lightgray'  }}>
        <Text style={{ marginHorizontal: 3 , color: 'black', fontWeight: '500' }}>{date}</Text>
        <Text style={{ marginHorizontal: 3 , color: 'black', fontWeight: '500'}}>|</Text>
        <Text style={{ marginHorizontal: 3 , color: 'black', fontWeight: '500', letterSpacing: 0.8}}>#{hashTag}</Text>
      </View>
    </View>
  )
}

export default EventCard