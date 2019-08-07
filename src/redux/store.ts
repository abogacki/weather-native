import { combineReducers, createStore, applyMiddleware } from 'redux'
import locations from './locations/index'
import weathers, { fetchWeatherEpic } from './weathers/index'
import { createEpicMiddleware, combineEpics } from 'redux-observable'

const rootReducer = combineReducers({ locations, weathers })

const rootEpic = combineEpics(fetchWeatherEpic)

const epicMiddleware = createEpicMiddleware()

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

epicMiddleware.run(rootEpic)

export default store
