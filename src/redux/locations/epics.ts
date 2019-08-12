import { WeatherActionTypes } from './../weathers/types'
import { LocationActionTypes, AddLocation, ADD_LOCATION } from './types'
import { ofType, Epic } from 'redux-observable'
import { map } from 'rxjs/operators'
import { AppState } from '../store'
import { addWeather } from '../weathers'

// create location, than create weather, than assign weather to this location?
// or create create weather, than assign weather to new location?

// UNCOMMENT THIS
export const addLocationWithWeather: Epic<
  LocationActionTypes | WeatherActionTypes,
  LocationActionTypes | WeatherActionTypes,
  AppState
> = (action$, state$) =>
  action$.pipe(
    ofType<LocationActionTypes | WeatherActionTypes, AddLocation>(ADD_LOCATION),
    map(action => {
      const locationId = state$.value.locations.allLocationIds.slice(-1)[0]
      return addWeather(locationId)
    })
  )
