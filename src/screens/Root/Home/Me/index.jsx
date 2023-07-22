import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AvatarSection from '../../../../components/Profile/AvatarSection'
import Card from '../../../../components/Cards'
import { useNavigation } from '@react-navigation/native'

const Me = () => {
  const { navigate } = useNavigation()
  return (
    <View style={{ flex:1, backgroundColor: 'white' }}>
      <AvatarSection 
        course={'BCA'}
        semester={'6'}
        session={'2020-23'}
        name={'Abbas Ali Dalal'}
      />
      <View style={{ position: 'relative', top: 150 }}>
        <TouchableOpacity style={{ height:70 }}>
          <Card.DashboardCard 
            iconName={'person-outline'}
            title={'My Profile'}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Me