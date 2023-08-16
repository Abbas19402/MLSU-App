import { View, Text } from 'react-native'
import React , { useState } from 'react'
import { Box, Pressable, Input, Stack } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginStudent } from '../../../../Redux/Auth'

const StudentLogin = () => {
    const { navigate } = useNavigation()
    const dispatch = useDispatch()
    const [ show, setShow ] = useState(false);
    const [ studentCredentials, setStudentCredentials ] = useState({
        enrollment_id: '',
        password: ''
    })
    const Submit = async() => {
        await axios.post('https://server-mlsu-majorproject.vercel.app/api/auth/login/student',studentCredentials).then(res => {
            console.log("Response: ",res.data.student);
            dispatch(loginStudent(res.data.student.student))
            setStudentCredentials({
                enrollment_id: "",
                password: ""
            })
            navigate('root')
        }).catch(err => {
            console.log("Errorefdwdawdawdawdwa: ",JSON.stringify(err));
        })
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
                    value={studentCredentials.enrollment_id}
                    onChangeText={(eid)=> setStudentCredentials(()=> {
                        return {
                            enrollment_id: eid,
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
                            enrollment_id: studentCredentials.enrollment_id,
                            password: pwd 
                        }
                    })}
                />
                <Pressable w="100%" onPress={()=> Submit()}>
                    <Box w="100%" h="50" bg="black" borderRadius={5} marginY="10" justifyContent={'center'} alignItems={'center'}>
                        <Text style={{ color: "white" , fontSize: 28, textTransform: 'uppercase', letterSpacing:1 }}>Submit</Text>
                    </Box>
                </Pressable>
            </Stack>
        </Box>
    )
}

export default StudentLogin