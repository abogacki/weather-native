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
}

export const ADD_WEATHER = 'ADD_WEATHER'
export const REMOVE_WEATHER = 'REMOVE_WEATHER'
export const UPDATE_WEATHER = 'UPDATE_WEATHER'

type CreateWeather = {
  type: typeof ADD_WEATHER
  locationId: number
}

type RemoveWeather = {
  type: typeof REMOVE_WEATHER
  id: number
}

type UpdateWeather = {
  type: typeof UPDATE_WEATHER
  payload: {
    id: number
    currently: CurrentForcast
    daily: DayForecast[]
  }
}

export type WeatherActionTypes = CreateWeather | RemoveWeather | UpdateWeather
