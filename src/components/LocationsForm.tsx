import { Component } from 'react'
import { View } from 'react-native'
import React from 'react'
import { SearchBar, ListItem, Icon } from 'react-native-elements'
import { Subject } from 'rxjs'
import LocationService from '../services/LocationService'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { addLocation } from '../redux/locations'
import { LocationProps } from '../redux/locations/types'

type State = {
  isLoading: boolean
  searchValue: string
  locations: LocationResponseData[]
}

type LocationResponseData = {
  formatted: string
  geometry: {
    lng: number
    lat: number
  }
}

type Props = {
  addLocation(data: LocationProps): void
}

class LocationsForm extends Component<Props, State> {
  public state: State = {
    isLoading: false,
    searchValue: '',
    locations: [],
  }
  public input$!: Subject<string>
  public fetch$!: Subject<any>

  constructor(props: Props) {
    super(props)
    this.input$ = new Subject()
  }

  public componentDidMount() {
    this.fetch$ = LocationService.createFetchStream(this.input$)
    this.fetch$.subscribe((locations: []) => {
      this.setState({ locations })
    })

    this.input$.subscribe(
      search => search && this.setState({ searchValue: search, locations: [] })
    )
  }

  public componentWillUnmount() {
    this.input$.unsubscribe()
    this.fetch$.unsubscribe()
  }

  public submitLocation(data: LocationProps) {
    this.props.addLocation(data)
    this.setState({ locations: [], searchValue: '' })
  }

  public render() {
    return (
      <View>
        <SearchBar
          placeholder="Search locations"
          onChangeText={search => {
            this.input$.next(search)
            this.setState({ searchValue: search })
          }}
          value={this.state.searchValue}
          showLoading={this.state.isLoading}
        />
        <ScrollView>
          {this.state.locations.map((l, i) => (
            <ListItem
              key={i}
              title={l.formatted}
              subtitle={`${l.geometry.lat}, ${l.geometry.lng}`}
              onPress={() =>
                this.submitLocation({
                  name: l.formatted,
                  point: {
                    latitude: l.geometry.lat,
                    longitude: l.geometry.lng,
                  },
                })
              }
              rightIcon={<Icon name="add" />}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      addLocation,
    },
    dispatch
  )
}

export default connect(
  null,
  mapDispatchToProps
)(LocationsForm)
