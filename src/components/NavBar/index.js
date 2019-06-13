import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom'

const styles = {
    root: {
        flexGrow: 1
    }
}


const NavBar = props => {
    const { classes } = props
    // const gradient = 'linear-gradient( to right, #654ea3, #eaafc8)'
    return (
        <div className={classes.root}>
            <AppBar
                position="absolute"
                style={{ backgroundColor:'transparent', color: '#fff', zIndex: 10, boxShadow: 'none' }}
            >
                <Toolbar>
                    <Typography
                        variant="h6" 
                        gutterBottom
                        color="inherit"
                        style={{ flex: 1 }}
                    >
                        Movie Hoarder
                    </Typography>
                    <div>
                        <Button color="inherit" component={NavLink} to="/">
                            Home
                        </Button>
                        <Button color="inherit" component={NavLink} to="/movies">
                            Movies
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(NavBar)