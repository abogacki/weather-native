/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import {
  Button,
  ThemeProvider,
  Theme,
  colors,
  Header,
} from 'react-native-elements'

const theme: Theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <View>
        <View style={styles.sectionContainer}>
          <Button title="Hey" />
        </View>
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
})

export default App
