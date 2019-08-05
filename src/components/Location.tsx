import React, { Fragment } from 'react'
import { View } from 'react-native'
import { AppState } from '../redux/store'
import { connect } from 'react-redux'
import { Text } from 'react-native'

class LocationScreen extends React.Component {
  public static navigationOptions = {
    title: 'Weather',
  }

  public render() {
    return (
      <View>
        <Text>Here goes implementantio</Text>
      </View>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  locations: state.locations.allLocationIds.map(id => state.locations.byId[id]),
})

export default connect(mapStateToProps)(LocationScreen)
