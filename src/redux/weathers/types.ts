export type Weather = {
  id: number
  locationId: number
  currently: CurrentForcast
  daily: DayForecast[]
}

export type Forecast = {
  time: number
  summary: string
  icon: string
  humidity: number
  pressure: number
  windSpeed: number
  windGust: number
  windBearing: number
  cloudCover: number
  uvIndex: number
  visibility: number
  ozone: number
}

export interface CurrentForcast extends Forecast {
  apparentTemperature: number // number specific - celcius or fahrenheit
  temperature: number // number specific - celcius or fahrenheit
  nearestStormDistance: number // specified nuber
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
  payload: {
    id: number
    currently: CurrentForcast
    daily: DayForecast[]
  }
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
  error: Error
}

export type WeatherActionTypes =
  | CreateWeather
  | RemoveWeather
  | UpdateWeather
  | FetchWeatherRequest
  | FetchWeatherError
