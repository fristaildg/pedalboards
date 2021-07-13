import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import boardReducer from './redux/board'
import uiReducer from './redux/ui'
import pedalReducer from './redux/pedal'
import audioPlayerReducer from './redux/audioPlayer'

const rootReducer = combineReducers({
  board: boardReducer,
  ui: uiReducer,
  pedal: pedalReducer,
  audioPlayer: audioPlayerReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['audioPlayer'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export default store
