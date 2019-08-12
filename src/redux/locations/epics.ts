import { WeatherActionTypes } from './../weathers/types'
import { LocationActionTypes, AddLocation, ADD_LOCATION } from './types'
import { ofType, Epic } from 'redux-observable'
import { map, switchMap } from 'rxjs/operators'
import mockWeatherData from '../../mocks/mockApiResponse.json'
import { AppState } from '../store'
import { updateWeather, addWeather } from '../weathers'

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
      const locationId = parseInt(
        state$.value.locations.allLocationIds.slice(-1)[0],
        10
      )
      console.log(locationId)

      return addWeather(locationId)
    })
  )

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
