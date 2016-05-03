import React, { Component } from 'react'

export default class ServicePanel extends Component {
    render () {
        return ( <div className="col-md-3 col-sm-6">
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">
                            <span className="fa-stack fa-5x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-car fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                        <div className="panel-body">
                            <h4>Service Two</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
        )
    }
}
