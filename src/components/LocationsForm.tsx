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
import theme from '../Theme'
import LocationsFormSearchBar from './LocationsFormSearchBar'
import LocationsFormList from './LocationsFormList'

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

  public submitLocation = (data: LocationProps) => {
    this.props.addLocation(data)
    this.setState({ locations: [], searchValue: '' })
  }

  public onChangeText = (search: string) => {
    this.input$.next(search)
    this.setState({ searchValue: search })
  }

  public render() {
    return (
      <View>
        <LocationsFormSearchBar
          onChangeText={this.onChangeText}
          value={this.state.searchValue}
          isLoading={this.state.isLoading}
        />
        <LocationsFormList
          onSubmit={this.submitLocation}
          locations={this.state.locations}
        />
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
