import { Point, Location } from './types'

let id = -1

export function createLocation({
  name,
  point,
}: {
  name: string
  point: Point
}): Location {
  return {
    id: id++,
    name,
    point,
  }
}
