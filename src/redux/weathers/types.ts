import { IconName } from '../../services/IconService'

export type Weather = {
  id: number
  locationId: number
  currently: CurrentForecast
  daily: DayForecast[]
}

export type Forecast = {
  time: number
  summary: string
  icon: IconName
  humidity: number
  pressure: number
  windSpeed: number
  windGust: number
  windBearing: number
  cloudCover: number
  uvIndex: number
  visibility: number
  ozone: number
  precipIntensity: number // ms
  precipProbability: number // * 100%
  dewPoint: number
}

export interface CurrentForecast extends Forecast {
  apparentTemperature: number // number specific - celcius or fahrenheit
  temperature: number // number specific - celcius or fahrenheit
  nearestStormDistance: number // meters
  nearestStormBearing: number // meters
}

export interface DayForecast extends Forecast {
  temperatureHigh: number
  temperatureLow: number
  apparentTemperatureHigh: number
  apparentTemperatureLow: number
  temperatureMin: number
  temperatureMax: number
  apparentTemperatureMin: number
  apparentTemperatureMax: number
  sunriseTime: number
  sunsetTime: number
  moonPhase: number
  precipIntensityMax: number
  precipIntensityMaxTime: number
  temperatureHighTime: number
  temperatureLowTime: number
  apparentTemperatureHighTime: number
  apparentTemperatureLowTime: number
  windGustTime: number
  uvIndexTime: number
  temperatureMinTime: number
  temperatureMaxTime: number
  apparentTemperatureMinTime: number
  apparentTemperatureMaxTime: number
}

export type WeathersState = {
  byId: { [id: string]: Weather }
  allWeathersIds: string[]
  isLoading: boolean
}

export const ADD_WEATHER = 'ADD_WEATHER'
export const REMOVE_WEATHER = 'REMOVE_WEATHER'
export const UPDATE_WEATHER = 'UPDATE_WEATHER'
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST'
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR'

export type CreateWeather = {
  type: typeof ADD_WEATHER
  locationId: number
}

export type RemoveWeather = {
  type: typeof REMOVE_WEATHER
  id: number
}

export type UpdateWeather = {
  type: typeof UPDATE_WEATHER
  payload: Omit<Weather, 'locationId'>
}

export type FetchWeatherRequest = {
  type: typeof FETCH_WEATHER_REQUEST
  payload: {
    latitude: number
    longitude: number
    id: number
  }
}

export type FetchWeatherError = {
  type: typeof FETCH_WEATHER_ERROR
  payload: {
    error: Error
    id?: number
  }
}

export type WeatherActionTypes =
  | CreateWeather
  | RemoveWeather
  | UpdateWeather
  | FetchWeatherRequest
  | FetchWeatherError
