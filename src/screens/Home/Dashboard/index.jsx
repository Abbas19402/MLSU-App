import React, { useState, useEffect } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation, useRoute } from '@react-navigation/native'

import DashboardUI from './DashboardUI'
import Events from '../Events'
import Timetable from './Timetable'
import Assignments from './Assignments'
import Attendance from './Attendance'
import AdmissionPortal from './Admission Portal'
import ResultPortal from './Result Portal'
import MLSUWebsite from './MLSU Webpage'
import ExaminationPortal from './Examination Portal'
import DashboardScreensHeader from '../../../components/Headers/Drawer/DashboardScreensHeader'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const Stack = createNativeStackNavigator()
  const headerStatus = useSelector(state => state.header.isInStack)
  
  return (
    <Stack.Navigator initialRouteName='dashboardUI' screenOptions={{
      headerShown: headerStatus,
      header: ({ navigation , route }) => {
        return <DashboardScreensHeader title={route.name} navigation={navigation}/>
      },
    }}>
      <Stack.Screen name='Dashboard' component={DashboardUI}/>
      <Stack.Screen name='Events' component={Events}/>
      <Stack.Screen name='Timetable' component={Timetable}/>
      <Stack.Screen name='Assignments' component={Assignments}/>
      <Stack.Screen name='Attendance' component={Attendance}/>
      <Stack.Screen name='Admission Portal' component={AdmissionPortal}/>
      <Stack.Screen name='Examination Portal' component={ExaminationPortal}/>
      <Stack.Screen name='Result Portal' component={ResultPortal}/>
      <Stack.Screen name='MLSU Website' component={MLSUWebsite}/>
    </Stack.Navigator>
  )
}

export default Dashboard