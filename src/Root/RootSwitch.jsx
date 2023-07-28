import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Auth from '../screens/Auth'
import Home from '../screens/Home'

const RootSwitch = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='root'>
      <Stack.Screen name="root" component={Home} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="auth" component={Auth}/>
    </Stack.Navigator>
  )
}

export default RootSwitch