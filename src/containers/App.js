import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {

    render() {
        const { name } = this.props.user
        const { year, photos } = this.props.page
        
        return <div>
            <p>Hello {name} !</p>
            <p>In {year} you have { photos.length } photo! </p>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        page: state.page,
        user: state.user
    }
}

export default connect(mapStateToProps)(App)
