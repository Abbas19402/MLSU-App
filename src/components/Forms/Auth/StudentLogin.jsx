import { View, Text } from 'react-native'
import React , { useState } from 'react'
import { Box, Pressable, Input, Stack } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const StudentLogin = () => {
    const { navigate } = useNavigation()
    const [ show, setShow ] = useState(false);
    const [ studentCredentials, setStudentCredentials ] = useState({
        enrollmentId: '',
        password: ''
    })
    const Submit = () => {
        console.log(studentCredentials)
        navigate('root')
    }
    return (
        <Box w="310" h="400" marginY="10" shadow={2}>
            <Box w="100%" marginBottom="5" marginTop="10" border="1">
            <Text style={{ fontSize: 30, fontWeight: '300', letterSpacing: 2, color: 'black', }}>Login Student</Text>
            </Box>
            <Stack space={4} w="100%" alignItems="center">
                <Input 
                    w='100%' 
                    InputLeftElement={
                        <View style={{ paddingHorizontal: 10 }}>
                            <Icon name="person" size={30} color="black" />
                        </View>
                    } 
                    placeholder="Enrollment ID" 
                    fontSize='18'
                    value={studentCredentials.enrollmentId}
                    onChangeText={(eid)=> setStudentCredentials(()=> {
                        return {
                            enrollmentId: eid,
                            password: studentCredentials.password
                        }
                    })}
                />
                <Input 
                    w='100%' 
                    type={show ? 'text' : 'password'} 
                    InputRightElement={
                        <Pressable onPress={() => setShow(!show)} style={{ paddingHorizontal: 10 }}>
                            <Icon name="search" size={30} color="black"/>
                        </Pressable>
                    } 
                    placeholder="Password"
                    fontSize='18'
                    value={studentCredentials.password}
                    onChangeText={(pwd)=> setStudentCredentials(()=> {
                        return {
                            enrollmentId: studentCredentials.enrollmentId,
                            password: pwd 
                        }
                    })}
                />
                <Pressable w="100%" onPress={()=> Submit()}>
                    <Box w="100%" h="50" bg="blue.200" borderRadius={5} marginY="10" justifyContent={'center'} alignItems={'center'}>
                        <Text style={{ color: "white" , fontSize: 28, textTransform: 'uppercase', letterSpacing:1 }}>Submit</Text>
                    </Box>
                </Pressable>
            </Stack>
        </Box>
    )
}

export default StudentLogin