const baseUrl = process.env.WEATHER_API_BASE_URL
const appId = process.env.WEATHER_API_KEY
const unit = process.env.WEATHER_API_TEMP_UNIT
const urlOptions = `&appid=${appId}&units=${unit}`

const getBathCitiesUrl = ({cities}) => {
  return `${baseUrl}/group?id=${cities}${urlOptions}`
}

const getCityDetailUrl = ({city}) => {
  return `${baseUrl}/weather?q=${city}${urlOptions}`
}

const getCityDetailOneCallUrl = ({lat, lon}) => {
  return `${baseUrl}/onecall?lat=${lat}&lon=${lon}${urlOptions}`
}

export {getBathCitiesUrl, getCityDetailUrl, getCityDetailOneCallUrl}
