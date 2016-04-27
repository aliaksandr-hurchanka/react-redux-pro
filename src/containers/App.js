import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {

    render() {
        const { name, surname, age } = this.props.user
        
        return <div>
            <p>Hello {name} {surname}!</p>
            <p>{age} years! </p>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App)
