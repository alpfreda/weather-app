import React from 'react'
import { useWeatherApi } from '../../services/weather'
import Loader from '../common/loader'
import Info from './info'
import Daily from './daily'
import Hourly from './hourly'

const Detail = ({ city }) => {
  const [{ weather, isLoading, isError }] = useWeatherApi(city, null)

  return <>
    {isError && <div>Something went wrong ...</div>}
    {isLoading ? <Loader /> :
      <>
        {
          weather && <div className='weather'>
            <div className='weather-detail'>
              <Info weather={weather}/>
              <div className='weather-detail-days'>
                {
                  weather.daily.slice(1, 6).map(day => <Daily key={day.dt} day={day} />)
                }
              </div>
            </div>
            <div className='weather-detail-body'>
              <div className='weather-detail-body-title'>Hourly Report</div>
              <div className='weather-detail-body-items'>
                {
                  weather.hourly.map(hour => <Hourly key={hour.dt} hour={hour} />)
                }
              </div>
            </div>
          </div>
        }
      </>
    }
  </>
}

export default Detail