import { Subject } from 'rxjs'
import { debounceTime, switchMap } from 'rxjs/operators'
import axios from 'axios'

export default class LocationService {
  public static createFetchStream(inputStream: Subject<string>) {
    return inputStream.pipe(
      debounceTime(500),
      switchMap(searchString => openGateApiRequest(searchString))
    )
  }
}

interface ServerResponse {
  results: []
}

// location Api service?
export async function openGateApiRequest(locationName: string) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${locationName}&key=3117f484e30440678b3e5da0e6c238e9`
  try {
    const response = await axios.get<ServerResponse>(url)
    // await sleep()
    // const response = MockLocationApiResponse
    return response.data.results
  } catch (error) {
    throw error
  }
}
