import React from 'react'
import Routes from '../routes'
import Footer from '../components/common/footer'
import FavoriteCity from './../components/common/favorite-city'

const PublicLayout = () => {
  return <div className='container'>
    <FavoriteCity />
    <Routes />
    <Footer />
  </div>
}

export default PublicLayout
