import React, { Component } from 'react'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import Clear from '@material-ui/icons/Clear'

const styles = () => ({
    button: {
        color: '#fff'
    }
})

class Message extends Component {
    state = {
        showMessage: true
    }

    handleMessageRemove = () => {
        this.setState({ showMessage: false }, () => {
            setTimeout(() => {
                this.props.removeAlert(this.props.item.id)
            }, 500)
        })
    }

    render() {
        const { classes, danger, item } = this.props
        return (
            <Slide direction="left" in={this.state.showMessage} mountOnEnter unmountOnExit>
                <div className={ `alert-wrapper ${danger ? 'danger-alert' : 'success-alert'}` }>
                    <div className="alert alert-message">
                        <div className="alert-content">
                            <div className="alert-content-container">
                                <p className="status-message">{item.title}</p>
                                <p>{item.text}</p>
                            </div>
                        </div>

                        <div className="alert-actions">
                            <IconButton
                                className={classes.button}
                                onClick={this.handleMessageRemove}
                            >
                                <Clear />
                            </IconButton>
                        </div>

                    </div>
                </div>
            </Slide>
        )
    }
}

export default withStyles(styles) (Message)
