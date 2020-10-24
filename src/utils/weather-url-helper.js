export const getBathCitiesUrl = ({cities}) => {
  return `${process.env.WEATHER_API_BASE_URL}/${process.env.WEATHER_API_SEVERAL_CITIES.replace(
    '{cities}',
    cities,
  )}&appid=${process.env.WEATHER_API_KEY}&units=${process.env.WEATHER_API_TEMP_UNIT}`
}
