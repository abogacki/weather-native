import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, ListItem } from 'react-native-elements'
import { DayForecast } from '../redux/weathers/types'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import moment from 'moment'
import { translateIcon } from '../services/IconService'

type ListItemProps = {
  day: DayForecast
}

const WeatherDailyListItem = ({ day }: ListItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <ListItem
      chevron={{
        iconStyle: {
          transform: [{ rotate: isExpanded ? '90deg' : '0deg' }],
        },
      }}
      leftAvatar={
        <FontAwesome5Icon
          style={styles.leftAvatarIcon}
          name={translateIcon(day.icon)}
        />
      }
      onPress={() => setIsExpanded(!isExpanded)}
      title={moment.unix(day.time * 1000).format('dddd')}
      titleStyle={styles.forecastTitle}
      subtitle={
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <View style={styles.row}>
              <FontAwesome5Icon name="arrow-up" />
              <Text style={styles.forecastSubtitle}>
                {day.temperatureHigh.toString()}
              </Text>
            </View>
            <View style={styles.row}>
              <FontAwesome5Icon name="arrow-down" />
              <Text style={styles.forecastSubtitle}>
                {day.temperatureLow.toString()}
              </Text>
            </View>
          </View>
          {isExpanded && (
            <View>
              <Text>Show only when expanded</Text>
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
  },
  leftAvatarIcon: { fontSize: 35, alignSelf: 'center' },
  contentIcon: { fontSize: 20, fontWeight: '100' },
  row: { flex: 1, flexDirection: 'row' },
})

export default WeatherDailyListItem
