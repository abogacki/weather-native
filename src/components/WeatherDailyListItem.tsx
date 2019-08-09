import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { DayForecast } from '../redux/weathers/types'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import moment from 'moment'
import { translateIcon } from '../services/IconService'
import ListItemTouchableScale from './shared/ListItemTouchableScale'

type ListItemProps = {
  day: DayForecast
}

const WeatherDailyListItem = ({ day }: ListItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  console.log(day)

  return (
    <ListItemTouchableScale
      chevron={{
        iconStyle: {
          transform: [{ rotate: isExpanded ? '90deg' : '0deg' }],
        },
      }}
      onPress={() => setIsExpanded(!isExpanded)}
      title={moment.unix(day.time * 1000).format('dddd')}
      titleStyle={styles.forecastTitle}
      leftAvatar={
        <FontAwesome5Icon
          style={styles.leftAvatarIcon}
          name={translateIcon(day.icon)}
        />
      }
      subtitle={
        <View>
          <View style={[styles.multilineRow, { marginTop: 10 }]}>
            <View style={{ margin: 0, justifyContent: 'flex-start' }}>
              <View style={styles.row}>
                <Text style={styles.forecastSubtitle}>temp </Text>
                <FontAwesome5Icon name="arrow-up" />
              </View>
              <Text>{day.temperatureHigh.toString()} °C</Text>
            </View>
            <View style={{ margin: 1, justifyContent: 'flex-start' }}>
              <View style={styles.row}>
                <Text style={styles.forecastSubtitle}>temp </Text>
                <FontAwesome5Icon name="arrow-down" />
              </View>
              <Text>{day.temperatureLow.toString()} °C</Text>
            </View>
          </View>
          {isExpanded && (
            <View style={[styles.row, styles.forecastDetails]}>
              <View style={[styles.column]}>
                <Text style={styles.forecastSubtitle}>cloud cover</Text>
                <Text> {day.cloudCover}</Text>
              </View>
              <View style={[styles.column]}>
                <Text style={styles.forecastSubtitle}>humidity</Text>
                <Text> {day.humidity * 100} %</Text>
              </View>
              <View style={[styles.column]}>
                <Text style={styles.forecastSubtitle}>Pressure</Text>
                <Text> {day.pressure} hPa</Text>
              </View>
            </View>
          )}
        </View>
      }
    />
  )
}

const styles = StyleSheet.create({
  forecastTitle: {
    fontWeight: '100',
    fontSize: 20,
  },
  forecastSubtitle: {
    fontWeight: '100',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.7,
  },
  forecastDetails: {},
  column: {
    marginTop: 10,
  },
  leftAvatarIcon: { fontSize: 35, alignSelf: 'center' },
  contentIcon: { fontSize: 20, fontWeight: '100' },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  multilineRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
})

export default WeatherDailyListItem
