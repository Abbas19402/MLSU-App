import { View, Text } from 'react-native'
import React from 'react'
import AvatarSection from '../../../../../components/Profile/AvatarSection'
import ProfileDataDisplayComponent from '../../../../../components/Profile/My Profile/DataDisplayComponent'
import SampleProfile from '../../../../../constants/SampleProfileDataSchema'

const MyProfile = () => {
  return (
    <View style={{ flex: 1 }}>
      <AvatarSection 
        course={'BCA'}
        semester={'6'}
        session={'2020-23'}
        name={'Abbas Ali Dalal'}
      />
      <ProfileDataDisplayComponent data={SampleProfile}/>
      <Text style={{ color: 'gray' }}></Text>
    </View>
  )
}

export default MyProfile