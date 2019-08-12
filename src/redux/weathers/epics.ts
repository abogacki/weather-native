import { Point } from './../locations/types'
import {
  FETCH_WEATHER_REQUEST,
  FetchWeatherRequest,
  WeatherActionTypes,
} from './types'
import { updateWeather } from './actions'
import { ofType, Epic } from 'redux-observable'
import { map, switchMap } from 'rxjs/operators'
import mockWeatherData from '../../mocks/mockApiResponse.json'
import { from } from 'rxjs'
import { AppState } from '../store'
import sleep from '../../utils/sleep'

export const fetchWeatherEpic: Epic<
  WeatherActionTypes,
  WeatherActionTypes,
  AppState
> = action$ =>
  action$.pipe(
    ofType<WeatherActionTypes, FetchWeatherRequest>(FETCH_WEATHER_REQUEST),
    switchMap(action =>
      from(
        mockWeatherRequest({
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        })
      ).pipe(
        map((response: ServerResponse) =>
          updateWeather({
            id: action.payload.id,
            currently: response.currently,
            daily: response.daily.data,
          })
        )
      )
    )
  )

// figure out what is going on here
type ThenArg<T> = T extends Promise<infer U>
  ? U
  : T extends (...args: any[]) => Promise<infer U>
  ? U
  : T

type ServerResponse = ThenArg<typeof mockWeatherData>

export const mockWeatherRequest = async ({ latitude, longitude }: Point) => {
  await sleep(1000)
  return await mockWeatherData
}
