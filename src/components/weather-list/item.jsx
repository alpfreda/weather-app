import React from 'react'
import { NavLink } from 'react-router-dom'

const ListItem = ({ main, name, sys, weather, wind }) => {
  return <NavLink to={`/weather/${name}`} className='weather-list-item'>
    <div className="weather-list-item-header">
      <div className="weather-list-item-header-primary">
        <div className="weather-list-item-header-country">{sys.country}</div>
        <div className="weather-list-item-header-name">{name}</div>
        <div className="weather-list-item-header-temp">
          {Math.round(main.temp)}<sup>°C</sup>
        </div>
      </div>
      <div className="weather-list-item-header-info">
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description} className="weather-list-item-header-img" />
        <div className="weather-list-item-header-description">
          {weather[0].description}
        </div>
      </div>
    </div>
    <div className="weather-list-item-body">
      <div className='weather-list-item-body-item'>
        <svg xmlns="http://www.w3.org/2000/svg" fill='green' height="32" width="32" viewBox="0 0 31.999999 31.999996"><path d="m16.001 1029.4c-0.2706 0-0.50984 0.1016-0.70117 0.293l-2.9727 2.9687c-0.98171 0.9425 0.47156 2.3958 1.4141 1.4141l1.2598-1.252v9.5762c0 0.554 0.446 1 1 1s0.99883-0.446 0.99883-1v-9.5762l1.2598 1.252c0.9425 0.9817 2.3958-0.4716 1.4141-1.4141l-2.9727-2.9687c-0.19133-0.1914-0.42941-0.2971-0.70001-0.293z" transform="translate(0 -1020.4)" /></svg>
        <div className='weather-list-item-body-item-info'>
          <div className='weather-list-item-body-item-info-value'>
            {Math.round(main.temp_max)}<sup>°C</sup>
          </div>
          <div className='weather-list-item-body-item-info-name'>
            Max
          </div>
        </div>
      </div>
      <div className='weather-list-item-body-item'>
        <svg xmlns="http://www.w3.org/2000/svg" fill='red' height="32" width="32" viewBox="0 0 31.999999 31.999996"><path d="m15.999 1043.4c0.2706 0 0.50984-0.1016 0.70117-0.293l2.9727-2.9687c0.98171-0.9425-0.47156-2.3958-1.4141-1.4141l-1.2598 1.252v-9.5762c0-0.554-0.446-1-1-1s-0.99883 0.446-0.99883 1v9.5762l-1.2598-1.252c-0.9425-0.9817-2.3958 0.4716-1.4141 1.4141l2.9727 2.9687c0.19133 0.1914 0.42941 0.2971 0.70001 0.293z" transform="translate(0 -1020.4)" /></svg>
        <div className='weather-list-item-body-item-info'>
          <div className='weather-list-item-body-item-info-value'>
            {Math.round(main.temp_min)}<sup>°C</sup>
          </div>
          <div className='weather-list-item-body-item-info-name'>
            Min
          </div>
        </div>
      </div>
      <div className='weather-list-item-body-item'>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#555' height="32" width="32" viewBox="0 0 31.999999 31.999998"><path d="m24.608 1028.4c-0.94188-0.027-1.8841 0.3235-2.582 1.0215-0.98167 0.9425 0.47155 2.3957 1.4141 1.414 0.48348-0.4834 1.2184-0.5801 1.8106-0.2382 0.59214 0.3418 0.87618 1.027 0.69922 1.6875-0.17697 0.6604-0.76548 1.1113-1.4492 1.1113h-19.5c-0.55228 0-1 0.4477-1 1s0.44772 0.9999 1 1h19.5c1.5793 0 2.9721-1.0683 3.3809-2.5938 0.40875-1.5254-0.26316-3.1478-1.6309-3.9375-0.51289-0.2961-1.0774-0.4484-1.6426-0.4648zm-19.608 8.9995c-0.55228 0-1 0.4478-1 1 0 0.5523 0.44772 1 1 1h11.5c0.68374 0 1.2722 0.4509 1.4492 1.1114 0.17696 0.6604-0.10708 1.3456-0.69922 1.6875-0.59214 0.3418-1.3271 0.2452-1.8106-0.2383-0.94251-0.9817-2.3957 0.4715-1.4141 1.414 1.1167 1.1168 2.8569 1.3463 4.2246 0.5567 1.3677-0.7897 2.0396-2.412 1.6309-3.9375-0.40875-1.5254-1.8016-2.5938-3.3809-2.5938z" transform="translate(0 -1020.4)" /></svg>
        <div className='weather-list-item-body-item-info'>
          <div className='weather-list-item-body-item-info-value'>
            {wind.speed} mi/h
          </div>
          <div className='weather-list-item-body-item-info-name'>
            Wind
          </div>
        </div>
      </div>
      <div className='weather-list-item-body-item'>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#555' height="32" width="32" viewBox="0 0 31.999999 31.999998"><path d="m11 1028.4s-3 4.3432-3 6c0 1.6569 1.3432 3 3 3s3-1.3431 3-3c0-1.6568-3-6-3-6zm9.0371 1a1.0001 1.0001 0 0 0 -0.89648 0.4883l-7.9844 12.975a1.0001 1.0001 0 1 0 1.7031 1.0488l7.9844-12.975a1.0001 1.0001 0 0 0 -0.80664 -1.5371zm-9.0371 2s1 2.4477 1 3-0.44772 1-1 1c-0.55229 0-1-0.4477-1-1s1-3 1-3zm10 4s-3 4.3432-3 6c0 1.6569 1.3432 3 3 3s3-1.3431 3-3c0-1.6568-3-6-3-6zm0 3s1 2.4477 1 3-0.44772 1-1 1-1-0.4477-1-1 1-3 1-3z" transform="translate(0 -1020.4)" /></svg>
        <div className='weather-list-item-body-item-info'>
          <div className='weather-list-item-body-item-info-value'>
            {main.humidity}%
          </div>
          <div className='weather-list-item-body-item-info-name'>
            Humidity
          </div>
        </div>
      </div>
    </div>
  </NavLink>
}

export default ListItem