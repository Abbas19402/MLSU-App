import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const AdmissionPortal = () => {
  return (
    <WebView 
      style={{ flex: 1 }}
      source={{
        uri: 'https://www.mlsu.ac.in/Online-Admission20'
      }}
    />
  )
}

export default AdmissionPortal