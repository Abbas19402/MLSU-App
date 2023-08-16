import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AvatarSection from '../../../../components/Profile/AvatarSection'
import Card from '../../../../components/Cards'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'native-base'
import Routes from '../../../../constants/Routes Arrays'
import { useDispatch, useSelector } from 'react-redux'
import { SWITCH_TO_CHILDSTACK } from '../../../../../Redux/Header/HeaderSwitch'

const MeUI = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const Student = useSelector(state => state.login.student)
  const loginCategory = useSelector(state => state.login.loginCategory);
  const Faculty = useSelector(state => state.login.faculty);
  console.log(Student);
  return (
    <View style={{ flex:1, backgroundColor: 'white' }}>
      <AvatarSection 
        name={loginCategory =='student' ? Student.name : `${Faculty.personalDetails.firstName} ${Faculty.personalDetails.lastName}`}
        batch={loginCategory =='student' && `${Student.generalDetails.course_enrolled} - ${Student.generalDetails.batch}`}
      />
      <View style={{ position: 'relative', top: 150, alignItems: 'center' }}>
        <FlatList 
            data={Routes.Me}
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
    </View>
  )
}

export default MeUI