import React from 'react'
import { NavLink } from 'react-router-dom'

const BreadcrumbItem = ({ children, to, current, ...props }) => (
  <div className='breadcrumb-item' {...props}>
    {
      current ? <span>{children}</span> : <NavLink to={to}>{children}</NavLink>
    }
  </div>
)

const Breadcrumb = ({ children }) => (
  <nav className='breadcrumb' aria-label="Breadcrumb">
    <div className='breadcrumb-inner'>{children}</div>
  </nav>
)


export { Breadcrumb, BreadcrumbItem }
