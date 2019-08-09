import {
  Point,
  LocationActionTypes,
  CreateLocation,
  CREATE_LOCATION,
} from './types'
import { ofType, Epic } from 'redux-observable'
import { map, switchMap } from 'rxjs/operators'
import mockWeatherData from '../../mocks/mockApiResponse.json'
import { from } from 'rxjs'
import { AppState } from '../store'
import { sleep } from '../../services/LocationService'
import { updateWeather } from '../weathers'
import { createWeather } from '../weathers/weathersFactory'

// create location, than create weather, than assign weather to this location?
// or create create weather, than assign weather to new location?

// UNCOMMENT THIS
// export const addLocationWithWeather: Epic<
//   LocationActionTypes,
//   LocationActionTypes,
//   AppState
// > = action$ =>
//   action$.pipe(
//     ofType<LocationActionTypes, CreateLocation>(CREATE_LOCATION),
//     map(action => addLocation(action.payload)),
//     ofType<LocationActionTypes,
//     )
//   )

// // FIGURE OUT WHAT IS GOING ON HERE
// type ThenArg<T> = T extends Promise<infer U>
//   ? U
//   : T extends (...args: any[]) => Promise<infer U>
//   ? U
//   : T

// type ServerResponse = ThenArg<typeof mockWeatherData>

// export const mockWeatherRequest = async ({ latitude, longitude }: Point) => {
//   await sleep(1000)
//   return await mockWeatherData
// }
