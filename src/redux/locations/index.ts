import { LocationActionTypes, LocationsState } from './types'

const initialState: LocationsState = {
  byId: {},
  allIds: [],
}

function locationsReducer(state = initialState, action: LocationActionTypes) {
  return state
}
