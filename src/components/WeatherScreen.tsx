import React from 'react'
import { Dispatch } from 'redux'
import { ScrollView, Text } from 'react-native'
import { AppState } from '../redux/store'
import { connect } from 'react-redux'
import { Location } from '../redux/locations/types'
import find from 'lodash/find'
import { createSelector } from 'reselect'
import { Weather, WeatherActionTypes } from '../redux/weathers/types'
import { bindActionCreators } from 'redux'
import { addWeather } from '../redux/weathers'
import { Card } from 'react-native-elements'

type WeatherScreenProps = {
  location: Location
  weather: Weather | undefined | any
  addWeather(locationId: number): WeatherActionTypes
}

type NavigationProps = {
  navigation: {
    getParam(id: string): string
  }
}

class WeatherScreen extends React.Component<
  WeatherScreenProps & NavigationProps
> {
  public static navigationOptions = {
    title: 'Weather',
  }

  public async componentDidMount() {
    if (!this.props.weather) {
      await this.props.addWeather(this.props.location.id)
    }
  }

  public render() {
    return (
      <ScrollView>
        <Card title="Location">
          <Text>{this.props.location.name}</Text>
          <Text>latitude:{this.props.location.point.latitude.toString()}</Text>
          <Text>
            longitude:{this.props.location.point.longitude.toString()}
          </Text>
        </Card>
        <Card title="Weather">
          <Text>Summary:</Text>
          <Text>Temperature:</Text>
          <Text>Wind:</Text>
          <Text>UV index:</Text>
        </Card>
        <Card title="Forecast">
          <Text>MON</Text>
          <Text>TUE</Text>
          <Text>WED</Text>
          <Text>THU</Text>
          <Text>FRI</Text>
          <Text>SAT</Text>
          <Text>SUN</Text>
        </Card>
      </ScrollView>
    )
  }
}

const getLocationId = (state: AppState, props: NavigationProps) =>
  parseInt(props.navigation.getParam('id'), 10)

const getLocationById = (state: AppState, props: NavigationProps) => {
  return state.locations.byId[parseInt(props.navigation.getParam('id'), 10)]
}

const getAllWeatherIds = (state: AppState) => {
  return state.weathers.allWeathersIds
}

const getAllWeatherByIds = (state: AppState) => {
  return state.weathers.byId
}

const getAllWeathers = createSelector(
  [getAllWeatherByIds, getAllWeatherIds],
  (byId, ids) => {
    return ids.map(id => byId[id])
  }
)

const getWeatherByLocationId = createSelector(
  [getLocationId, getAllWeathers],
  (locationId, allWeathersCollection) => {
    console.log(allWeathersCollection)

    const res = find(allWeathersCollection, { locationId })
    return res
  }
)

const mapStateToProps = (state: AppState, props: NavigationProps) => ({
  location: getLocationById(state, props),
  weather: getWeatherByLocationId(state, props),
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ addWeather }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherScreen)
