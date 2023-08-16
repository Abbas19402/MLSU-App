import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FlatList } from 'native-base'
import Card from '../../../components/Cards'
import axios from 'axios'

const Notifications = () => {
  const [ notificationData, setNotificationData ] = useState([])
  const getNotifications = async() => {
    try{
      const res = await axios.get('https://server-mlsu-majorproject.vercel.app/api/notification/fetch')
      console.log(res.data.notification)
      setNotificationData(res.data.notification)
    } catch(err) {
      console.log(err)
    }
  }
  useEffect(()=> {
    getNotifications()
  },[])
  return (
    <View style={{ flex:1, backgroundColor: 'white', alignItems: 'center', alignSelf: 'stretch', borderWidth: 1 }}>
      <FlatList
      style={{ alignSelf: 'stretch', paddingHorizontal: 5 }}
        data={notificationData}
        renderItem={({ item, index }) => {
          return <Card.NotificationCard
            key={index}
            title={item.sender}
            message={item.notificationMessage}
            time={'12:00 AM'}
            date={item.notification_creation_date}
          />
        }}
      />
    </View>
  )
}

export default Notifications