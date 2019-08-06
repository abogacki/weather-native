import {
  WeatherActionTypes,
  WeathersState,
  ADD_WEATHER,
  REMOVE_WEATHER,
  UPDATE_WEATHER,
  CurrentForcast,
  DayForecast,
} from './types'
import { createWeather } from './weathersFactory'

const initialState: WeathersState = {
  byId: {},
  allWeathersIds: [],
}

export default function weathersReducer(
  state = initialState,
  action: WeatherActionTypes
): WeathersState {
  switch (action.type) {
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
          { byId: {}, allWeathersIds: [] }
        ),
      }
    case UPDATE_WEATHER:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: { ...action.payload },
        },
      }
    default:
      return state
  }
}

export const addWeather = (locationId: number): WeatherActionTypes => {
  return { type: ADD_WEATHER, locationId }
}

export const updateWeather = ({
  id,
  currently,
  daily,
}: {
  id: number
  currently: CurrentForcast
  daily: DayForecast[]
}): WeatherActionTypes => {
  return {
    type: UPDATE_WEATHER,
    payload: {
      id,
      currently,
      daily,
    },
  }
}

export const removeWeather = (id: number): WeatherActionTypes => {
  return { type: REMOVE_WEATHER, id }
}
