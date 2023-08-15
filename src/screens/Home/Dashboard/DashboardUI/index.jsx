import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { FlatList, Pressable } from 'native-base'
import { TouchableOpacity, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import AvatarSection from '../../../../components/Profile/AvatarSection'
import Card from '../../../../components/Cards'
import Routes from '../../../../constants/Routes Arrays'
import { SWITCH_TO_CHILDSTACK } from '../../../../../Redux/Header/HeaderSwitch'

const DashboardUI = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const Student = useSelector(state => state.login.student).student
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <Pressable w="100%" onPress={()=> navigate('Me')}>
        <AvatarSection 
          name={Student.name}
          batch={`${Student.generalDetails.course_enrolled} - ${Student.generalDetails.batch}`}
        />
      </Pressable>

      <FlatList 
        style={{ marginTop: 130 }}
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