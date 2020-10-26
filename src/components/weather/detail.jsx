import moment from 'moment'
import React, { useMemo } from 'react'
import { useWeatherApi } from '../../services/weather'
import Loader from '../common/loader'

const Detail = ({ city }) => {
  const [{ weather, isLoading, isError }] = useWeatherApi(city, null)

  const defaultWeather = weather ? weather.current.weather[0] : null
  return <> 
    {isError && <div>Something went wrong ...</div>}
    {isLoading ? <Loader /> :
      <>
        {
          weather && <div className='weather'>
            <div className='weather-detail'>
              <div className='weather-detail-primary'>
                <img src={`http://openweathermap.org/img/wn/${defaultWeather.icon}@4x.png`}
                  alt={defaultWeather.description} className="weather-detail-primary-img" />
                <div className='weather-detail-primary-state'>{defaultWeather.description}</div>
              </div>
              <div className='weather-detail-info'>
                <div className='weather-detail-info-temp'>{Math.round(weather.current.temp)}<sup>°C</sup></div>
                <div className='weather-detail-info-temp'>{weather.current.wind_speed}</div>
                <div className='weather-detail-info-temp'>{weather.current.pressure}</div>
                <div className='weather-detail-info-temp'>{weather.current.humidity}</div>
              </div>
              <div className='weather-detail-days'>
                {
                  weather.daily.slice(1, 6).map(day => {
                    return <div key={day.dt} className='weather-detail-days-item'>
                      <div className='weather-detail-days-item-name'>
                        {
                          new moment(day.dt * 1000).format('dddd')
                        }
                      </div>
                      <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                        alt={day.weather[0].description} className="weather-detail-primary-img" />
                      {/* <div className='weather-detail-days-item-info'>
                        {day.temp.day}
                      </div> */}
                      <div className='weather-detail-days-item-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill='green' height="32" width="32" viewBox="0 0 31.999999 31.999996"><path d="m16.001 1029.4c-0.2706 0-0.50984 0.1016-0.70117 0.293l-2.9727 2.9687c-0.98171 0.9425 0.47156 2.3958 1.4141 1.4141l1.2598-1.252v9.5762c0 0.554 0.446 1 1 1s0.99883-0.446 0.99883-1v-9.5762l1.2598 1.252c0.9425 0.9817 2.3958-0.4716 1.4141-1.4141l-2.9727-2.9687c-0.19133-0.1914-0.42941-0.2971-0.70001-0.293z" transform="translate(0 -1020.4)" /></svg>
                        {Math.round(day.temp.min)}<sup>°C</sup>
                        <svg xmlns="http://www.w3.org/2000/svg" fill='red' height="32" width="32" viewBox="0 0 31.999999 31.999996"><path d="m15.999 1043.4c0.2706 0 0.50984-0.1016 0.70117-0.293l2.9727-2.9687c0.98171-0.9425-0.47156-2.3958-1.4141-1.4141l-1.2598 1.252v-9.5762c0-0.554-0.446-1-1-1s-0.99883 0.446-0.99883 1v9.5762l-1.2598-1.252c-0.9425-0.9817-2.3958 0.4716-1.4141 1.4141l2.9727 2.9687c0.19133 0.1914 0.42941 0.2971 0.70001 0.293z" transform="translate(0 -1020.4)" /></svg>
                        {Math.round(day.temp.max)}<sup>°C</sup>
                      </div>
                      <div className='weather-detail-days-item-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill='green' height="32" width="32" viewBox="0 0 31.999999 31.999996"><path d="m16.001 1029.4c-0.2706 0-0.50984 0.1016-0.70117 0.293l-2.9727 2.9687c-0.98171 0.9425 0.47156 2.3958 1.4141 1.4141l1.2598-1.252v9.5762c0 0.554 0.446 1 1 1s0.99883-0.446 0.99883-1v-9.5762l1.2598 1.252c0.9425 0.9817 2.3958-0.4716 1.4141-1.4141l-2.9727-2.9687c-0.19133-0.1914-0.42941-0.2971-0.70001-0.293z" transform="translate(0 -1020.4)" /></svg>
                        {Math.round(day.temp.day)}<sup>°C</sup>
                        <svg xmlns="http://www.w3.org/2000/svg" fill='red' height="32" width="32" viewBox="0 0 31.999999 31.999996"><path d="m15.999 1043.4c0.2706 0 0.50984-0.1016 0.70117-0.293l2.9727-2.9687c0.98171-0.9425-0.47156-2.3958-1.4141-1.4141l-1.2598 1.252v-9.5762c0-0.554-0.446-1-1-1s-0.99883 0.446-0.99883 1v9.5762l-1.2598-1.252c-0.9425-0.9817-2.3958 0.4716-1.4141 1.4141l2.9727 2.9687c0.19133 0.1914 0.42941 0.2971 0.70001 0.293z" transform="translate(0 -1020.4)" /></svg>
                        {Math.round(day.temp.night)}<sup>°C</sup>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
            <div className='weather-detail-body'>
              {
                weather.hourly.map(hour => {
                  return <div key={hour.dt} className='weather-detail-body-item'>
                    <div className='weather-detail-body-item-time'>
                      {
                        new moment(hour.dt * 1000).format('HH:MM')
                      }
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                      alt={defaultWeather.description} className="weather-detail-body-item-img" />
                    {/* <div className='weather-detail-body-content-item-name'>
                        {hour.weather[0].description}
                      </div> */}
                  </div>
                })
              }
            </div>
          </div>
        }
      </>
    }
  </>
}

export default Detail