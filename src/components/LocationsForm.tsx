import { Component } from 'react'
import { View } from 'react-native'
import React from 'react'
import { SearchBar, Text } from 'react-native-elements'
import debounce from 'lodash/debounce'
import { BehaviorSubject, Subject } from 'rxjs'
import LocationService from '../services/LocationService'

type State = {
  isLoading: boolean
  searchValue: string
  result: any
}

type Props = {}

export default class LocationsForm extends Component<Props, State> {
  public state: State = {
    isLoading: false,
    searchValue: '',
    result: {},
  }
  public input$!: BehaviorSubject<string>
  public fetch$: any

  constructor(props: Props) {
    super(props)

    this.input$ = new BehaviorSubject('')
  }

  public componentDidMount() {
    this.fetch$ = LocationService.createFetchStream(this.input$)
    this.fetch$.subscribe(result => {
      this.setState({ result })
    })
    this.input$.subscribe(search =>
      this.setState({ searchValue: search, result: {} })
    )
  }

  public componentWillUnmount() {
    this.input$.unsubscribe()
    this.fetch$.unsubscribe()
  }

  public render() {
    return (
      <View>
        <View>
          <Text>Result</Text>
          <Text>
            {this.state.result.latitude || 0},{this.state.result.longitude || 0}
          </Text>
        </View>
        <SearchBar
          placeholder="Search locations"
          onChangeText={search => {
            this.input$.next(search)
            this.setState({ searchValue: search })
          }}
          value={this.state.searchValue}
          showLoading={this.state.isLoading}
        />
      </View>
    )
  }
}

function sleep(ms: number = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
