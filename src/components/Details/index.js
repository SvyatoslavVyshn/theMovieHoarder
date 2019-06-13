import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../../common/Loading'
import DetailsInfo from '../DetailsInfo'
import Credits from '../Credits'
import Reacommendations from '../Recommendations'
import { getMovieDetail, getMovieCredits } from '../../actions/details'
import { getRecommendations } from '../../actions/recommendations'
import './details.scss'

class Details extends Component {

    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.movieId)
        this.props.getMovieCredits(this.props.match.params.movieId)
        this.props.getRecommendations(this.props.match.params.movieId)
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.movieId !== this.props.match.params.movieId) {
            this.props.getMovieDetail(this.props.match.params.movieId)
            this.props.getMovieCredits(this.props.match.params.movieId)
            this.props.getRecommendations(this.props.match.params.movieId)
        }
    }

    render () {
        const { details, recommendations } = this.props
        return (
            <div className="movie-details">
                <Loading pending={details.pending || recommendations.pending} size={70}>
                    {
                        details.data && <DetailsInfo details={details.data} />
                    }
                    <h2 className="details-header">Cast</h2>
                    {
                        details.credits && details.credits.cast && <Credits cast={details.credits.cast} />
                    }
                    <h2 className="details-header">Recommendations</h2>
                    {
                        recommendations.data && <Reacommendations recommendations={recommendations.data} />
                    }
                </Loading>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        details: state.details,
        recommendations: state.recommendations
    }
}

const mapDispatchers = {
    getMovieDetail,
    getMovieCredits,
    getRecommendations
}

export default connect( mapStateToProps, mapDispatchers ) (Details)
