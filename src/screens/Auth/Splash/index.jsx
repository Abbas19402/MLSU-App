import { View, Text, Image } from 'react-native'
import React from 'react'
import MLSU_LOGO from '../../../../Public/Assets/Images/Logo/mlsuLogo.png'
import { Button } from 'native-base'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const { navigate } = useNavigation()
  const isCollegeSelected = useSelector(state => state.auth.isCollegeSelected)
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 250, position: 'relative', overflow: 'hidden', padding: 5 }}>
        <Image source={MLSU_LOGO} style={{ height: 230, width: 230 }} />
        <Button style={{ marginVertical: 40, backgroundColor: '#17447B' }} onPress={()=> {
          if(!isCollegeSelected) {
            navigate('Select College')
          } else {
            navigate('Login')
          }
        }}>
          <Text style={{ fontSize: 20, letterSpacing: 1, textTransform: 'uppercase', color: 'white' }}>Proceed</Text>
        </Button>
      </View>
    </View>
  )
}

export default Splash