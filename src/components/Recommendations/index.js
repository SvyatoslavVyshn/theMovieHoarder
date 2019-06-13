import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom'
import poster from '../../images/not-found.png'
import './recommendations.scss'

const Recommendations = props => {
    return (
        <div className="recommendations">
                {props.recommendations.map( item => {
                    const imageUrl = item.backdrop_path ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` : poster;
                    return (
                            <div className="recommendations-item" key={item.id}>
                                <NavLink to={`/movies/${item.id}`} style={{textDecoration: 'none'}}>
                                    <Card key={item.id}>
                                        <CardMedia
                                            height="280"
                                            component="img"
                                            alt={item.title}
                                            image={imageUrl}
                                            title={item.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="h6">
                                                {item.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </NavLink>
                            </div>
                    )
                })}
        </div>
    )
}

export default Recommendations