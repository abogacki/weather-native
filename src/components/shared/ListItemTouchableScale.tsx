import React from 'react'
import TouchableScale from 'react-native-touchable-scale'
import { ListItem, ListItemProps, withTheme } from 'react-native-elements'
import { ModifiedTheme } from '../../Theme'

type ListItemTouchableScaleTheme = {
  theme: ModifiedTheme
}

const ListItemTouchableScale = ({
  containerStyle,
  theme,
  ...props
}: ListItemProps & ListItemTouchableScaleTheme) => {
  return (
    <ListItem
      Component={TouchableScale}
      friction={90}
      tension={90}
      activeScale={0.95}
      {...props}
      containerStyle={theme.ListItemTouchableScale}
    />
  )
}

export default withTheme(ListItemTouchableScale)
