import { View, Text } from 'react-native'
import React from 'react'
import Card from '../../../../../components/Cards'
import { FlatList } from 'native-base'
import Subjects from '../../../../../constants/Subjects'

const MySubjects = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <FlatList 
            data={Subjects}
            renderItem={({ item }) => {
                return <Card.myClass 
                    title={item.label}
                    book={'Some Book'}
                    tutor={'Some Tutor'}
                />
            }}
        />
    </View>
  )
}

export default MySubjects