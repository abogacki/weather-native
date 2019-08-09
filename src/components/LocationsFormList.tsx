import { ScrollView } from 'react-native'
import { ModifiedTheme } from '../Theme'
import { LocationProps } from '../redux/locations/types'
import React from 'react'
import { withTheme } from 'react-native-elements'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import ListItemTouchableScale from './shared/ListItemTouchableScale'

type LocationsFormListProps = {
  theme: ModifiedTheme
  locations: object[]
  onSubmit: (data: LocationProps) => void
}

const LocationsFormList = ({
  theme,
  locations,
  onSubmit,
}: LocationsFormListProps) => {
  return (
    <ScrollView style={theme.Container}>
      {locations.map((l, i) => (
        <ListItemTouchableScale
          key={i}
          title={l.formatted}
          subtitle={`${l.geometry.lat}, ${l.geometry.lng}`}
          onPress={() =>
            onSubmit({
              name: l.formatted,
              point: {
                latitude: l.geometry.lat,
                longitude: l.geometry.lng,
              },
            })
          }
          rightIcon={
            <FontAwesome5Icon style={{ fontSize: 20 }} name="compass" />
          }
        />
      ))}
    </ScrollView>
  )
}

export default withTheme(LocationsFormList)
