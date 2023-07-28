import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'native-base'

const DocumentDataDisplayComponent = ({ data }) => {
  return (
    <FlatList
        style={{ paddingVertical: 20 }}
        data={data}
        renderItem={({ item, index })=> {
            return <View style={{ alignSelf: 'stretch', flexDirection: 'column', marginBottom: 10 }}>
                <View style={{ alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 25, marginBottom: 15 }}>
                    <Text style={{ color: 'darkblue', fontWeight: '400', fontSize: 17 }}>{item.documentTitle}</Text>
                </View>
                <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                    <FlatList 
                        style={{ marginBottom: 20 }}
                        data={Object.values(item.documents)}
                        renderItem={({ item, index }) => {
                            return <View style={{ alignSelf: 'stretch' , paddingHorizontal: 20, paddingVertical: 5, flexDirection:'row', backgroundColor: index%2 != 0? 'white' : '#e3e8f6'}}>
                                <View style={{ padding: 5, width: 150}}>
                                    <Text style={{ color: 'black'}}>{item.title}</Text>
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