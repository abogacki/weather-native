import { createLocation } from './locationFactory'

import {
  LocationActionTypes,
  LocationsState,
  CREATE_LOCATION,
  UPDATE_LOCATION,
  REMOVE_LOCATION,
  LocationProps,
} from './types'

const initialState: LocationsState = {
  byId: {
    1: {
      id: 1,
      name: 'Poznań',
      point: {
        latitude: 52.04,
        longitude: 16.9333,
      },
    },
  },
  allLocationIds: ['1'],
}

export default function locationsReducer(
  state = initialState,
  action: LocationActionTypes
): LocationsState {
  switch (action.type) {
    case CREATE_LOCATION:
      const newLocation = createLocation(action.payload)
      return {
        byId: { ...state.byId, [newLocation.id.toString()]: newLocation },
        allLocationIds: [...state.allLocationIds, newLocation.id.toString()],
      }
    case UPDATE_LOCATION:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id.toString()]: {
            ...action.payload,
            id: parseInt(action.payload.id, 10),
          },
        },
      }
    case REMOVE_LOCATION:
      const newById = Object.keys(state.byId).reduce((all: any, locId) => {
        if (locId.toString() !== action.id.toString()) {
          all[locId.toString()] = state.byId[locId]
        }
        return all
      }, {})
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
  return { type: CREATE_LOCATION, payload: data }
}

export * from './selectors'
