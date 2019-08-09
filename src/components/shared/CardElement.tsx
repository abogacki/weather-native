import React, { ReactNode } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  cardElement: {
    margin: 10,
  },
  cardElementTitle: {
    textAlign: 'center',
    fontWeight: '100',
    textTransform: 'uppercase',
    letterSpacing: 0.7,
    opacity: 0.7,
    fontSize: 12,
  },
  cardElementSubtitle: {
    textAlign: 'center',
  },
})

type CardElementProps = {
  title?: string
  subtitle?: string
  children?: ReactNode
}

const CardElement = ({
  title,
  subtitle,
  children,
  ...props
}: CardElementProps) => (
  <View {...props} styles={styles.cardElement}>
    {title && <Text style={styles.cardElementTitle}>{title}</Text>}
    {subtitle && <Text style={styles.cardElementSubtitle}>{subtitle}</Text>}
    {children}
  </View>
)

export default CardElement
