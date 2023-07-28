import { View, Text } from 'react-native'
import React from 'react'
import Card from '../../../../../components/Cards'
import { FlatList } from 'native-base'

const MySubjects = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <FlatList 
            data={[...Array(5)]}
            renderItem={({ item }) => {
                return <Card.myClass 
                    title={'Javascript'}
                    book={'Some Book'}
                    tutor={'Some Tutor'}
                />
            }}
        />
    </View>
  )
}

export default MySubjects