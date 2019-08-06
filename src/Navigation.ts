import { createStackNavigator, createAppContainer } from 'react-navigation'
import LocationsScreen from './components/LocationsScreen'
import WeatherScreen from './components/WeatherScreen'

const MainNavigator = createStackNavigator(
  {
    Locations: { screen: LocationsScreen },
    Weather: { screen: WeatherScreen },
  },
  {
    initialRouteName: 'Locations',
  }
)

const Navigation = createAppContainer(MainNavigator)

export default Navigation
