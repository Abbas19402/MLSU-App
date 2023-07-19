import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'

const Header = ({ title , navigation }) => {
  return (
    <View style={{height: 60 ,  alignSelf: 'stretch' , justifyContent: 'space-between' , flexDirection:'row' , alignItems:"center", paddingHorizontal: 5 , borderBottomWidth: 1, backgroundColor: 'dodgerblue' }}>
        <Text style={{color: 'white' , fontSize: 22 , fontWeight: '400' , letterSpacing: 2}}>{title}</Text>
        <TouchableOpacity onPress={()=> navigation.openDrawer()}><Icon name='menu-outline' size={30} color={'white'}/></TouchableOpacity>
    </View>
  )
}

export default Header