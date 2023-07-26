import { View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyClassHome from './My Class Home'
import Attendance from '../Dashboard/Attendance'
import Timetable from '../Dashboard/Timetable'
import MySubjects from './My Class Home/Subject'

const MyClass = () => {
  const Stack = createNativeStackNavigator()
  return (
    <View style={{ flex:1 }}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="myClassHome" component={MyClassHome}/>
        <Stack.Screen name="attendance" component={Attendance}/>
        <Stack.Screen name="timetable" component={Timetable}/>
        <Stack.Screen name="mySubjects" component={MySubjects}/>
      </Stack.Navigator>
    </View>
  )
}

export default MyClass