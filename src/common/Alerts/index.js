import React from 'react'
import { connect } from 'react-redux'
import { removeAlert } from '../../actions/alerts'
import MessageList from './MessageList'

const Alerts = props => {
    if(props.alerts.length > 0) {
        return <MessageList removeAlert={props.removeAlert} data={props.alerts} />
    }
    return null
}

const mapStateToProps = state => ({
    alerts: state.alerts
})

const mapDispathers = {
    removeAlert
}

export default connect(mapStateToProps, mapDispathers) (Alerts)
