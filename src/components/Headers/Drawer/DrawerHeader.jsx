import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'

const Header = ({ title , navigation }) => {
  return (
    <View style={{height: 60 ,  alignSelf: 'stretch' , justifyContent: 'space-between' , flexDirection:'row' , alignItems:"center", paddingHorizontal: 5 , backgroundColor: '#17447B' }}>
        <Text style={{color: 'white' , fontSize: 22 , fontWeight: '400' , letterSpacing: 2}}>{title}</Text>
    </View>
  )
}

export default Header