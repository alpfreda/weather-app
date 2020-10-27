import React, { useContext } from 'react'
import { Context } from '../../store'

const Info = ({ weather }) => {
  const [state, dispatch] = useContext(Context)
  const defaultWeather = weather ? weather.current.weather[0] : null
  return <>
    <div className='weather-detail-primary'>
      <div className='weather-detail-primary-city'>
        <span className='weather-detail-primary-country'>{weather.country}</span>
        {weather.city}
      </div>
      <img src={`http://openweathermap.org/img/wn/${defaultWeather.icon}@4x.png`}
        alt={defaultWeather.description} className="weather-detail-primary-img" />
      <div className='weather-detail-primary-state'>{defaultWeather.description}</div>
    </div>
    <div className='weather-detail-info'>
      <div className='weather-detail-info-temp'>{Math.round(weather.current.temp)}<sup>°C</sup></div>
      <div className='weather-detail-info-other'><span>Wind</span>{weather.current.wind_speed}mi/h</div>
      <div className='weather-detail-info-other'><span>Pressure</span>{weather.current.pressure}%</div>
      <div className='weather-detail-info-other'><span>Humidity</span>{weather.current.humidity}%</div>
      <button className={`weather-detail-add-favorite ${state.weather && state.weather.city === weather.city ? 'selected' : ''}`} onClick={() => dispatch({ type: 'ADD_WEATHER', payload: weather })}>Add Favorite</button>
    </div>
  </>
}

export default Info