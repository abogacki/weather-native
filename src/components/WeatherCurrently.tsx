import React from 'react'
import { CurrentForcast } from '../redux/weathers/types'
import { Card, Text } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet } from 'react-native'
import { translateIcon } from '../services/IconService'

type WeatherCurrentlyProps = {
  locationName: string
  currently: CurrentForcast
}

const styles = StyleSheet.create({
  cardElement: {
    textAlign: 'center',
    marginBottom: '5%',
  },
  cardIcon: {
    fontSize: 100,
    textAlign: 'center',
  },
})

const WeatherCurrently = ({
  locationName,
  currently,
}: WeatherCurrentlyProps) => {
  return (
    <Card
      title={`Today in ${locationName.split(' ')[0]} is...`}
      featuredSubtitle={currently.summary}
    >
      <Text style={styles.cardElement}>{currently.summary}</Text>
      <FontAwesome5
        style={{ ...styles.cardIcon, ...styles.cardElement }}
        name={translateIcon(currently.icon) || 'accusoft'}
      />

      <Text style={styles.cardElement}>
        Temperature:
        {currently.temperature}
      </Text>

      <Text style={styles.cardElement}>
        Wind:
        {currently.windSpeed}
      </Text>

      <Text style={styles.cardElement}>
        UV index:
        {currently.uvIndex}
      </Text>
    </Card>
  )
}

export default WeatherCurrently
