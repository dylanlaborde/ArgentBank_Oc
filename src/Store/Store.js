import { configureStore } from "@reduxjs/toolkit"
import rootReducer from '../Reducers'
import { persistStore,persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage/session"

const persistConfig = {
    key: 'root', version: 1, storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          }
        }),
    devTools:true
})
export const persistor = persistStore(store)  
export default store