import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Dashboard from './Dashboard'
import Notifications from './Notifications'
import Me from './Me'
import Events from './Events'
import Header from '../../../components/Headers/Drawer/DrawerHeader'
import MyClass from './My class'

const Home = () => {
  const BottomTabs = createBottomTabNavigator()
  return (
    <BottomTabs.Navigator initialRouteName='Dashboard' screenOptions={{
      header: ({ navigation , route }) => {
        return <Header title={route.name} navigation={navigation}/>
      },
      tabBarStyle: {
        backgroundColor: '#eee'
      },
      tabBarInactiveTintColor: '#6f6f6f',
      tabBarActiveTintColor: 'dodgerblue'
    }}>
      <BottomTabs.Screen name='Dashboard' component={Dashboard} options={{
          tabBarIcon: ({ color }) => {
            return <Icon name='home-outline' size={20} color={color}/>
          }
      }} />
      <BottomTabs.Screen name='Events' component={Events} options={{
        tabBarIcon: ({ color }) => {
          return <Icon name='calendar-outline' size={20} color={color}/>
        }
      }}/>
      <BottomTabs.Screen name='MyClass' component={MyClass} options={{
        tabBarIcon: ({ color }) => {
          return <Icon name='book-outline' size={20} color={color}/>
        }
      }}/>
      <BottomTabs.Screen name='Notifications' component={Notifications} options={{
        tabBarIcon: ({ color }) => {
          return <Icon name='notifications-outline' size={20} color={color}/>
        }
      }}/>
      <BottomTabs.Screen name='Me' component={Me} options={{
        tabBarIcon: ({ color }) => {
          return <Icon name='person-outline' size={20} color={color}/>
        }
      }}/>
    </BottomTabs.Navigator>
  )
}

export default Home