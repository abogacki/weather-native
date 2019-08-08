import React from 'react'
import { Dispatch } from 'redux'
import { ScrollView, Text, View } from 'react-native'
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
import { Card } from 'react-native-elements'
import { getLocationById } from '../redux/locations'

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
        <Card title={`Today in ${location.name.split(' ')[0]} is...`}>
          <Text>{weather && weather.currently.summary}</Text>
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
