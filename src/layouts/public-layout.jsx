import React from 'react'
import Routes from '../routes'
import Footer from '../components/common/footer'

const PublicLayout = () => {
  return <div className='container'>
    <Routes />
    <Footer/>
  </div>
}

export default PublicLayout
