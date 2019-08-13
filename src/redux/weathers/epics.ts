import { ActionTypes } from './../actionTypes'
import { WeatherService } from '../../services/WeatherService'
import { FETCH_WEATHER_REQUEST, FetchWeatherRequest } from './types'
import { updateWeather } from './actions'
import { ofType, Epic } from 'redux-observable'
import { map, switchMap } from 'rxjs/operators'
import { from } from 'rxjs'
import { AppState } from '../store'

export const fetchWeatherEpic: Epic<
  ActionTypes,
  ActionTypes,
  AppState
> = action$ =>
  action$.pipe(
    ofType<ActionTypes, FetchWeatherRequest>(FETCH_WEATHER_REQUEST),
    switchMap(action =>
      from(WeatherService.makeWeatherRequest(action.payload)).pipe(
        map(response => {
          return updateWeather({
            id: action.payload.id,
            currently: response.data.currently,
            daily: response.data.daily.data,
          })
        })
      )
    )
  )
