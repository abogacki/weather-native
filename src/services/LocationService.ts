import { Subject, interval, Observer, BehaviorSubject } from 'rxjs'
import { createWeather } from '../redux/weathers/weathersFactory'
import { createLocation } from '../redux/locations/locationFactory'
import { Point, Location } from '../redux/locations/types'
import { debounceTime, switchMap, map } from 'rxjs/operators'
import apiResponse from '../mocks/mockApiResponse.json'

export default class LocationService {
  public static createNewLocationWithWeather(
    name: string,
    point: Point
  ): Location {
    const location = createLocation({ name, point })
    createWeather(location.id)
    return location
  }

  public static createFetchStream(inputStream: Subject<string>) {
    return inputStream.pipe(
      debounceTime(500),
      switchMap(searchString => mockApiRequest(searchString))
    )
  }
}

async function mockApiRequest(search: string) {
  await sleep()
  return apiResponse
}

function sleep(ms: number = 1000) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
