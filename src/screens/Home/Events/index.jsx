import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'native-base'
import Card from '../../../components/Cards'
import axios from 'axios'

const Events = () => {
  const [ eventData , setEventData ] = useState([])
  const getEvents = async() => {
    try {
      const res = await axios.get('https://server-mlsu-majorproject.vercel.app/api/events/fetch')
      console.log(res.data.events)
      setEventData(res.data.events)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=> {
    getEvents()
  },[])
  return (
    <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center'}}>
      <FlatList 
        data={eventData}
        renderItem={({ item, index }) => 
          <Card.EventCard 
            key={index}
            title={item.eventTitle} 
            date={item.event_creation_date} 
            hashTag={item.hastag}
          />
        }
        vertical
      />
    </View>
  )
}

export default Events