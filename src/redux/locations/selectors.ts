import { AppState } from '../store'
import { NavigationParams } from 'react-navigation'

export const getLocationId = (state: AppState, props: NavigationParams) =>
  parseInt(props.navigation.getParam('id'), 10)

export const getAllById = (state: AppState) =>
  state.locations.allLocationIds.map(id => state.locations.byId[id])

export const getLocationById = (state: AppState, props: NavigationParams) => {
  return state.locations.byId[parseInt(props.navigation.getParam('id'), 10)]
}
