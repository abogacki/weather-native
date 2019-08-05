import React, { Fragment } from 'react'
import { View } from 'react-native'
import { AppState } from '../redux/store'
import { connect } from 'react-redux'
import { Location } from '../redux/locations/types'
import { Text } from 'react-native'
import { ListItem, Header } from 'react-native-elements'
import { NavigationAction } from 'react-navigation'

type Props = {
  locations: Location[]
  navigation: any
}

const Dashboard = ({ locations, navigation }: Props) => {
  return (
    <Fragment>
      <Text>Locations</Text>
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
            onPress={() => navigation.navigate('Location')}
          />
        ))}
      </View>
    </Fragment>
  )
}

Dashboard.navigationOptions = {
  title: 'Locations',
}

const mapStateToProps = (state: AppState) => ({
  locations: state.locations.allLocationIds.map(id => state.locations.byId[id]),
})

export default connect(mapStateToProps)(Dashboard)
