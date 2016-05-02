import React, { Component } from 'react'
import Navigation from '../components/Navigation'

export default class HomePage extends Component {
	constructor() {
		super()
	}

	render() {

		const { children } = this.props;

		return ( <div>
				<Navigation />
				<div className='test'>{ children || 'Hello Home Page!' }</div>
			</div>
		)
	}
}
