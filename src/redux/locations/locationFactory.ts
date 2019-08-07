import { Location, LocationProps } from './types'

let id = 0

export function createLocation({ name, point }: LocationProps): Location {
  return {
    id: id++,
    name,
    point,
  }
}
