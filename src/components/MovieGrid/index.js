import React from 'react'
import Grid from '@material-ui/core/Grid'
import MovieGridItem from '../MovieGridItem'

import './movieGrid.scss'

const MovieGrid = props => {
    return (
        <div className="movie-grid">
            <Grid container spacing={32}>
                {
                    props.movies.map( item => <MovieGridItem key={item.id} item={item} />)
                }
            </Grid>
        </div>
    )
}

export default MovieGrid
