import React from 'react'
import Detail from '../../components/weather/detail'
import WeatherBreadcrumb from '../../components/weather/breadcrumb'

const Index = ({ match }) => {
  const city = match.params.city || null

  return <>
    <WeatherBreadcrumb city={city} />
    <Detail city={city} />
  </>
}

export default Index
