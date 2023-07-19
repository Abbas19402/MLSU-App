import { View, Text } from 'react-native'
import React from 'react'

const SubjectCard = ({ subject, startTime, endTime }) => {
  return (
    <View style={{ marginVertical: 8, width: 400 , flex:1, flexDirection: 'column' , justifyContent: 'center', alignItems: 'center' , borderRadius: 9, borderWidth: 1,borderColor: 'lightgray' ,  paddingHorizontal: 20 }}>
      <View style={{ height: 70 , flex: 1, flexDirection: 'column' , justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'stretch', gap: 5}}>
        <Text style={{ color: 'black', fontSize:20, fontWeight: '300' }}>{subject}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ color: 'gray', fontWeight: '500', letterSpacing: 2 }}>{startTime}</Text>
            <Text style={{ color: 'gray', fontWeight: '500', letterSpacing: 2 }}>-</Text>
            <Text style={{ color: 'gray', fontWeight: '500', letterSpacing: 2 }}>{endTime}</Text>
        </View>
      </View>
    </View>
  )
}

export default SubjectCard