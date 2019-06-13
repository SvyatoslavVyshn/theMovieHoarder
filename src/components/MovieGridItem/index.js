import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import poster from '../../images/not-found.png'

import { truncate } from '../../utils'

const styles = theme => ({
    card: {
        display: "flex",
        flexDirection: "row",
        maxHeight: '320px',
        minHeight: '320px'
        // height: '100%',
        // [theme.breakpoints.down('sm')] : {
        //     display: "block",
        //     width: 'auto'
        // }
        // alignContent: 'flex-start',
        // alignItems: 'flex-start'
        // borderBottom: "1px solid #d3d3d3",
        // paddingBottom: "10px"
    },

    media: {
        maxWidth: '280px',
        minWidth: '180px'
    },

    margin: {
        margin: '10px 0'
    },

    socondaryText: {
        color: '#444',
        margin: '10px 0'
    }
})


const MovieGridItem = ({ item, classes }) => {
    const imageUrl = item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : poster;
    return (
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <NavLink to={`/movies/${item.id}`} style={{textDecoration: 'none'}}>
                <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt={item.title}
                            image={imageUrl}
                            title={item.title}
                            // height="250"
                        />
                        <CardContent className={classes.cardText}>
                            <Typography gutterBottom variant="h6" component="h2">
                                { truncate(item.original_title, 90) }
                            </Typography>
                                <Typography className={classes.socondaryText} component="p">
                                    Release Date: {item.release_date}
                                </Typography>
                                <Typography className={classes.margin} color="secondary" component="p">
                                    Rating: {item.vote_average}
                                </Typography>
                            <Typography component="p">
                                { truncate( item.overview, 180 ) }
                            </Typography>
                        </CardContent>
                </Card>
            </NavLink>
        </Grid>
    )
}

export default withStyles(styles)(MovieGridItem)