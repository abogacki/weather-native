import React from 'react'
import TouchableScale from 'react-native-touchable-scale'
import { ListItem, ListItemProps } from 'react-native-elements'

const ListItemTouchableScale = (props: ListItemProps) => {
  return (
    <ListItem
      Component={TouchableScale}
      friction={90}
      tension={90}
      activeScale={0.95}
      {...props}
    />
  )
}

export default ListItemTouchableScale
