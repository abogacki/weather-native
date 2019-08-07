import { Weather } from './types'

let id = 0

export const createWeather = (locationId: number): Weather => {
  return {
    id: id++,
    locationId,
    currently: {
      temperature: 0,
      apparentTemperature: 0,
      cloudCover: 0,
      windBearing: 0,
      windGust: 0,
      windSpeed: 0,
      time: new Date().getDate(),
      uvIndex: 0,
      ozone: 0,
      pressure: 0,
      summary: '',
      nearestStormDistance: 0,
      humidity: 0,
      visibility: 0,
      icon: '',
    },
    daily: [],
  }
}
