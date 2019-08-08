import {
  WeatherActionTypes,
  CurrentForcast,
  DayForecast,
  ADD_WEATHER,
  UPDATE_WEATHER,
  REMOVE_WEATHER,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_ERROR,
} from './types'
import { Location, Point } from '../locations/types'

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

export const fetchWeatherRequest = ({
  id,
  point: { latitude, longitude },
}: {
  id: number
  point: Point
}): WeatherActionTypes => {
  return { type: FETCH_WEATHER_REQUEST, payload: { id, latitude, longitude } }
}

export const fetchWeatherError = ({
  id,
  error,
}: {
  id: number
  error: Error
}): WeatherActionTypes => {
  return { type: FETCH_WEATHER_ERROR, id, error }
}
