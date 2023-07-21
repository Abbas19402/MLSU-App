import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native'

const DashboardScreensDrawer = ({ title , setShowHeader }) => {
  const route = useRoute()
  const navigation = useNavigation()
  console.log(route);
  return (
    <View style={{height: 60 ,  alignSelf: 'stretch' , justifyContent: 'space-between' , flexDirection:'row' , alignItems:"center", paddingHorizontal: 5 , borderBottomWidth: 1, backgroundColor: '#17447B' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
            <TouchableOpacity onPress={()=> navigation.goBack()}><Icon name='arrow-back-outline' size={30} color={'white'}/></TouchableOpacity>
            <Text style={{color: 'white' , fontSize: 22 , fontWeight: '400' , letterSpacing: 2}}>{title}</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.openDrawer()}><Icon name='menu-outline' size={30} color={'white'}/></TouchableOpacity>
    </View>
  )
}

export default DashboardScreensDrawer