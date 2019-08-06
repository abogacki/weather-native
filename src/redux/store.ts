import { combineReducers, createStore } from 'redux'
import locations from './locations/index'
import weathers from './weathers/index'

const rootReducer = combineReducers({ locations, weathers })

export type AppState = ReturnType<typeof rootReducer>

const store: AppState = createStore(rootReducer)

export default store
