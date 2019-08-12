import { Point } from '../redux/locations/types'
import axios from 'axios'

export class WeatherService {
  public static makeWeatherRequest({ latitude, longitude }: Point) {
    const key = '004e080b7d25e328f7d2f97c96c7d7ea'
    const url = `${this.baseUrl}/${key}/${latitude},${longitude}?units=si`
    return axios.get(url)
  }
  private static baseUrl = `https://api.darksky.net/forecast`
}
