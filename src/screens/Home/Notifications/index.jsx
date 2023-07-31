import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'native-base'
import Card from '../../../components/Cards'

const Notifications = () => {
  return (
    <View style={{ flex:1, backgroundColor: 'white', alignItems: 'center', alignSelf: 'stretch', borderWidth: 1 }}>
      <FlatList
      style={{ alignSelf: 'stretch', paddingHorizontal: 5 }}
        data={[...Array(5)]}
        renderItem={({ item }) => {
          return <Card.NotificationCard
            title={'Dr. Avinash Panwar'}
            message={'Good Morning to all of you. As you all know that you are in 6th Semester and so your BCA has completed!! So now you all can take your degree and go now'}
            time={'12:00 AM'}
            date={'29 July 2023'}
          />
        }}
      />
    </View>
  )
}

export default Notifications