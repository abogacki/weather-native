import { combineReducers, createStore } from 'redux'
import locations from './locations/index'

const rootReducer = combineReducers({ locations })

export type AppState = ReturnType<typeof rootReducer>

const store: AppState = createStore(rootReducer)

export default store
