import { View, Text, Linking } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const ResultPortal = () => {
  const handleDownload = (downloadUrl) => {
    // Use React Native's Linking module to download the file
    Linking.openURL(downloadUrl)
      .then(() => console.log('File download initiated'))
      .catch((error) => console.error('Error while downloading file:', error));
  };


  return (
    <WebView 
      style={{ flex: 1 }}
      source={{
        uri: 'https://results.mlsuportal.in/'
      }}
      onShouldStartLoadWithRequest={(event) => {
        const { url } = event;
        if (url.startsWith('your_download_url_here')) {
          // Handle the file download using Linking
          Linking.openURL(url)
            .then(() => console.log('File download initiated'))
            .catch((error) => console.error('Error while downloading file:', error));
          return false; // Prevent the WebView from navigating to the download URL
        }
        return true; // Allow other URLs to be loaded normally in the WebView
      }}
    />
  )
}

export default ResultPortal