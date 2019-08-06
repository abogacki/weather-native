import React, { Fragment } from 'react'
import { View } from 'react-native'
import { AppState } from '../redux/store'
import { connect } from 'react-redux'
import { NavigationNavigator } from 'react-navigation'
import { Location } from '../redux/locations/types'
import { ListItem } from 'react-native-elements'

type NavigationProps = {
  navigation: NavigationNavigator
}

class WeatherScreen extends React.Component<NavigationProps & Location> {
  public static navigationOptions = {
    title: 'Weather',
  }

  public render() {
    return (
      <View>
        <ListItem title="Location Id" subtitle={this.props.id.toString()} />
        <ListItem title="Name" subtitle={this.props.name} />
        <ListItem
          title="Point"
          subtitle={`${this.props.point.latitude}, ${
            this.props.point.longitude
          }`}
        />
      </View>
    )
  }
}

const getLocationById = (state: AppState, id: number | string) => {
  return state.locations.byId[id]
}

const mapStateToProps = (state: AppState, ownProps: NavigationProps) => {
  const id = ownProps.navigation.getParam('id')
  return {
    ...getLocationById(state, id),
  }
}

export default connect(mapStateToProps)(WeatherScreen)
