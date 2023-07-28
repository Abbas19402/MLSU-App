import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'native-base'

const ProfileDataDisplayComponent = ({ data }) => {
  return (
    <FlatList
        style={{ marginTop: 180 }}
        data={data}
        renderItem={({ item })=> {
            return <View style={{ alignSelf: 'stretch', flexDirection: 'column', marginBottom: 10 }}>
                <View style={{ alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 25, marginBottom: 15 }}>
                    <Text style={{ color: 'darkblue', fontWeight: '400', fontSize: 17 }}>{item.detailsTitle}</Text>
                </View>
                <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                    <FlatList 
                        style={{ marginBottom: 20 }}
                        data={Object.values(item.details)}
                        renderItem={({ item, index }) => {
                            return <View style={{ alignSelf: 'stretch' , paddingHorizontal: 20, paddingVertical: 5, flexDirection:'row', backgroundColor: index%2 != 0? 'white' : '#f0f3fa'}}>
                                <View style={{ padding: 5, width: 150}}>
                                    <Text style={{ color: 'gray',  }}>{item.keyTitle}</Text>
                                </View>
                                <View style={{ padding: 5, width: 200}}>
                                    <Text style={{ color: 'black',  }}>{item.value}</Text>
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

export default ProfileDataDisplayComponent