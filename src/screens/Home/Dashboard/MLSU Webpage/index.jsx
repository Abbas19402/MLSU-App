import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const MLSUWebsite = () => {
  return (
    <WebView 
      style={{ flex: 1 }}
      source={{
        uri: 'https://mlsu.ac.in'
      }}
    />
  )
}

export default MLSUWebsite