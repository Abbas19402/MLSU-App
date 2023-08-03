import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MonthCarouselBar from '../../../../components/MonthSelector/MonthCarouselBar'
import Months from '../../../../constants/Months'
import Subjects from '../../../../constants/Subjects'
import { FlatList, Pressable } from 'native-base'
import Modal from '../../../../components/Modals'

const Assignments = () => {
  const date = new Date;
  const [ monthNumber , setMonthNumber ] = useState(date.getMonth())
  const [ modalVisible, setModalVisible ] = useState(false)
  return (
    <View style={{ flex:1 }}>
      <MonthCarouselBar 
        year={date.getFullYear().toString()}
        month={Months[monthNumber].label}
        setMonthNumber={setMonthNumber}
        monthNumber={monthNumber}
      />
      <View style={{ alignSelf: 'stretch', alignItems: 'center' }}>
        <FlatList
          style={{ alignSelf: 'stretch', paddingHorizontal: 5 }}
          data={Subjects}
          renderItem={({ item, index }) => {
            return <TouchableOpacity onPress={()=> setModalVisible(true)}>
              <View key={index} style={{ height: 70, alignSelf: 'stretch', borderWidth: 1, borderRadius: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 10}}>
              <Text style={{ color: 'black', fontSize: 20, letterSpacing: 1 }}>{item.label}</Text>
            </View>
          </TouchableOpacity>
          }}
        />
      </View>
      <Modal.dashboard.assignment 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  )
}

export default Assignments