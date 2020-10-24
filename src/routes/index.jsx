import React from "react";
import { Switch, Route } from "react-router-dom";
import WeatherList from '../views/weather-list/'
import Weather from '../views/weather/'
import NotFound from '../views/errors/not-found'

export default function Routes() {
  return <Switch>
    {
      routes.map(route => <Route {...route} />)
    }
  </Switch>
}

const routes = [
  {
    key: 'weather-list',
    path: '/',
    component: WeatherList,
    exact: true,
  },
  {
    key: 'weather-detail',
    path: '/weather/:city',
    component: Weather,
    exact: true,
  },
  {
    key: 'not-found',
    component: NotFound,
  }
]