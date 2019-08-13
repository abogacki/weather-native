import { Point } from '../redux/locations/types'
import axios, { AxiosResponse } from 'axios'
import { getKeys, getUserSettings } from './UserService'
import { ApiResponse } from '../redux/weathers/ApiResponse'

export interface ServiceShape {
  getWeather(point: Point): Promise<AxiosResponse<ApiResponse>>
}

export class WeatherService implements ServiceShape {
  public getWeather(point: Point) {
    const key = getKeys().darkSky
    const params = getParams()
    const url = getApiUrl(key, point)
    return axios.get<ApiResponse>(url, { params })
  }
}

const getApiUrl = (key: string, { latitude, longitude }: Point) => {
  const baseURL = `https://api.darksky.net/forecast`
  return `${baseURL}/${key}/${latitude},${longitude}`
}

const getParams = () => {
  const units = getUserSettings().units
  return { units }
}
