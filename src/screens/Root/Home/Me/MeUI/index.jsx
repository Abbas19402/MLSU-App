import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AvatarSection from '../../../../../components/Profile/AvatarSection'
import Card from '../../../../../components/Cards'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'native-base'
import Routes from '../../../../../constants/Routes Arrays'

const MeUI = () => {
  const { navigate } = useNavigation()
  return (
    <View style={{ flex:1, backgroundColor: 'white' }}>
      <AvatarSection 
        course={'BCA'}
        semester={'6'}
        session={'2020-23'}
        name={'Abbas Ali Dalal'}
      />
      <View style={{ position: 'relative', top: 150, alignItems: 'center' }}>
        <FlatList 
            data={Routes.Me}
            renderItem={({ item }) => {
            return <TouchableOpacity onPress={()=> navigate(item.screen)}>
                <Card.DashboardCard
                    iconName={item.iconName}
                    title={item.title}
                />
            </TouchableOpacity>
            }}
        />
      </View>
    </View>
  )
}

export default MeUI