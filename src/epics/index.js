import { combineEpics } from 'redux-observable'
import { getMoviesEpic, searchMoviesEpic } from './movies'
import { getMovieDetailsEpic, getMovieCredits } from './details'
import { getRecommendationsEpic } from './recommendations'

export const rootEpic = combineEpics( 
    getMoviesEpic, 
    searchMoviesEpic, 
    getMovieDetailsEpic, 
    getMovieCredits,
    getRecommendationsEpic 
)