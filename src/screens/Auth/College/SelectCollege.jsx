import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'native-base'
import Card from '../../../components/Cards'
import { useDispatch } from 'react-redux'
import { SET_COLLEGE } from '../../../../Redux/Auth/collegeSelectionSlice'
import { useNavigation } from '@react-navigation/native'

const SelectCollege = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  return (
    <View style={{ flex:1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#17447B', flexDirection: 'row' , justifyContent: 'flex-start', alignItems: 'center', height: 60 }}>
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={()=> {

        }}>
          <Icon name="chevron-back-outline" size={22} color={'white'}/>
        </TouchableOpacity>
        <TextInput placeholder='Search' style={{ width: 300, marginHorizontal: 30, fontSize: 22, textTransform: 'capitalize' , }}/>
      </View>
      <View style={{ alignSelf: 'stretch', alignItems: 'center' }}>
        <FlatList
          style={{ alignSelf: 'stretch', paddingHorizontal: 10 }}
          data={[...Array(3)]}
          renderItem={({ item })=> {
            return <TouchableOpacity onPress={()=> {
              dispatch(SET_COLLEGE({
                collegeName: '34, University College of Science',
                center: 'Vigyan Bhavan',
                erpWeb: 'itcs.mlsu.erp.org'
              }))
              navigate('Login')
            }}>
              <Card.CollegeCard 
                CollegeName={'34, University College of Science'}
                erpWeb={'itcs.mlsu.erp.org'}
                center={'Vigyan Bhavan'}
              />
            </TouchableOpacity>
          }}
        />
      </View>
    </View>
  )
}

export default SelectCollege