import React from 'react'
import moment from 'moment'

const FavoriteCityDaily = ({ day }) => {
  return <>
    <div className='favorite-city-days-item'>
      <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
        alt={day.weather[0].description} className="favorite-city-days-item-img" />
      <div className='favorite-city-days-item-info'>
        <div className='favorite-city-days-item-info-name'>
          {
            new moment(day.dt * 1000).format('dddd')
          }
        </div>
        <div className='favorite-city-days-item-info-temp red'>
          {Math.round(day.temp.min)}<sup>°C</sup>
        </div>
        <div className='favorite-city-days-item-info-temp green'>
          {Math.round(day.temp.max)}<sup>°C</sup>
        </div>
      </div>
    </div>
  </>
}

export default FavoriteCityDaily