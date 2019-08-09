import React from 'react'
import { SearchBar } from 'react-native-elements'

type LocationsFormSearchBarProps = {
  onChangeText: (search: string) => void
  value: string
  isLoading: boolean
}
const LocationsFormSearchBar = ({
  onChangeText,
  value,
  isLoading,
}: LocationsFormSearchBarProps) => {
  return (
    <SearchBar
      platform="ios"
      placeholder="Search locations"
      onChangeText={onChangeText}
      value={value}
      showLoading={isLoading}
    />
  )
}

export default LocationsFormSearchBar
