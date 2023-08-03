import React , { useEffect, useRef, useState } from 'react'
import { Modal, Button, Input, FormControl, FlatList, Pressable } from 'native-base'
import { Text, View, ScrollView } from 'react-native'

const AssignmentModal = ({ modalVisible, setModalVisible }) => {
    const initialRef = useRef(null);
    const finalRef = useRef(null);

    const [ isAssignmentSelected, setIsAssignmentSelected ] = useState(false)
    const [ selectedAssignment, setSelectedAssignment] = useState('')

    const SampleAssignment = {
        assignmentSubject: 'Java',
        dateOfAssignmentAlloted: '25/7/2023',
        dateOfSubmission: '10/8/2023',
        question: [
            'What is Java? Mention the objective of OOPs.',
            'What is Java? Mention the objective of OOPs.',
            'What is Java? Mention the objective of OOPs.',
            'What is Java? Mention the objective of OOPs.',
            'What is Java? Mention the objective of OOPs.',
            'What is Java? Mention the objective of OOPs.',
            'What is Java? Mention the objective of OOPs.',
            'What is Java? Mention the objective of OOPs.',
            'What is Java? Mention the objective of OOPs.',
            'What is Java? Mention the objective of OOPs.'
        ]
    }

    return <>
        <Modal isOpen={modalVisible} onClose={() => {
            setModalVisible(false)
            setIsAssignmentSelected(false)
            setSelectedAssignment('')    
        }} initialFocusRef={initialRef} finalFocusRef={finalRef}>
          <Modal.Content>
            <Modal.Body>
                {isAssignmentSelected ? <ScrollView 
                    contentContainerStyle={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}
                >
                    <View style={{ alignSelf: 'stretch', height: 30, justifyContent: 'center' , paddingHorizontal: 5, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>{SampleAssignment.assignmentSubject}</Text>
                    </View>
                    <View style={{ flex:1, alignSelf: 'stretch', justifyContent: 'center' , paddingHorizontal: 5, maxHeight: 250 }}>
                        <FlatList
                            data={SampleAssignment.question}
                            renderItem={({ item, index }) => {
                                return <View style={{ color: 'gray', fontSize: 18, marginVertical: 5, flexDirection: 'row', gap: 5 }}>
                                    <Text style={{ color: 'black', fontWeight:'500'}}>Q{index+1}.{']'}</Text>
                                    <Text style={{ color: 'gray', fontWeight:'400'}}>{item}</Text>
                                </View>
                            }}
                        />
                    </View>
                    <View style={{ alignSelf: 'stretch', flexDirection: 'column' ,justifyContent: 'flex-start' , paddingHorizontal: 5, alignItems: 'flex-start', borderTopWidth: 1, borderTopColor: 'gray' }}>
                        <Text style={{ color: 'black', fontSize: 16, marginVertical: 5 }}>Allotment Date: {SampleAssignment.dateOfAssignmentAlloted}</Text>
                        <Text style={{ color: 'black', fontSize: 16, marginVertical: 5 }}>Submission Date: {SampleAssignment.dateOfSubmission}</Text>
                    </View>
                </ScrollView> : <View style={{ flex:1, height: 300 }}><FlatList
                    data={[...Array(10)]}
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item, index }) => {
                        return <Pressable onPress={()=> {
                                setIsAssignmentSelected(true)
                                setSelectedAssignment('Assignment'+`${index+1}`)
                            }}><View key={index} style={{ alignSelf: 'stretch', height: 30, justifyContent: 'center', paddingHorizontal: 10, marginVertical: 6, backgroundColor: '#f0f3fa', borderRadius: 5 }}>
                            <Text style={{ fontSize: 20, color: 'gray' }}>Assignment {index+1}</Text>
                        </View>
                        </Pressable>
                    }}
                /></View>}
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </>;
}

export default AssignmentModal