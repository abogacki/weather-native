import { ActionTypes } from './../actionTypes'
import { AddLocation, ADD_LOCATION } from './types'
import { ofType, Epic } from 'redux-observable'
import { map } from 'rxjs/operators'
import { AppState } from '../store'
import { addWeather } from '../weathers'

export const addLocationWithWeather: Epic<
  ActionTypes,
  ActionTypes,
  AppState
> = (action$, state$) =>
  action$.pipe(
    ofType<ActionTypes, AddLocation>(ADD_LOCATION),
    map(action => {
      // get latest created location id
      const locationId = state$.value.locations.allLocationIds.slice(-1)[0]

      // add weather to store with locationId
      return addWeather(locationId)
    })
  )
