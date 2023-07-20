import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const MonthCarouselBar = ({ month, year, monthNumber , setMonthNumber }) => {
  return (
    <View style={{ alignSelf: 'stretch', height: 40 , justifyContent: 'center' , alignItems: 'center', flexDirection: 'row' , borderWidth: 1}}>
        <TouchableOpacity 
            style={{ marginHorizontal: 30 }}
            disabled={monthNumber == 0 ? true : false}
            onPress={()=> setMonthNumber(monthNumber-1)}
        >
            <Icon name='chevron-back-outline' size={22} color={'darkgray'} />
        </TouchableOpacity>
        <Text style={{ color: 'black', fontWeight: '400', fontSize: 18, letterSpacing: 0.5, minWidth: 100, textAlign: 'center' }}>
            {month} {year}
        </Text>
        <TouchableOpacity 
            style={{ marginHorizontal: 30 }} 
            onPress={()=> setMonthNumber(monthNumber+1)}
            disabled={monthNumber == 11 ? true : false}
        >
            <Icon name='chevron-forward-outline' size={22} color={'darkgray'} />
        </TouchableOpacity>
    </View>
  )
}

export default MonthCarouselBar