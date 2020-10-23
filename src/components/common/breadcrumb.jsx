import React from 'react'
import { NavLink } from 'react-router-dom'

const BreadcrumbItem = ({ children, to, current, ...props }) => (
  <div {...props}>
    {
      current ? <div>{children}</div> : <NavLink to={to}>{children}</NavLink>
    }
  </div>
)

const Breadcrumb = ({ children }) => (
  <nav aria-label="Breadcrumb">
    <div>{children}</div>
  </nav>
)


export { Breadcrumb, BreadcrumbItem }
