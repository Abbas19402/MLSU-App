import { Provider, useSelector } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

import Store from '../Redux/Store'
import { SafeAreaView, Platform, View } from 'react-native'

const Providers = ({ children }) => {
    const persistor = persistStore(Store)
    // const loginStatus = useSelector(state => state.auth.loginStatus)
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <Provider store={Store}>
                    <PersistGate persistor={persistor}>
                        {Platform.OS == 'ios' ? <SafeAreaView style={{ flex: 1 }}>
                            {children}
                        </SafeAreaView> : <View style={{ flex:1 }}>{children}</View>}
                    </PersistGate>
                </Provider>
            </NativeBaseProvider>
        </NavigationContainer>
    )
}

export default Providers