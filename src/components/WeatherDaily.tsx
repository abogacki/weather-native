import React from 'react'
import { DayForecast } from '../redux/weathers/types'
import { View, StyleSheet } from 'react-native'
import { Card, ListItem, Text } from 'react-native-elements'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
  forecastElement: {
    width: 50,
    height: 50,
  },
  forecastContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
})

type WeatherDailyProps = {
  daily: DayForecast[]
}

const WeatherDaily = ({ daily }: WeatherDailyProps) => {
  return (
    <Card title="Forecast">
      <View>
        {daily &&
          daily.length > 0 &&
          daily.map((day, index) => {
            return (
              <ListItem
                // subtitle={day.temperatureLow.toString()}
                title={new Date(day.time * 1000).toLocaleDateString()}
                subtitle={
                  <View
                    style={{
                      flex: 1,
                      width: 100,
                      flexDirection: 'row',
                      alignItems: 'space-between',
                    }}
                  >
                    <View>
                      <FontAwesome5Icon name="arrow-up" />
                      <Text>{day.temperatureHigh.toString() + '°'}</Text>
                    </View>
                    <View>
                      <FontAwesome5Icon name="arrow-down" />
                      <Text>{day.temperatureLow.toString() + '°'}</Text>
                    </View>
                  </View>
                }
                key={index}
              />
            )
          })}
      </View>
    </Card>
  )
}

export default WeatherDaily
