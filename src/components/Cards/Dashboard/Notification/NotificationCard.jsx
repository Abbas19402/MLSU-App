import { View, Text } from 'react-native'
import React from 'react'

const NotificationCard = ({ title , message, date, time }) => {
  return (
    <View style={{ alignSelf: 'stretch' , borderWidth: 1, marginVertical: 5, borderRadius: 10, flexDirection: 'column', minHeight: 100, borderColor: 'lightgray' }}>
        <View style={{ height: 30, alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{ height: 30, width: 320, borderTopStartRadius: 10, borderBottomEndRadius: 10, backgroundColor: '#f0f3fa', justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 10 }}>
                <Text style={{ color: 'darkblue', fontSize: 17}}>{title}</Text>
            </View>
            <View style={{ height: 30, width: 78, borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ fontSize: 16, color: 'darkblue', fontWeight: '500', letterSpacing: 1 }}>{time}</Text>
            </View>
        </View>
        <View style={{  flexDirection: 'row', justifyContent: 'flex-end', alignContent: 'flex-end'}}>
            <View style={{ minHeight:70, width: 300, borderBottomLeftRadius: 10, padding: 10 }}>
                <Text style={{ fontSize: 16, color: 'gray' }}>{message}</Text>
            </View>
            <View style={{ minHeight:70, width: 98, borderBottomRightRadius: 10, justifyContent: 'flex-end', paddingHorizontal: 10, paddingVertical: 3}}>
                <Text style={{fontSize: 13, color: 'black', textAlign: 'right'}}>{date}</Text>
            </View>
        </View>
    </View>
  )
}

export default NotificationCard