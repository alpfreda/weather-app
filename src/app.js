import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import PublicLayout from './layouts/public-layout'
import Store from './store'
const App = () => {
  return (
    <Router>
      <Store>
        <PublicLayout />
      </Store>
    </Router>
  )
}

export default App
