import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const ResultPortal = () => {
  return (
    <WebView 
      style={{ flex: 1 }}
      source={{
        uri: 'https://results.mlsuportal.in/'
      }}
    />
  )
}

export default ResultPortal