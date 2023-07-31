import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './Splash';
import Authentication from './Authentication';
import SelectCollege from './College/SelectCollege';
import { useSelector } from 'react-redux';

const Auth = () => {
  const Stack = createNativeStackNavigator();
  const authStage = useSelector(state => state.auth.authStage)
  const isCollegeSelected = useSelector(state => state.auth.isCollegeSelected)
  console.log("Auth Stage -> ",authStage);
  return (
    <View style={{flex: 1, backgroundColor: 'white' }}>
      <Stack.Navigator initialRouteName='splash' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="splash" component={Splash}/>
        <Stack.Screen name="Select College" component={SelectCollege}/>
        <Stack.Screen name="Login" component={Authentication}/>
      </Stack.Navigator>
    </View>
  )
}

export default Auth