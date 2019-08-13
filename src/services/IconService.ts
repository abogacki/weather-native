const types = {
  cloudy: 'cloud',
  rain: 'cloud-rain',
  'clear-day': 'sun',
  'partly-cloudy-day': 'cloud-sun',
}

export type IconName = keyof typeof types

export const translateIcon = (icon: IconName) => {
  return types[icon] || 'compass'
}

// weather licons list based on font-awesome

// faSun,
// faMoon,
// faCloudSun,
// faCloudMoon,
// faCloud,
// faCloudRain,
// faCloudShowersHeavy,
// faSnowflake,
// faWind,
// faSmog,
