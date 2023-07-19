import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { FlatList } from 'native-base'
import Card from '../../../../components/Cards'

const Events = () => {
  return (
    <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center'}}>
      <FlatList 
        data={[...Array(10)]}
        renderItem={() => 
          <Card.EventCard 
            title={'Leadership Enclave Organised'} 
            date={'10 july, 2023'} 
            hashTag={'Upcoming Events'}
          />
        }
        vertical
      />
    </View>
  )
}

export default Events