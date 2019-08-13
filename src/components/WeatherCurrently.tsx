import React from 'react'
import { CurrentForecast } from '../redux/weathers/types'
import { Card, Text } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, View } from 'react-native'
import { translateIcon } from '../services/IconService'
import CardElement from './shared/CardElement'

type WeatherCurrentlyProps = {
  locationName: string
  currently: CurrentForecast
}

const styles = StyleSheet.create({
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
    <Card title={`Today in ${locationName.split(' ')[0]} is...`}>
      <CardElement>
        <FontAwesome5
          style={{ ...styles.cardIcon }}
          name={translateIcon(currently.icon) || 'accusoft'}
        />
      </CardElement>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <CardElement title="Temp" subtitle={currently.temperature.toString()} />
        <CardElement title="Wind" subtitle={currently.windSpeed.toString()} />
        <CardElement title="UV index" subtitle={currently.uvIndex.toString()} />
      </View>
    </Card>
  )
}

export default WeatherCurrently
