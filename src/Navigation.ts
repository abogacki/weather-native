import { createStackNavigator, createAppContainer } from 'react-navigation'
import Dashboard from './components/Dashboard'
import Location from './components/Location'
import AppHeader from './components/AppHeader'

const MainNavigator = createStackNavigator(
  {
    Dashboard: { screen: Dashboard },
    Location: { screen: Location },
  },
  {
    initialRouteName: 'Dashboard',
  }
)

const Navigation = createAppContainer(MainNavigator)

export default Navigation
