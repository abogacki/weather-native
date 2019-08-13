import { Subject } from 'rxjs'
import { debounceTime, switchMap } from 'rxjs/operators'
import axios from 'axios'
import { getKeys } from '../services/UserService'

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
  const key = getKeys().openCageData

  const params = {
    q: locationName,
    key,
  }

  const url = getApiUrl()

  try {
    const response = await axios.get<ServerResponse>(url, { params })
    return response.data.results
  } catch (error) {
    throw error
  }
}

const getApiUrl = () => {
  const baseURL = `https://api.opencagedata.com/geocode/v1/json`
  return baseURL
}
