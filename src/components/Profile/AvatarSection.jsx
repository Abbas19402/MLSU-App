import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const AvatarSection = ({ name, batch }) => {
  return (
    <View style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'space-between' }}>
      <View style={{ height: 75, backgroundColor: '#17447B', justifyContent: 'center', alignItems: 'center' }}>
        
      </View>
      <View style={{ minWidth: 100 , alignSelf: 'center', top: 30, justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
        <Icon name='person-circle-outline' size={100} color={'black'} />
        <Text style={{ color: 'black', fontSize: 28, fontWeight: '300' }}>{name}</Text>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: '300', marginVertical: 10 }}>{batch}</Text>
      </View>
      <View style={{ height: 2, alignSelf: 'stretch', backgroundColor: '#17447B', top: 130 }}></View>
    </View>
  )
}

export default AvatarSection