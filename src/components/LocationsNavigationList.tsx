import React from 'react'
import { ScrollView } from 'react-native'
import { ModifiedTheme } from '../Theme'
import ListItemTouchableScale from './shared/ListItemTouchableScale'
import { NavigationParams } from 'react-navigation'
import { Location } from '../redux/locations/types'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

type LocationsNavigationListProps = {
  locations: Location[]
  theme: ModifiedTheme
  navigation: NavigationParams
}

const LocationsNavigationList = ({
  locations,
  theme,
  navigation,
}: LocationsNavigationListProps) => {
  return (
    <ScrollView style={theme.Container}>
      {locations.map(location => (
        <ListItemTouchableScale
          containerStyle={{ marginBottom: 10 }}
          key={location.id}
          title={location.name}
          subtitle={`${location.point.latitude},${location.point.longitude}`}
          chevron
          leftIcon={<FontAwesome5Icon name="map-marked-alt" size={30} />}
          onPress={() =>
            navigation.navigate('Weather', {
              id: location.id,
              name: location.name,
            })
          }
        />
      ))}
    </ScrollView>
  )
}

export default LocationsNavigationList
