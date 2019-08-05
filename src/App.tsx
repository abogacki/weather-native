/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-native-elements'
import store from './redux/store'
import Navigation from './Navigation'
import theme from './Theme'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  )
}

export default App
