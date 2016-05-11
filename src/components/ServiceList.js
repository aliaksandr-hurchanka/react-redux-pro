import React, { PropTypes } from 'react'
import Service from './Service'

const ServiceList = ({ services }) => (
  <ul>
    {services.map(service =>
      <Service
        key={service.id}
        {...service}
      />
    )}
  </ul>
)

export default ServiceList
