import { View, Text } from 'react-native'
import React , { useState } from 'react'
import { Box, Pressable, Input, Stack } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { loginFaculty } from '../../../../Redux/Auth'
import { useDispatch } from 'react-redux'

const FacultyLogin = () => {
    const { navigate } = useNavigation();
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [ facultyCredentials, setFacultyCredentials ] = useState({
        faculty_id: '',
        password: ''
    })
    const Submit = async() => {
        console.log(facultyCredentials)
        await axios.post('https://server-mlsu-majorproject.vercel.app/api/auth/login/faculty',facultyCredentials).then(res => {
            console.log("Response: ",res.data.faculty.faculty);
            dispatch(loginFaculty(res.data.faculty.faculty))
            setFacultyCredentials({
                faculty_id: '',
                password: ''
            })
            navigate('root')
        }).catch((err )=> {
            console.log("Err: ",err);
        })
    }
    return (
        <Box w="310" h="400" marginY="10" shadow={2}>
            <Box w="100%" marginBottom="5" marginTop="10" border="1">
            <Text style={{ fontSize: 30, fontWeight: '300', letterSpacing: 2, color: 'black', }}>Login Faculty</Text>
            </Box>
            <Stack space={4} w="100%" alignItems="center">
                <Input 
                    w='100%' 
                    InputLeftElement={
                        <View style={{ paddingHorizontal: 10 }}>
                            <Icon name="person" size={30} color="black" />
                        </View>
                    } 
                    placeholder="Faculty ID" 
                    fontSize='18'
                    value={facultyCredentials.faculty_id}
                    onChangeText={(fid)=> setFacultyCredentials(()=> {
                        return {
                            faculty_id: fid,
                            password: facultyCredentials.password
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
                    value={facultyCredentials.password}
                    onChangeText={(pwd)=> setFacultyCredentials(()=> {
                        return {
                            faculty_id: facultyCredentials.faculty_id,
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

export default FacultyLogin