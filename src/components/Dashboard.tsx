import React, { Fragment, useState } from 'react'
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native'
import { AppState } from '../redux/store'
import { connect } from 'react-redux'
import { Location } from '../redux/locations/types'
import { ListItem, SearchBar } from 'react-native-elements'

type Props = {
  locations: Location[]
  navigation: any
}

const Dashboard = ({ locations, navigation }: Props) => {
  const [searchBarValue, setSearchBarValue] = useState('')
  const onSearch = (search: string) => {
    setSearchBarValue(search)
  }
  return (
    <Fragment>
      <View>
        <SearchBar
          placeholder="Search locations"
          value={searchBarValue}
          onChangeText={onSearch}
        />
      </View>
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
            onPress={() =>
              navigation.navigate('Location', {
                id: location.id,
                name: location.name,
              })
            }
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
