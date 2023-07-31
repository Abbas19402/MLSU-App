import { View, Text, Image } from 'react-native'
import React from 'react'
import MLSU_LOGO from '../../../../../Public/Assets/Images/Logo/mlsuLogo.png'

const CollegeCard = ({ CollegeName, center, erpWeb }) => {
  return (
    <View style={{ alignSelf: 'stretch', height: 90, borderWidth: 1, marginVertical: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 3, justifyContent: 'space-between', borderRadius: 5 }}>
      <View style={{ width: 80, height:80 , justifyContent: 'center', alignItems: 'center'}}>
        <Image source={MLSU_LOGO} style={{ width: 70, height: 70 }}/>
      </View>
      <View style={{ height: 80, width:300, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: 5 }}>
        <Text style={{ fontSize: 16, color: 'black', marginVertical: 2 }}>{CollegeName}</Text>
        <Text style={{ fontSize: 16, color: 'black', marginVertical: 2 }}>{center}</Text>
        <Text style={{ fontSize: 14, color: 'gray', marginVertical: 2 }}>{erpWeb}</Text>
      </View>
    </View>
  )
}

export default CollegeCard