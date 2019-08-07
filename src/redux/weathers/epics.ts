import { Point } from './../locations/types'
import { FETCH_WEATHER_REQUEST, FetchWeatherRequest } from './types'
import { updateWeather } from './actions'
import { ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import { sleep } from '../../services/LocationService'
import mockWeatherData from '../../mocks/mockApiResponse.json'

export const fetchWeatherEpic = action$ =>
  action$.pipe(
    ofType(FETCH_WEATHER_REQUEST),
    switchMap(async (action: FetchWeatherRequest) => {
      const { latitude, longitude, id } = action.payload
      const { currently, daily } = await mockWeatherRequest({
        latitude,
        longitude,
      })
      updateWeather({ id, currently, daily: daily.data })
    })
  )

export const mockWeatherRequest = async ({ latitude, longitude }: Point) => {
  await sleep()
  return mockWeatherData
}
