import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AvatarSection from '../../../../components/Profile/AvatarSection'
import Card from '../../../../components/Cards'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MeUI from './MeUI'
import MyProfile from './MyProfile'
import Attendance from '../Dashboard/Attendance'
import MyDocuments from './MyDocuments'

const Me = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='MeUI' screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='MeUI' component={MeUI}/>
      <Stack.Screen name='myProfile' component={MyProfile}/>
      <Stack.Screen name='myDocuments' component={MyDocuments}/>
    </Stack.Navigator>
  )
}

export default Me