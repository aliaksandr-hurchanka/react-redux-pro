import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
//import configureStore from './store/configureStore'
import { createStore } from 'redux'
import reducer from './reducers'

//const store = configureStore()

let store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
