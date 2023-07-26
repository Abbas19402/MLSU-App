import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'native-base'

const DocumentDataDisplayComponent = ({ data }) => {
  return (
    <FlatList
        style={{ marginTop: 180 }}
        data={data}
        renderItem={({ item })=> {
            return <View style={{ alignSelf: 'stretch', flexDirection: 'column' }}>
                <View style={{ alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 25 }}>
                    <Text style={{ color: 'gray', fontWeight: '500', fontSize: 18 }}>{item.detailsTitle}</Text>
                </View>
                <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                    <FlatList 
                        style={{ marginBottom: 20 }}
                        data={Object.values(item.details)}
                        renderItem={({ item, index }) => {
                            return <View style={{ alignSelf: 'stretch' , paddingHorizontal: 20, paddingVertical: 10, flexDirection:'row', backgroundColor: 'lightblue'}}>
                                <View style={{ padding: 5, width: 150}}>
                                    <Text style={{ color: 'gray',  }}>Semester {index+1}</Text>
                                </View>
                                <View style={{ padding: 5, width: 200, justifyContent: 'center', alignSelf: 'stretch', alignItems: 'center'}}>
                                    <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Download</Text>
                                </View>
                            </View> 
                        }}
                    />
                </View>
            </View>
        }}
    />
  )
}

export default DocumentDataDisplayComponent