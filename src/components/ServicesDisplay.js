import React, { Component } from 'react'
import { connect } from 'react-redux'
import ServicesList from '../components/ServicesList'

import { addServiceAction } from '../actions/pageActions'

class ServicesDisplay extends Component {
    constructor() {
        super()
    }

    render() {
        const { dispatch, services } = this.props

        return (
            <ServicesList
                services={ services } />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        services: state.pageReducer
    }
}

const connector = connect(mapStateToProps, undefined)(ServicesDisplay)

export default connector
