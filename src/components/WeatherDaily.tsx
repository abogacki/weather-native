import React from 'react'
import { DayForecast } from '../redux/weathers/types'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import WeatherDailyListItem from './WeatherDailyListItem'

type WeatherDailyProps = {
  daily: DayForecast[]
}

const WeatherDaily = ({ daily }: WeatherDailyProps) => {
  return (
    <View style={{ marginBottom: 10, marginTop: 10 }}>
      <Text
        style={{
          flex: 1,
          alignSelf: 'center',
          fontWeight: '600',
          fontSize: 18,
          color: '#000',
        }}
      >
        Forecast
      </Text>
      <View style={{ padding: 15 }}>
        <View>
          {daily &&
            daily.length > 0 &&
            daily.map((day, index) => {
              return <WeatherDailyListItem key={index} day={day} />
            })}
        </View>
      </View>
    </View>
  )
}

export default WeatherDaily
