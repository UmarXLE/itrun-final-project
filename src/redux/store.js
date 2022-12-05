import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import newsReducer from './newsSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'reduxjs-toolkit-persist'
  import storage from 'reduxjs-toolkit-persist/lib/storage'

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedUserReducer = persistReducer(persistConfig, userReducer)


export const store = configureStore({
    reducer:{
        news : newsReducer,
        user: persistedUserReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ 
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)



// configureStore = должен получать в себя редюсоры `
