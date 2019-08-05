export type Weather = {
  id: number
  location: number
  currently: Currently
  daily: Daily
}

export type Currently = {
  time: number
  summary: string
  icon: string
  nearestStormDistance: number
  temperature: string
  apparentTemperature: string
  humidity: string
  pressure: string
  windSpeed: string
  windGust: string
  windBearing: string
  cloudCover: string
  uvIndex: string
  visibility: string
  ozone: string
}

export type Daily = {
  data: Day[]
}

export type Day = {
  time: number
  summary: string
  icon: string
  temperatureHigh: number
  temperatureLow: number
  apparentTemperatureHigh: number
  apparentTemperatureLow: number
  humidity: number
  pressure: number
  windSpeed: number
  windGust: number
  windGustTime: number
  windBearing: number
  cloudCover: number
  uvIndex: number
  visibility: number
  ozone: number
  temperatureMin: number
  temperatureMax: number
  apparentTemperatureMin: number
  apparentTemperatureMax: number
}

export type Point = {
  latitude: number
  longitude: number
}

export type WeatherState = {
  byId: { [id: string]: Weather }
  allLocationIds: string[]
}

export const CREATE_LOCATION = 'CREATE_LOCATION'
export const REMOVE_LOCATION = 'REMOVE_LOCATION'
export const UPDATE_LOCATION = 'UPDATE_LOCATION'

type CreateLocation = {
  type: typeof CREATE_LOCATION
  payload: {
    name: string
    point: Point
  }
}

type RemoveLocation = {
  type: typeof REMOVE_LOCATION
  id: string
}

type UpdateLocation = {
  type: typeof UPDATE_LOCATION
  payload: {
    id: string
    name: string
    point: Point
  }
}

export type LocationActionTypes =
  | CreateLocation
  | RemoveLocation
  | UpdateLocation
