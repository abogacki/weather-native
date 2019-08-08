import {
  WeatherActionTypes,
  WeathersState,
  ADD_WEATHER,
  REMOVE_WEATHER,
  UPDATE_WEATHER,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_ERROR,
} from './types'

import { createWeather } from './weathersFactory'

const initialState: WeathersState = {
  byId: {},
  allWeathersIds: [],
  isLoading: false,
}

export default function weathersReducer(
  state = initialState,
  action: WeatherActionTypes
): WeathersState {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
      }
    case ADD_WEATHER:
      const newWeather = createWeather(action.locationId)
      return {
        ...state,
        byId: { ...state.byId, [newWeather.id]: newWeather },
        allWeathersIds: [...state.allWeathersIds, newWeather.id.toString()],
      }
    case REMOVE_WEATHER:
      return {
        ...state,
        ...Object.keys(state.byId).reduce(
          (all: WeathersState, key: string) => {
            if (parseInt(key, 10) === action.id) {
              all.byId[key] = state.byId[key]
              all.allWeathersIds = [...all.allWeathersIds, action.id.toString()]
            }
            return all
          },
          { byId: {}, allWeathersIds: [], isLoading: false }
        ),
      }
    case UPDATE_WEATHER:
      console.log(action.payload)
      console.log(state.byId[action.payload.id])

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: {
            ...state.byId[action.payload.id],
            ...action.payload,
          },
        },
      }
    default:
      return state
  }
}

// export actions
export * from './actions'
// export epics
export * from './epics'
