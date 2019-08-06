import React, { Fragment } from 'react'
import { View } from 'react-native'
import { AppState } from '../redux/store'
import { connect } from 'react-redux'
import { Location } from '../redux/locations/types'
import { ListItem } from 'react-native-elements'
import LocationsForm from './LocationsForm'

type LocationsScreenProps = {
  locations: Location[]
  navigation: any
}

const LocationsScreen = ({ locations, navigation }: LocationsScreenProps) => {
  return (
    <Fragment>
      <LocationsForm />
      <View>
        {locations.map(location => (
          <ListItem
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
      </View>
    </Fragment>
  )
}

LocationsScreen.navigationOptions = {
  title: 'Locations',
}

const mapStateToProps = (state: AppState) => ({
  locations: state.locations.allLocationIds.map(id => state.locations.byId[id]),
})

export default connect(mapStateToProps)(LocationsScreen)
