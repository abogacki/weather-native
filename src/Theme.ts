import { Theme, colors } from 'react-native-elements'
import { Platform } from 'react-native'

type CustomThemeElements = {
  Container: {}
  ListItemTouchableScale: {}
}

const theme: Theme<CustomThemeElements> = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
  Card: {
    containerStyle: {
      borderRadius: 6,
      borderWidth: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.1,
      shadowRadius: 12.3,

      elevation: 13,
    },
    dividerStyle: {
      display: 'none',
    },
  },
  ListItem: {
    containerStyle: {
      borderRadius: 6,
      borderWidth: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.1,
      shadowRadius: 12.3,

      elevation: 13,
    },
  },
  Container: {
    paddingHorizontal: 15,
  },
  ListItemTouchableScale: {
    marginBottom: 10,
  },
}

export type ModifiedTheme = typeof theme

export default theme
