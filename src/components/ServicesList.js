import React, { Component } from 'react'
import ServicePanel from '../components/ServicePanel'

const ServiceList = ({ services }) => (
    <div className="row">
        <div className="col-lg-12">
            <h2 className="page-header">Services Panels</h2>
        </div>
        {
            services.map((service) => (
                <ServicePanel
                    id={ service.id }
                    text={service.text} />
            ))
        }
    </div>
)

export default ServiceList
