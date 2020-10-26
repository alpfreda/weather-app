import {useState, useEffect, useReducer} from 'react'
import axios from 'axios'
import {weatherConstant} from './../constants/weather'
import {
  getBathCitiesUrl,
  getCityDetailOneCallUrl,
  getCityDetailUrl,
} from './../utils/weather-url-helper'

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case weatherConstant.WEATHER_FETCH_INIT:
      return {...state, isLoading: true, isError: false}

    case weatherConstant.WEATHER_BATCH_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        list: (action.payload && action.payload.list) || [],
      }

    case weatherConstant.WEATHER_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        weather: action.payload,
      }

    case weatherConstant.WEATHER_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error()
  }
}

const useWeatherBatchApi = (cities, initialData) => {
  const [url, setUrl] = useState(getBathCitiesUrl({cities}))

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    list: initialData,
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: weatherConstant.WEATHER_FETCH_INIT})
      try {
        const {data: res} = await axios(url)
        dispatch({
          type: weatherConstant.WEATHER_BATCH_FETCH_SUCCESS,
          payload: res,
        })
      } catch (error) {
        dispatch({type: weatherConstant.WEATHER_FETCH_FAILURE})
      }
    }
    fetchData()
  }, [url])

  return [state, setUrl]
}

const useWeatherApi = (city, initialData) => {
  const [url, setUrl] = useState(getCityDetailUrl({city}))

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    weather: initialData,
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: weatherConstant.WEATHER_FETCH_INIT})
      try {
        const {data: res} = await axios(url)
        const getDetailUrl = getCityDetailOneCallUrl(res.coord)
        const {data: detailRes} = await axios(getDetailUrl)
        dispatch({
          type: weatherConstant.WEATHER_FETCH_SUCCESS,
          payload: detailRes,
        })
      } catch (error) {
        dispatch({type: weatherConstant.WEATHER_FETCH_FAILURE})
      }
    }
    fetchData()
  }, [url])

  return [state, setUrl]
}

export {useWeatherBatchApi, useWeatherApi}
