import React, { useContext } from 'react'
import { Context } from '../../store'

const FavoriteCity = () => {
  const [state, dispatch] = useContext(Context)
  return state.weather && <div className='favorite-city'>
    {state.weather.country} {state.weather.city}
  </div>
}

export default FavoriteCity