import React, { Fragment } from 'react'
import { AppState } from '../redux/store'
import { connect } from 'react-redux'
import { Location } from '../redux/locations/types'
import { withTheme } from 'react-native-elements'
import LocationsForm from './LocationsForm'
import { ScrollView } from 'react-native-gesture-handler'
import { compose } from 'redux'
import { ModifiedTheme } from '../Theme'
import ListItemTouchableScale from './shared/ListItemTouchableScale'

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
    <Fragment>
      <LocationsForm />
      <ScrollView style={theme.Container}>
        {locations.map(location => (
          <ListItemTouchableScale
            containerStyle={{ marginBottom: 10 }}
            key={location.id}
            title={location.name}
            subtitle={`${location.point.latitude},${location.point.longitude}`}
            chevron
            leftIcon={{
              name: 'map',
            }}
            onPress={() =>
              navigation.navigate('Weather', {
                id: location.id,
                name: location.name,
              })
            }
          />
        ))}
      </ScrollView>
    </Fragment>
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