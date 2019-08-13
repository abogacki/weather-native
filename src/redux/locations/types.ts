export type Point = {
  latitude: number
  longitude: number
}

// export type LocationProps = {
//   name: string
//   point: Point
// }

export interface Location {
  id: number
  name: string
  point: Point
}

export type LocationProps = Pick<Location, 'name' | 'point'>

export type LocationsState = {
  byId: { [id: number]: Location }
  allLocationIds: number[]
}

export const ADD_LOCATION = 'ADD_LOCATION'
export const CREATE_LOCATION = 'CREATE_LOCATION'
export const REMOVE_LOCATION = 'REMOVE_LOCATION'
export const UPDATE_LOCATION = 'UPDATE_LOCATION'

export type AddLocation = {
  type: typeof ADD_LOCATION
  payload: LocationProps
}

export type CreateLocation = {
  type: typeof CREATE_LOCATION
  payload: LocationProps
}

export type RemoveLocation = {
  type: typeof REMOVE_LOCATION
  payload: Pick<Location, 'id'>
}

export type UpdateLocation = {
  type: typeof UPDATE_LOCATION
  payload: Partial<Location>
}

export type LocationActionTypes =
  | AddLocation
  | CreateLocation
  | RemoveLocation
  | UpdateLocation
