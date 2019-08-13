import { ActionTypes } from './../actionTypes'
import { WeatherService, ServiceShape } from '../../services/WeatherService'
import { FETCH_WEATHER_REQUEST, FetchWeatherRequest } from './types'
import { updateWeather } from './actions'
import { ofType, Epic, ActionsObservable } from 'redux-observable'
import { map, switchMap } from 'rxjs/operators'
import { from } from 'rxjs'
import { AppState } from '../store'

export const makeFetchWeatherEpic = (apiService: ServiceShape) => (
  action$: ActionsObservable<ActionTypes>
) =>
  action$.pipe(
    ofType<ActionTypes, FetchWeatherRequest>(FETCH_WEATHER_REQUEST),
    switchMap(action =>
      from(apiService.getWeather(action.payload)).pipe(
        map(({ data }) => {
          const weather = {
            id: action.payload.id,
            currently: data.currently,
            daily: data.daily.data,
          }

          return updateWeather(weather)
        })
      )
    )
  )

export const fetchWeatherEpic: Epic<
  ActionTypes,
  ActionTypes,
  AppState
> = makeFetchWeatherEpic(new WeatherService())
