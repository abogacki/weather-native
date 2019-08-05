import React from 'react'
import { Header } from 'react-native-elements'
import { NavigationScreenProps } from 'react-navigation'

type Props = {
  navigation: NavigationScreenProps
}

const AppHeader = ({ navigation }: Props) => {
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  )
}

export default AppHeader
