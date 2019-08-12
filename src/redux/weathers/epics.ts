import { WeatherService } from '../../services/WeatherService'
import {
  FETCH_WEATHER_REQUEST,
  FetchWeatherRequest,
  WeatherActionTypes,
} from './types'
import { updateWeather } from './actions'
import { ofType, Epic } from 'redux-observable'
import { map, switchMap } from 'rxjs/operators'
import { from } from 'rxjs'
import { AppState } from '../store'

export const fetchWeatherEpic: Epic<
  WeatherActionTypes,
  WeatherActionTypes,
  AppState
> = action$ =>
  action$.pipe(
    ofType<WeatherActionTypes, FetchWeatherRequest>(FETCH_WEATHER_REQUEST),
    switchMap(action =>
      from(WeatherService.makeWeatherRequest(action.payload)).pipe(
        map(response =>
          updateWeather({
            id: action.payload.id,
            currently: response.data.currently,
            daily: response.data.daily.data,
          })
        )
      )
    )
  )
