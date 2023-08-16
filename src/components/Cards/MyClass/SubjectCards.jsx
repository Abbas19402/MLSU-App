import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const SubjectCards = ({ title, tutor = 'someTutor', book = 'someBook' }) => {
  return (
    <View style={{ marginVertical: 8, width: 400 , flex:1, flexDirection: 'column' , justifyContent: 'center', alignItems: 'center' , borderRadius: 9, borderWidth: 1,borderColor: 'lightgray', paddingHorizontal: 20 }}>
      <View style={{ height: 70 , flex: 1, flexDirection: 'row' , justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch' }}>
          <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch' }}>
          <View style={{ flex: 1, flexDirection: 'col' , justifyContent: 'space-between' , alignItems: 'flex-start' }}>
            <Text style={{ color: 'black' , fontSize: 20, letterSpacing: 1, fontWeight: '500' }}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black' , fontSize: 14, letterSpacing: 1, fontWeight: '300' }}>Tutor:</Text>
                <Text style={{ color: 'black' , fontSize: 14, letterSpacing: 1, fontWeight: '300', marginHorizontal: 5 }}>{tutor}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black' , fontSize: 14, letterSpacing: 1, fontWeight: '300' }}>Book:</Text>
                <Text style={{ color: 'black' , fontSize: 14, letterSpacing: 1, fontWeight: '300', marginHorizontal: 5 }}>{book}</Text>
            </View>
          </View>
          <Icon name="chevron-down-outline" size={24} color={'black'}/>
        </View>
        
      </View>
    </View>
  )
}

export default SubjectCards