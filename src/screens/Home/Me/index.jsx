import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'

import MeUI from './MeUI'
import MyProfile from './MyProfile'
import MyDocuments from './MyDocuments'
import DashboardScreensHeader from '../../../components/Headers/Drawer/DashboardScreensHeader'

const Me = () => {
  const Stack = createNativeStackNavigator()
  const headerStatus = useSelector(state => state.header.isInStack)
  return (
    <Stack.Navigator initialRouteName='MeUI' screenOptions={{
      headerShown: headerStatus,
      header: ({ navigation , route }) => {
        return <DashboardScreensHeader title={route.name} navigation={navigation}/>
      },
    }}>
      <Stack.Screen name='MeUI' component={MeUI}/>
      <Stack.Screen name='My Profile' component={MyProfile}/>
      <Stack.Screen name='My Documents' component={MyDocuments}/>
    </Stack.Navigator>
  )
}

export default Me