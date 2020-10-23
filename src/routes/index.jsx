import React from "react";
import { Switch, Route } from "react-router-dom";
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
    key: 'users',
    path: '/',
    component: Weather,
    exact: true,
  },
  {
    key: 'not-found',
    component: NotFound,
  }
]