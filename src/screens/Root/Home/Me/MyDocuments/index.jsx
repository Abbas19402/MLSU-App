import { View, Text } from 'react-native'
import React from 'react'
import AvatarSection from '../../../../../components/Profile/AvatarSection'
import DocumentDataDisplayComponent from '../../../../../components/Profile/My Documents/DataDisplayComponent'
import SampleProfile from '../../../../../constants/SampleProfileDataSchema'

const MyDocuments = () => {
  return (
    <View style={{ flex: 1 }}>
      <AvatarSection 
        course={'BCA'}
        semester={'6'}
        session={'2020-23'}
        name={'Abbas Ali Dalal'}
      />
      <DocumentDataDisplayComponent data={SampleProfile}/>
      <Text style={{ color: 'gray' }}></Text>
    </View>
  )
}

export default MyDocuments