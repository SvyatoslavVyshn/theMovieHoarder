import React from 'react'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import notFoundImage from '../../images/not-found.png'

import './detailsInfo.scss'

const DetailsInfo = ({details}) => {
    const img = details.poster_path ? `https://image.tmdb.org/t/p/w500/${details.poster_path}` : notFoundImage;
    // const backgroundStyle = { backgroundImage: 'background center center no-repeat cover' }
    return (
        <div className="details-info">
            <div className="details-thumb">
                <div className="details-caption">
                    <Grid container spacing={40} justify="center" alignItems="center" alignContent="center">
                        <Grid item sm={12} md={6}>
                            <img src={img}  className="movie-poster"/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <div className="movie-info">
                                <div className="movie-header">
                                    <h2 className="movie-name">{details.original_title}</h2>
                                    <h2 className="movie-tagline">{details.tagline}</h2>
                                </div>
                                <p className="movie-caption">
                                    {details.overview}
                                </p>
                                <div>
                                    <h2 className="styled-header">Genres:</h2> {details.genres.map( item => <Chip key={item.id} label={item.name} color="primary" /> )}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="details-description">
                <Grid container spacing={40} justify="center" alignItems="center" alignContent="center">
                    <Grid item md={3} sm={6} xs={12}>
                        <p className="main-info">
                            Budget: <span className="dynamic-info">{details.budget}</span>
                        </p>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <p className="main-info">
                            Revenue: <span className="dynamic-info">{details.revenue}</span>
                        </p>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <p className="main-info">
                            Runtime: <span className="dynamic-info">{details.runtime}</span>
                        </p>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <p className="main-info">
                            Status: <span className="dynamic-info">{details.status}</span>
                        </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default DetailsInfo
