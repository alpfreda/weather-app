import React, { useContext } from 'react'
import { Context } from '../../store'
import FavoriteCityDaily from './favorite-city-daily'
import { weatherConstant } from '../../constants/weather'

const FavoriteCity = () => {
  const [state, dispatch] = useContext(Context)
  return state.weather && <div className='favorite-city'>
    <div className='favorite-city-primary-img-box'>
      <div className='favorite-city-remove' onClick={() => dispatch({ type: weatherConstant.REMOVE_WEATHER})}>
      ×
      </div>
      <img src={`http://openweathermap.org/img/wn/${state.weather.current.weather[0].icon}.png`}
        alt={state.weather.current.weather[0].description} className="favorite-city-primary-img" />
    </div>
    <div className='favorite-city-primary'>
      <div className='favorite-city-primary-name'>
        <div className='favorite-city-primary-country'>{state.weather.country}</div>{state.weather.city}
      </div>
      <div className='favorite-city-primary-temp'>{Math.round(state.weather.current.temp)}<sup>°C</sup></div>
    </div>
    <div className='favorite-city-days'>
      {
        state.weather.daily.slice(1, 6).map(day => <FavoriteCityDaily key={day.dt} day={day} />)
      }
    </div>
  </div>
}

export default FavoriteCity