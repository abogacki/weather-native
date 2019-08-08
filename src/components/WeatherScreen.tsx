import React, { Fragment } from 'react'
import { Dispatch } from 'redux'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { AppState } from '../redux/store'
import { connect } from 'react-redux'
import { Location, Point } from '../redux/locations/types'
import { Weather, WeatherActionTypes } from '../redux/weathers/types'
import { bindActionCreators } from 'redux'
import {
  addWeather,
  fetchWeatherRequest,
  getWeatherByLocationId,
} from '../redux/weathers'
import { getLocationById } from '../redux/locations'
import WeatherCurrently from './WeatherCurrently'
import WeatherDaily from './WeatherDaily'

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
    if (!weather) {
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
        {weather && (
          <Fragment>
            <WeatherCurrently
              locationName={location.name}
              currently={weather.currently}
            />
            <WeatherDaily daily={weather.daily} />
          </Fragment>
        )}
      </ScrollView>
    )
  }
}

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
