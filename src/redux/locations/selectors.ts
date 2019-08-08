export const getLocationId = (state: AppState, props: NavigationProps) =>
  parseInt(props.navigation.getParam('id'), 10)

export const getLocationById = (state: AppState, props: NavigationProps) => {
  return state.locations.byId[parseInt(props.navigation.getParam('id'), 10)]
}
