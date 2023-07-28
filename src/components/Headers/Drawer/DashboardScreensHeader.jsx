import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { SWITCH_TO_TABS } from '../../../../Redux/Header/HeaderSwitch'

const DashboardScreensHeader = ({ title }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <View style={{height: 60 ,  alignSelf: 'stretch' , justifyContent: 'space-between' , flexDirection:'row' , alignItems:"center", paddingHorizontal: 5 , borderBottomWidth: 1, backgroundColor: '#17447B' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
            <TouchableOpacity onPress={()=> {
              dispatch(SWITCH_TO_TABS())
              navigation.goBack()
            }}>
              <Icon name='arrow-back-outline' size={30} color={'white'}/>
            </TouchableOpacity>
            <Text style={{color: 'white' , fontSize: 22 , fontWeight: '400' , letterSpacing: 2}}>{title}</Text>
        </View>
    </View>
  )
}

export default DashboardScreensHeader