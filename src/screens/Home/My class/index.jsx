import { View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyClassHome from './My Class Home'
import Attendance from '../Dashboard/Attendance'
import Timetable from '../Dashboard/Timetable'
import MySubjects from './My Class Home/Subject'
import { useSelector } from 'react-redux'
import DashboardScreensHeader from '../../../components/Headers/Drawer/DashboardScreensHeader'

const MyClass = () => {
  const Stack = createNativeStackNavigator()
  const headerStatus = useSelector(state => state.header.isInStack)
  return (
    <View style={{ flex:1 }}>
      <Stack.Navigator screenOptions={{
        headerShown: headerStatus,
        header: ({ navigation , route }) => {
          return <DashboardScreensHeader title={route.name} navigation={navigation}/>
        },
      }}>
        <Stack.Screen name="My Class Menu" component={MyClassHome}/>
        <Stack.Screen name="Attendance" component={Attendance}/>
        <Stack.Screen name="Timetable" component={Timetable}/>
        <Stack.Screen name="My Subjects" component={MySubjects}/>
      </Stack.Navigator>
    </View>
  )
}

export default MyClass