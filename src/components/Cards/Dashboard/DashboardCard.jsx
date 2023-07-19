import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const DashboardCard = ({ iconName , title }) => {
  return (
    <View style={{ marginVertical: 8, width: 400 , flex:1, flexDirection: 'column' , justifyContent: 'center', alignItems: 'center' , borderRadius: 9, borderWidth: 1,borderColor: 'lightgray' ,  paddingHorizontal: 20 }}>
      <View style={{ height: 70 , flex: 1, flexDirection: 'row' , justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch' }}>
        <View style={{ flex: 1, flexDirection: 'row' , justifyContent: 'flex-start' , alignItems: 'center', gap: 16 }}>
            <Icon name={iconName} size={26} color={'black'} />
            <View>
                <Text style={{ color: 'black' , fontSize: 20, letterSpacing: 1, fontWeight: '300' }}>{title}</Text>
            </View>
        </View>
        <View>
            <Icon name='chevron-forward-outline' size={20} color={'black'} />
        </View>
      </View>
    </View>
  )
}

export default DashboardCard