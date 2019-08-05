export type Location = {
  id: number
  name: string
  point: Point
}

export type Point = {
  latitude: number
  longitude: number
}

export type LocationsState = {
  byId: { [id: number]: Point }
  allIds: number[]
}

const CREATE_LOCATION = 'CREATE_LOCATIOn'
const REMOVE_LOCATION = 'REMOVE_LOCATION'
const UPDATE_LOCATION = 'UPDATE_LOCATION'

type CreateLocation = {
  type: typeof CREATE_LOCATION
  payload: {
    name: string
    point: Point
  }
}

type RemoveLocation = {
  type: typeof REMOVE_LOCATION
  id: number
}

type UpdateLocation = {
  type: typeof UPDATE_LOCATION
  payload: {
    id: number
    name: string
    point: Point
  }
}

export type LocationActionTypes =
  | CreateLocation
  | RemoveLocation
  | UpdateLocation
