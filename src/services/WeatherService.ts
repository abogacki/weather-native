import { Point } from '../redux/locations/types'
import axios from 'axios'
import { getKeys } from './UserService'

export class WeatherService {
  public static makeWeatherRequest(point: Point) {
    const key = getKeys().darkSky
    const params = {
      units: 'si',
    }
    const url = getApiUrl(key, point)
    return axios.get(url, { params })
  }
}

const getApiUrl = (key: string, { latitude, longitude }: Point) => {
  const baseURL = `https://api.darksky.net/forecast`
  return `${baseURL}/${key}/${latitude},${longitude}`
}
