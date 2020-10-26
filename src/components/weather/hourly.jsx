import React from 'react'
import moment from 'moment'

const Hourly = ({ hour }) => {
  return <>
    <div key={hour.dt} className='weather-detail-body-item'>
      <div className='weather-detail-body-item-time'>
        {
          new moment(hour.dt * 1000).format('HH:MM')
        }
      </div>
      <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
        alt={hour.weather[0].description} className="weather-detail-body-item-img" />
    </div>
  </>
}

export default Hourly