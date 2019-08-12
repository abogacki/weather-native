import {
  LocationProps,
  LocationActionTypes,
  ADD_LOCATION,
  Location,
  UPDATE_LOCATION,
  REMOVE_LOCATION,
} from './types'

export const addLocation = (data: LocationProps): LocationActionTypes => {
  return { type: ADD_LOCATION, payload: data }
}

export const updateLocation = (data: Location): LocationActionTypes => {
  return { type: UPDATE_LOCATION, payload: data }
}

export const removeLocation = (id: number): LocationActionTypes => {
  return { type: REMOVE_LOCATION, id }
}
