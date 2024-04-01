import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducers'

const persistConfig = {
    key: 'persistedSlice',
    storage,
    whitelist: ['persistedSlice'],
}
const persistedSlice = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedSlice,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: true, serializableCheck: false
    }).concat(logger),
})

const persistor = persistStore(store as any)

export { store, persistor }
