import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import { api } from './services/auth.api'
import { app, persistConfig } from './app'
import { practitionerApiRtk } from './api/practitionerApi'

export const appReducer = combineReducers({
  app: app.reducer,
  cardinalApi: api.reducer,
  practitionerApi: practitionerApiRtk.reducer,
})

export const persistedReducer = persistReducer(persistConfig, appReducer)

export type AppState = ReturnType<typeof appReducer>
