import { Theme, colors } from 'react-native-elements'
import { Platform } from 'react-native'

const theme: Theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
}

export default theme
