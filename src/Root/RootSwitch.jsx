import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Root from '../screens/Root'
import Auth from '../screens/Auth'

const RootSwitch = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='root'>
      <Stack.Screen name="root" component={Root} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="auth" component={Auth}/>
    </Stack.Navigator>
  )
}

export default RootSwitch