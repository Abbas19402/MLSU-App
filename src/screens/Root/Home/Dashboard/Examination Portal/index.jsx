import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const ExaminationPortal = () => {
  return (
    <WebView 
      style={{ flex: 1 }}
      source={{
        uri: 'https://examination.mlsuportal.in/default.aspx'
      }}
    />
  )
}

export default ExaminationPortal