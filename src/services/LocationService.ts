import { Subject } from 'rxjs'
import { createWeather } from '../redux/weathers/weathersFactory'
import { createLocation } from '../redux/locations/locationFactory'
import { Location, LocationProps } from '../redux/locations/types'
import { debounceTime, switchMap } from 'rxjs/operators'
import axios from 'axios'
import MockLocationApiResponse from '../mocks/mockLocationApiResponse.json'
export default class LocationService {
  public static createFetchStream(inputStream: Subject<string>) {
    return inputStream.pipe(
      debounceTime(500),
      switchMap(searchString => openGateApiRequest(searchString))
    )
  }
}

// location Api service?
export async function openGateApiRequest(locationName: string) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${locationName}&key=3117f484e30440678b3e5da0e6c238e9`

  interface ServerResponse {
    results: []
  }

  try {
    // const response = await axios.get<ServerResponse>(url)
    await sleep()
    const response = MockLocationApiResponse
    return response.results
  } catch (error) {
    throw error
  }
}

export function sleep(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, 200))
}
