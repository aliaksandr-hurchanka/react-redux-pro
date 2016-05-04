import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import ServicesDisplay from '../components/ServicesDisplay'

class ServicePage extends Component {
	constructor() {
		super()

		this.state = {}
	}

	render() {
		const { children } = this.props

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
			            <div className="col-md-4">
			                <h3>Add Panel</h3>
			                <form 
			                	name="sentMessage"
			                	id="contactForm"
			                	onSubmit={e => {
								}}>
			                    <div className="control-group form-group">
			                        <div className="controls">
			                            <label>Title:</label>
			                            <input 
				                            type="text"
				                            className="form-control"
				                            id="name" />
			                            <p className="help-block"></p>
			                        </div>
			                    </div>
			                    <button type="submit" className="btn btn-primary">Add</button>
			                </form>
			            </div>
					</div>

					<div className="row">
						{
							children || <ServicesDisplay />
						}
					</div>
				</div>
			</div>
		)
	}
}

export default ServicePage
