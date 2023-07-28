import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import authReducer from "./Auth";
import HeaderReducer from "./Header/HeaderSwitch";

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    blacklist: ['header']
}

const reducers = combineReducers({
    auth: authReducer,
    header: HeaderReducer
})

const persistedReducer = persistReducer(persistConfig , reducers)

const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
})

export default Store