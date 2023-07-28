import { View, Text } from 'react-native'
import React from 'react'
import AvatarSection from '../../../../../components/Profile/AvatarSection'
import DocumentDataDisplayComponent from '../../../../../components/Profile/My Documents/DataDisplayComponent'
import SampleDocuments from '../../../../../constants/SampleDocumentsData'

const MyDocuments = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <DocumentDataDisplayComponent data={SampleDocuments}/>
      <Text style={{ color: 'gray' }}></Text>
    </View>
  )
}

export default MyDocuments