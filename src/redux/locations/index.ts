import { createLocation } from './locationFactory'

import {
  LocationActionTypes,
  LocationsState,
  CREATE_LOCATION,
  UPDATE_LOCATION,
  REMOVE_LOCATION,
} from './types'

const initialState: LocationsState = {
  byId: {
    '1': {
      id: 1,
      name: 'Poznan',
      point: { latitude: 170.323, longitude: 90.0 },
    },
    '2': {
      id: 2,
      name: 'Poznan',
      point: { latitude: 270.323, longitude: 90.0 },
    },
    '3': {
      id: 3,
      name: 'Poznan',
      point: { latitude: 370.323, longitude: 90.0 },
    },
    '4': {
      id: 4,
      name: 'Poznan',
      point: { latitude: 470.323, longitude: 90.0 },
    },
    '5': {
      id: 5,
      name: 'Poznan',
      point: { latitude: 570.323, longitude: 90.0 },
    },
  },
  allLocationIds: ['1', '2', '3', '4', '5'],
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
