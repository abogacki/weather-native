import React from 'react'
import { Dispatch } from 'redux'
import { ScrollView, Text, View } from 'react-native'
import { AppState } from '../redux/store'
import { connect } from 'react-redux'
import { Location, Point } from '../redux/locations/types'
import find from 'lodash/find'
import { createSelector } from 'reselect'
import { Weather, WeatherActionTypes } from '../redux/weathers/types'
import { bindActionCreators } from 'redux'
import { addWeather, fetchWeatherRequest } from '../redux/weathers'
import { Card } from 'react-native-elements'

type WeatherScreenProps = {
  location: Location
  weather: Weather | undefined
  addWeather(locationId: number): WeatherActionTypes
  fetchWeatherRequest({
    id,
    point,
  }: {
    id: number
    point: Point
  }): WeatherActionTypes
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
    const { weather, location } = this.props
    console.log(weather)

    if (!weather) {
      console.log(location.id)
      await this.props.addWeather(location.id)
    }

    if (weather && location) {
      this.props.fetchWeatherRequest({
        id: weather.id,
        point: location.point,
      })
    }
  }

  public render() {
    const { weather, location } = this.props
    return (
      <ScrollView>
        <Card title="Location">
          <Text>{location.name}</Text>
          <Text>latitude:{location.point.latitude.toString()}</Text>
          <Text>longitude:{location.point.longitude.toString()}</Text>
        </Card>
        <Card title="Weather">
          <Text>
            Summary:
            {weather && weather.currently.summary}
          </Text>
          <Text>
            Temperature:
            {weather && weather.currently.temperature}
          </Text>
          <Text>
            Wind:
            {weather && weather.currently.windSpeed}
          </Text>
          <Text>
            UV index:
            {weather && weather.currently.uvIndex}
          </Text>
        </Card>
        <Card title="Forecast">
          <View>
            {weather &&
              weather.daily.length > 0 &&
              weather.daily.map((day, index) => {
                return (
                  <View key={index}>
                    <Text>
                      {new Date(day.time * 1000).toLocaleDateString()}
                    </Text>
                    <Text>{day.temperatureHigh}</Text>
                    <Text>{day.temperatureLow}</Text>
                  </View>
                )
              })}
          </View>
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
    const res = find(allWeathersCollection, { locationId })
    return res
  }
)

const mapStateToProps = (state: AppState, props: NavigationProps) => ({
  location: getLocationById(state, props),
  weather: getWeatherByLocationId(state, props),
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ addWeather, fetchWeatherRequest }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherScreen)
