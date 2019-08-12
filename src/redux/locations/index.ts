import { createLocation } from './locationFactory'

import {
  LocationActionTypes,
  LocationsState,
  ADD_LOCATION,
  UPDATE_LOCATION,
  REMOVE_LOCATION,
  LocationProps,
  Location,
} from './types'

const initialState: LocationsState = {
  byId: {},
  allLocationIds: [],
}

export default function locationsReducer(
  state = initialState,
  action: LocationActionTypes
): LocationsState {
  switch (action.type) {
    case ADD_LOCATION:
      const newLocation = createLocation(action.payload)
      return {
        byId: { ...state.byId, [newLocation.id]: newLocation },
        allLocationIds: [...state.allLocationIds, newLocation.id],
      }
    case UPDATE_LOCATION:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id.toString()]: {
            ...state.byId[action.payload.id],
            ...action.payload,
          },
        },
      }
    case REMOVE_LOCATION:
      const newById = Object.keys(state.byId).reduce(
        (all: any, locId: string) => {
          if (locId.toString() !== action.id.toString()) {
            all[locId.toString()] = state.byId[parseInt(locId, 10)]
          }
          return all
        },
        {}
      )
      return {
        byId: newById,
        allLocationIds: state.allLocationIds.filter(
          locId => locId === action.id
        ),
      }
    default: {
      return state
    }
  }
}

export const addLocation = (data: LocationProps): LocationActionTypes => {
  return { type: ADD_LOCATION, payload: data }
}

export const updateLocation = (data: Location): LocationActionTypes => {
  return { type: UPDATE_LOCATION, payload: data }
}

export const removeLocation = (id: number): LocationActionTypes => {
  return { type: REMOVE_LOCATION, id }
}

export * from './selectors'
