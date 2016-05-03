import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import ServicePanel from '../components/ServicePanel'

class Services extends Component {
	constructor() {
		super()
	}

	render() {
		return ( <div>
				<Navigation />
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1 className="page-header">Services</h1>
							<ol className="breadcrumb">
								<li><a href="index.html">Home</a></li>
								<li className="active">Services</li>
							</ol>
						</div>
					</div>
					
					<div className="row">
						<div className="col-lg-12">
							<h2 className="page-header">Services Panels</h2>
						</div>

						<ServicePanel />
						<ServicePanel />
						<ServicePanel />
						<ServicePanel />
						
					</div>
				</div>
			</div>
		)
	}
}

export default Services
