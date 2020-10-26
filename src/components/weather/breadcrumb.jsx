import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '../common/breadcrumb'

const WeatherBreadcrumb = ({city}) => (
    <Breadcrumb>
        <BreadcrumbItem to="/">Weather</BreadcrumbItem>
        <BreadcrumbItem current>{city}</BreadcrumbItem>
    </Breadcrumb>
)

export default WeatherBreadcrumb