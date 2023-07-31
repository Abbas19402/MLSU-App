import { View, Text } from 'react-native'
import React , { useState } from 'react'
import { Center, HStack, Pressable, Image } from 'native-base'
import MLSU_LOGO from '../../../../Public/Assets/Images/Logo/mlsuLogo.png'
import Forms from '../../../components/Forms'

const Authentication = () => {
  const [ active , setActive ] = useState('student')
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={MLSU_LOGO} style={{ height: 180, width: 180, marginVertical: 40 }} alt="MLSU" />
      <HStack space={3} justifyContent="center">
        <Pressable onPress={() => setActive('student')}>
          <Center h="10" w="150" bg={`${active == 'student' ? 'gray.100' : 'gray.300'}`} rounded="md" shadow={active == 'student' ? 5 : 0} justifyContent={'center'} alignItems={'center'} onPress={() => setActive('student')}>
            <Text style={{ fontSize: 22, color: active == 'student' ? 'black':'white', letterSpacing: 1, textTransform: 'uppercase' }}>Student</Text>
          </Center>
        </Pressable>
        <Pressable onPress={() => setActive('faculty')}>
          <Center h="10" w="150" bg={`${active == 'faculty' ? 'gray.100' : 'gray.300'}`} rounded="md" shadow={active == 'faculty' ? 5 : 0} justifyContent={'center'} alignItems={'center'} onPress={() => setActive('faculty')}>
            <Text style={{ fontSize: 22, color: active == 'faculty' ? 'black':'white', letterSpacing: 1, textTransform: 'uppercase' }}>Faculty</Text>
          </Center>
        </Pressable>
      </HStack>
      {active == 'student'? <Forms.Auth.studentLogin /> : <Forms.Auth.facultyLogin />}
    </View>
  );
}

export default Authentication