import { createStackNavigator, createAppContainer } from 'react-navigation'
import Locations from './components/Locations'
import Weather from './components/Weather'

const MainNavigator = createStackNavigator(
  {
    Locations: { screen: Locations },
    Weather: { screen: Weather },
  },
  {
    initialRouteName: 'Locations',
  }
)

const Navigation = createAppContainer(MainNavigator)

export default Navigation
