import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'native-base'
import Card from '../../../components/Cards'
import { useDispatch } from 'react-redux'
import { SET_COLLEGE } from '../../../../Redux/Auth/collegeSelectionSlice'
import { useNavigation } from '@react-navigation/native'
import Universities from '../../../constants/Universities'

const SelectCollege = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  return (
    <View style={{ flex:1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#17447B', flexDirection: 'row' , justifyContent: 'flex-start', alignItems: 'center', height: 60 }}>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Icon name="chevron-back-outline" size={22} color={'white'}/>
        </TouchableOpacity>
        <TextInput placeholder='Search' style={{ width: 300, marginHorizontal: 30, fontSize: 22, textTransform: 'capitalize' , }}/>
      </View>
      <View style={{ alignSelf: 'stretch', alignItems: 'center' }}>
        <FlatList
          style={{ alignSelf: 'stretch', paddingHorizontal: 10 }}
          data={Universities}
          renderItem={({ item, index })=> {
            return <TouchableOpacity onPress={()=> {
              dispatch(SET_COLLEGE({
                collegeName: '34, University College of Science',
                center: 'Vigyan Bhavan',
                erpWeb: 'itcs.mlsu.erp.org'
              }))
              navigate('Login')
            }}>
              <Card.CollegeCard
                key={index}
                CollegeName={item.collegeName}
                erpWeb={item.erpWeb}
                center={item.center}
              />
            </TouchableOpacity>
          }}
        />
      </View>
    </View>
  )
}

export default SelectCollege