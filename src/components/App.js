import React, { Component } from 'react'
import { Route, Router, hashHistory } from 'react-router'

import HomePage from '../pages/HomePage'
import Services from '../pages/Services'
import About from '../pages/About'

export default class App extends Component {
	render() {
		return (
			<Router history={ hashHistory }>
				<Route path='/' component={ HomePage } >
					<Route path='services' component={ Services } />
					<Route path='about' component={ About } />
				</Route>
			</Router>
		)
	}
}
