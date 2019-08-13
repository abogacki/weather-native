import React from 'react'
import { AppState } from '../redux/store'
import { connect } from 'react-redux'
import { Location } from '../redux/locations/types'
import { withTheme } from 'react-native-elements'
import LocationsForm from './LocationsForm'
import LocationsNavigationList from './LocationsNavigationList'
import { compose } from 'redux'
import { ModifiedTheme } from '../Theme'
import { View } from 'react-native'

type LocationsScreenProps = {
  locations: Location[]
  navigation: any // find correct react-navigation type
  theme: ModifiedTheme
}

const LocationsScreen = ({
  theme,
  locations,
  navigation,
}: LocationsScreenProps) => {
  return (
    <View>
      <LocationsForm />
      <LocationsNavigationList
        locations={locations}
        navigation={navigation}
        theme={theme}
      />
    </View>
  )
}

LocationsScreen.navigationOptions = {
  title: 'Locations',
}

const mapStateToProps = (state: AppState) => ({
  locations: state.locations.allLocationIds.map(id => state.locations.byId[id]),
})

export default compose(
  withTheme,
  connect(mapStateToProps)
)(LocationsScreen)
