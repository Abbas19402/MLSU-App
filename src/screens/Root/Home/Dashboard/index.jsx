import React, { useState, useEffect } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useRoute } from '@react-navigation/native'

import DashboardUI from './DashboardUI'
import Events from '../Events'
import Timetable from './Timetable'
import Assignments from './Assignments'
import Attendance from './Attendance'
import AdmissionPortal from './Admission Portal'
import ResultPortal from './Result Portal'
import MLSUWebsite from './MLSU Webpage'
import ExaminationPortal from './Examination Portal'
import DashboardScreensDrawer from '../../../../components/Headers/Drawer/DashboardScreensDrawer'

const Dashboard = () => {
  const Stack = createNativeStackNavigator()
  const [ showHeader, setShowHeader ] = useState(false)
  
  return (
    <Stack.Navigator initialRouteName='dashboardUI' screenOptions={{
      headerShown: showHeader,
      header: ({ navigation , route }) => {
        route.name != 'dashboardUI' ? setShowHeader(true) : setShowHeader(false)
        return <DashboardScreensDrawer title={route.name} navigation={navigation} setShowHeader={setShowHeader}/>
      },
    }}>
      <Stack.Screen name='dashboardUI' component={DashboardUI}/>
      <Stack.Screen name='events' component={Events}/>
      <Stack.Screen name='timetable' component={Timetable}/>
      <Stack.Screen name='assignments' component={Assignments}/>
      <Stack.Screen name='attendance' component={Attendance}/>
      <Stack.Screen name='admissionPortal' component={AdmissionPortal}/>
      <Stack.Screen name='examinationPortal' component={ExaminationPortal}/>
      <Stack.Screen name='resultPortal' component={ResultPortal}/>
      <Stack.Screen name='mlsuWebsite' component={MLSUWebsite}/>
    </Stack.Navigator>
  )
}

export default Dashboard