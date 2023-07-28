import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Dashboard from './Dashboard'
import Notifications from './Notifications'
import Me from './Me'
import Events from './Events'
import Header from '../../components/Headers/Drawer/DrawerHeader'
import MyClass from './My class'
import { useSelector } from 'react-redux'

const Home = () => {
  const BottomTabs = createBottomTabNavigator()
  const headerStatus = useSelector(state => state.header.isInTabs)

  return (
    <BottomTabs.Navigator initialRouteName='Home' screenOptions={{
      headerShown: headerStatus,
      header: ({ navigation , route }) => {
        return <Header title={route.name} navigation={navigation}/>
      },
      tabBarStyle: {
        backgroundColor: '#eee'
      },
      tabBarInactiveTintColor: '#6f6f6f',
      tabBarActiveTintColor: 'dodgerblue'
    }}>
      <BottomTabs.Screen name='Home' component={Dashboard} options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => {
            return <Icon name='home-outline' size={20} color={color}/>
          }
      }} />
      <BottomTabs.Screen name='Events' component={Events} options={{
        title: "Events",
        tabBarIcon: ({ color }) => {
          return <Icon name='calendar-outline' size={20} color={color}/>
        }
      }}/>
      <BottomTabs.Screen name='My Class' component={MyClass} options={{
        title: "My Class",
        tabBarIcon: ({ color }) => {
          return <Icon name='book-outline' size={20} color={color}/>
        }
      }}/>
      <BottomTabs.Screen name='Notifications' component={Notifications} options={{
        title: "Notifications",
        tabBarIcon: ({ color }) => {
          return <Icon name='notifications-outline' size={20} color={color}/>
        }
      }}/>
      <BottomTabs.Screen name='Me' component={Me} options={{
        title: "Profile",
        tabBarIcon: ({ color }) => {
          return <Icon name='person-outline' size={20} color={color}/>
        }
      }}/>
    </BottomTabs.Navigator>
  )
}

export default Home