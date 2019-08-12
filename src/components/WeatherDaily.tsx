import React from 'react'
import { DayForecast } from '../redux/weathers/types'
import { View } from 'react-native'
import { Text, withTheme } from 'react-native-elements'
import WeatherDailyListItem from './WeatherDailyListItem'
import { ModifiedTheme } from '../Theme'

type WeatherDailyProps = {
  daily: DayForecast[]
  theme: ModifiedTheme
}

const WeatherDaily = withTheme(({ theme, daily }: WeatherDailyProps) => {
  return (
    <View style={{ marginVertical: 20 }}>
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
      <View style={{ ...theme.Container, marginVertical: 20 }}>
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
})

export default WeatherDaily
