import React , { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import About from './About'
import StudentCorner from './StudentCorner'
import Academics from './Academics'
import Home from './Home'
import Media from './Media'
import Helpline from './Helpline'
import Contact from './ContactUs'
import Header from '../../components/Headers/Drawer/DrawerHeader'

const Root = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName='home' screenOptions={{
      drawerPosition: 'right',
      drawerType: 'slide',
      drawerStyle: {
        backgroundColor: 'white',
        padding: 0
      },
      drawerInactiveTintColor: 'lightgray',
      drawerActiveTintColor: 'black',
      drawerItemStyle: {
        marginHorizontal: 0,
        marginVertical: 0,
        borderRadius: 0,
        paddingHorizontal: 5
      },
      header: ({ navigation , route }) => {
        return <Header title={route.name} navigation={navigation}/>
      }
    }}>
      <Drawer.Screen name="Home Page" component={Home} options={{
        headerShown: false,
        title: 'Home'
      }}/>
      <Drawer.Screen name="About" component={About}/>
      <Drawer.Screen name="Student Corner" component={StudentCorner}/>
      <Drawer.Screen name="Academics" component={Academics}/>
      <Drawer.Screen name="Media" component={Media}/>
      <Drawer.Screen name="Helpline" component={Helpline}/>
      <Drawer.Screen name="Contact" component={Contact}/>
    </Drawer.Navigator>
  )
}

export default Root