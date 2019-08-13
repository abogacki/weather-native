const openCageDataApiKey = '3117f484e30440678b3e5da0e6c238e9'
const darkSkyApiKey = '004e080b7d25e328f7d2f97c96c7d7ea'

export const getKeys = () => {
  return {
    openCageData: openCageDataApiKey,
    darkSky: darkSkyApiKey,
  }
}

export const getUserSettings = () => {
  return {
    units: 'si',
  }
}
