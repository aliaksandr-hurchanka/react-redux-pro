import React, { Component } from 'react'

const ServicePanel = ({id, text}) => (
    <div className="col-md-3 col-sm-6">
        <div className="panel panel-default text-center">
            <div className="panel-heading">
                <span className="fa-stack fa-5x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-car fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div className="panel-body">
                <h4>{ text }</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ID = { id }</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div>
    </div>
)

export default ServicePanel
