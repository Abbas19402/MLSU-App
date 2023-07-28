import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { FlatList } from 'native-base'
import { TouchableOpacity, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Card from '../../../../components/Cards'
import Routes from '../../../../constants/Routes Arrays'
import { useDispatch } from 'react-redux'
import { SWITCH_TO_CHILDSTACK } from '../../../../../Redux/Header/HeaderSwitch'

const DashboardUI = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ height:120, borderBottomWidth: 1, alignSelf:'stretch', marginBottom: 30,  flexDirection: 'row' , justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' , justifyContent: 'flex-start', alignItems: 'center', gap: 16 }}>
          <Icon name='person-circle-outline' size={50} color={'black'}/>
          <Text style={{ color: 'black', fontSize: 30 , letterSpacing: 1, fontWeight: '300' }}>Abbas Ali Dalal</Text>
        </View>
        <Icon name='chevron-forward-outline' size={20} color={'black'}/>
      </View>

      <FlatList 
        data={Routes.Dashboard}
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
export default DashboardUI