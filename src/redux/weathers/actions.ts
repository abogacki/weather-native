import {
  WeatherActionTypes,
  Weather,
  ADD_WEATHER,
  UPDATE_WEATHER,
  REMOVE_WEATHER,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_ERROR,
} from './types'
import { Point } from '../locations/types'

export const addWeather = (locationId: number): WeatherActionTypes => {
  return { type: ADD_WEATHER, locationId }
}

export const updateWeather = ({
  id,
  currently,
  daily,
}: Omit<Weather, 'locationId'>): WeatherActionTypes => {
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

type FetchActionParams = {
  point: Point
  id: number
}

export const fetchWeatherRequest = ({
  id,
  point: { latitude, longitude },
}: FetchActionParams): WeatherActionTypes => {
  return { type: FETCH_WEATHER_REQUEST, payload: { id, latitude, longitude } }
}

type FetchErrorActionParams = {
  id: number
  error: Error
}

export const fetchWeatherError = ({
  id,
  error,
}: FetchErrorActionParams): WeatherActionTypes => {
  return { type: FETCH_WEATHER_ERROR, payload: { id, error } }
}
