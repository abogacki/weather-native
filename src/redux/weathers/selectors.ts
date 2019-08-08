import { AppState } from '../store'
import { createSelector } from 'reselect'
import find from 'lodash/find'
import { getLocationId } from '../locations'

export const getAllWeatherIds = (state: AppState) => {
  return state.weathers.allWeathersIds
}

export const getAllWeatherByIds = (state: AppState) => {
  return state.weathers.byId
}

export const getAllWeathers = createSelector(
  [getAllWeatherByIds, getAllWeatherIds],
  (byId, ids) => {
    return ids.map(id => byId[id])
  }
)

export const getWeatherByLocationId = createSelector(
  [getLocationId, getAllWeathers],
  (locationId, allWeathersCollection) => {
    const res = find(allWeathersCollection, { locationId })
    return res
  }
)
