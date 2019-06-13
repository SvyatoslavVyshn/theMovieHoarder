import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import poster from '../../images/not-found.png'

import './credits.scss'

const Credits = props => {
    return (
        <div className="credits">
                {props.cast.map( item => {
                    const imageUrl = item.profile_path ? `https://image.tmdb.org/t/p/w300/${item.profile_path}` : poster;
                    return (
                            <div className="credit-item" key={item.id}>
                                <Card key={item.id}>
                                <CardMedia
                                    width="120"
                                    height="380"
                                    component="img"
                                    alt={item.title}
                                    image={imageUrl}
                                    title={item.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        {item.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                            </div>
                    )
                })}
        </div>
    )
}

export default Credits
