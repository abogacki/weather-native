import React from 'react'
import { Header } from 'react-native-elements'

type Props = any

const AppHeader = (props: Props) => {
  console.log(props)
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  )
}

export default AppHeader
