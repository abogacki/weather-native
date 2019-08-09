export type Point = {
  latitude: number
  longitude: number
}

export type LocationProps = {
  name: string
  point: Point
}

export interface Location extends LocationProps {
  id: number
  name: string
  point: Point
}

export type LocationsState = {
  byId: { [id: string]: Location }
  allLocationIds: string[]
}

export const CREATE_LOCATION = 'CREATE_LOCATION'
export const REMOVE_LOCATION = 'REMOVE_LOCATION'
export const UPDATE_LOCATION = 'UPDATE_LOCATION'

export type CreateLocation = {
  type: typeof CREATE_LOCATION
  payload: {
    name: string
    point: Point
  }
}

export type RemoveLocation = {
  type: typeof REMOVE_LOCATION
  id: string
}

export type UpdateLocation = {
  type: typeof UPDATE_LOCATION
  payload: {
    id: string
    name: string
    point: Point
  }
}

export type LocationActionTypes =
  | CreateLocation
  | RemoveLocation
  | UpdateLocation
