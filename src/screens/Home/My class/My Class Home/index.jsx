import { View } from 'react-native'
import React from 'react'
import Card from '../../../../components/Cards'
import { TouchableOpacity } from 'react-native'
import Routes from '../../../../constants/Routes Arrays'
import { FlatList } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { SWITCH_TO_CHILDSTACK } from '../../../../../Redux/Header/HeaderSwitch'

const MyClassHome = () => {
  const dispatch = useDispatch()
    const { navigate } = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <FlatList 
        data={Routes.Class}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={()=> {
            dispatch(SWITCH_TO_CHILDSTACK())
            navigate(item.screen)
          }}>
            <Card.DashboardCard
                iconName={item.iconName}
                title={item.title}
            />
          </TouchableOpacity>
        }}
      />
    </View>
  )
}

export default MyClassHome